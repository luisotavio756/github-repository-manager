import React, { useState } from 'react';
import axios from 'axios';
import { FiSearch, FiGithub, FiBook, FiCircle, FiStar, FiFolder, FiUpload } from 'react-icons/fi';
import { FaStar, FaNetworkWired, FaCircle } from 'react-icons/fa';

import { Container, List } from './styles.js';
import { Card } from '../../components/Card';
import { Form } from '../../components/Form/index.js';
import { Button } from '../../components/Button/index.js';
import api from '../../services/api';

interface Repository {
    id: string;
    name: string;
    owner: {
        login: string;
    };
    stargazers_count: number;
    forks: number;
    description: string;
    language: string;
    license: {
        name: string,
    };
    created_at: Date;
}

interface Contributor {
    login: string;
    avatar_url: string;
};

interface PullRequest {
    id: number;
    title: string;
    url: string;
    user: {
        login: string;
    };
    body: string;
    created_at: Date;
}

const Main = () => {
    const [ owner, setOwner ] = useState<string>('luisotavio756');
    const [ repositories, setRepositories] = useState<Repository[]>([]);
    const [ contributors, setContributors] = useState<Contributor[]>([]);
    const [ pull_requests, setPullRequests] = useState<PullRequest[]>([]);

    const [ loading, setLoading] = useState(false);

    function handleFindRepositories(e: HTMLFormElement) {
        e.preventDefault();

        if(owner.length === 0)
            return;

        setLoading(true);
        axios.get<Repository[]>(`https://api.github.com/users/${owner}/repos`).then(response => {
            const repos = response.data.map(repo => {
                return {
                    id: repo.id,
                    name: repo.name,
                    owner: {
                        login: repo.owner.login,
                    },
                    stargazers_count: repo.stargazers_count,
                    forks: repo.forks,
                    description: repo.description,
                    language: repo.language,
                    license: repo.license,
                    created_at: repo.created_at
                }
            });

            setRepositories(repos);
            setLoading(false);
        })
    }

    async function handleSaveRepository(data: Repository) {
        async function loadData() {
            const arrayContribs = await axios.get<Contributor[]>(`https://api.github.com/repos/${owner}/${data.name}/contributors`);

            const dataContribs = arrayContribs.data.map(contributor => {
                return {
                    login: contributor.login,
                    avatar_url: contributor.avatar_url
                };
            });

            setContributors(dataContribs);
        }

        await loadData();

        // axios.get<PullRequest[]>(`https://api.github.com/repos/${owner}/${data.name}/pulls?per_page=3`).then(response => {
        //     const data = response.data.map(pull => {
        //         return {
        //             id: pull.id,
        //             title: pull.title,
        //             url: pull.url,
        //             body: pull.body,
        //             user: {
        //                 login: pull.user.login
        //             },
        //             created_at: pull.created_at
        //         }
        //     });

        //     setPullRequests(data);
        // });



            console.log(contributors);


    }

    return (
        <Container>
            <div className="title">
                <h1>List Repositories</h1>
            </div>
            <Card>
                <div className="card-body">
                    <Form>
                        <div className="input-block">
                            <label htmlFor="">Type User/Organization</label>
                            <input
                                onChange={(e) => setOwner(e.target.value)}
                                type="text"
                                placeholder="Ex: luisotavio756"
                            />
                        </div>
                        <Button
                            margin="5px 0 0 0"
                            className="info right"
                            type="submit"
                            onClick={handleFindRepositories}
                        ><FiSearch /> Find Repositories</Button>
                    </Form>
                </div>
            </Card>
            { JSON.stringify(contributors) }
            {loading && <div style={{ marginTop: 20 }} className="loader-more"></div>}
            {!loading && repositories.map(item => (
                <Card key={ item.id }>
                    <div className="card-title">
                        <h3><FiBook /> {item.name}</h3>
                    </div>
                    <div className="card-body light-text">
                        <p style={{ marginTop: 5 }}>{ (item.description) !== null ? item.description : 'No description' }</p>
                        <List>
                            <li>
                                <FaCircle /> { item.language }
                            </li>
                            <li>
                                <FaStar /> { item.stargazers_count }
                            </li>
                            <li>
                                <FaNetworkWired /> { item.forks }
                            </li>
                        </List>
                        <Button
                            className="btn-sm danger right"
                            onClick={() => handleSaveRepository(item)}
                        >
                            <FiBook /> Save
                        </Button>
                    </div>
                </Card>
            ))}

        </Container>
    );
}

export default Main;
