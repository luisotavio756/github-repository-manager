import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiSearch, FiBook, FiUser, FiActivity, FiGitPullRequest, FiLink } from 'react-icons/fi';
import { FaStar, FaNetworkWired, FaCircle, FaBookmark } from 'react-icons/fa';


import { Container, List } from './styles.js';
import { Card } from '../../components/Card';
import { Form } from '../../components/Form/index.js';
import { Button } from '../../components/Button/index.js';
import addNotification from '../../components/Notification';

import api from '../../services/api';

interface Repository {
    id: string;
    name: string;
    owner: string;
    stars: number;
    forks: number;
    description: string;
    language: string;
    license: string;
    created_at: Date;
    contributors: {
        login: string;
        avatar_url: string;
    }[];
    pull_requests: {
        id: number;
        title: string;
        url: string;
        user: string;
        body: string;
        created_at: Date;
    }[];
}

interface Contributor {
    login: string;
    avatar_url: string;
}

interface PullRequest {
    id: number;
    title: string;
    url: string;
    user: string;
    body: string;
    created_at: Date;
}

const SavedRepositories = () => {
    const [ repositories, setRepositories] = useState<Repository[]>([]);
    const [ loading, setLoading] = useState(false);

    async function handleFindRepositories() {

        setLoading(true);

        const response = await api.get('/repositories');

        setRepositories(response.data.repositories);
        setLoading(false);

    }

    useEffect(() => {
        handleFindRepositories();
    }, []);

    return (
        <Container>
            <div className="title">
                <h1>Stored Repositories</h1>
            </div>
            {loading && <div style={{ marginTop: 20 }} className="loader-more"></div>}
            {!loading && repositories.map(item => (
                <Card key={ item.id }>
                    <div className="card-title">
                        <h3><FiBook /> {item.name}</h3>
                        <a href={`https://github.com/${item.owner}/${item.name}`} target="_blank"><FiLink /></a>
                    </div>
                    <div className="card-body light-text">
                        <p style={{ marginTop: 5 }}>{ (item.description) !== null ? item.description : 'No description' }</p>
                        <List style={{ marginTop: 5 }}>
                            <li>
                                <FaCircle /> { item.language }
                            </li>
                            <li>
                                <FaStar /> { item.stars }
                            </li>
                            <li>
                                <FaNetworkWired /> { item.forks }
                            </li>
                            <li>
                                <FaBookmark /> { item.license !== '' ? item.license : 'nothing' }
                            </li>
                        </List>
                        <div className="contributors">
                            <h5>Contributors:</h5>
                            <List>
                                { item.contributors.map((contributor: Contributor) => (
                                    <li>
                                        <a href={`https://github.com/${contributor.login}`} target="_blank">
                                            <FiUser /> { contributor.login }
                                        </a>
                                    </li>
                                ))}
                            </List>
                        </div>
                        <div className="pulls">
                            <h5 style={{ marginTop: 10 }}>Pulls:</h5>
                            { item.pull_requests.map((pull_request: PullRequest) => (
                                <a href={pull_request.url} target="_blank">
                                    <FiGitPullRequest /> { pull_request.title }
                                </a>
                            ))}
                        </div>
                        {/* <a hre></a> */}
                        {/* <Button
                            className="btn-sm danger right"
                            onClick={() => handleSaveRepository(item)}
                        >
                            <FiBook /> Save
                        </Button> */}
                    </div>
                </Card>
            ))}

        </Container>
    );
}

export default SavedRepositories;
