import Repository from '../models/Repository';
import Contributor from '../models/Contributor';
import PullRequest from '../models/PullRequest';

import {
    parseISO
} from 'date-fns';
import * as Yup from 'yup';

export default {
    async index(req, res) {
        const { page = 1 } = req.query;

        const repositories = await Repository.findAndCountAll({
            limit: 10,
            offset: (page - 1) * 10,
            distinct: true,
            include: [
                {
                    model: Contributor,
                    as: 'contributors'
                },
                {
                    model: PullRequest,
                    as: 'pull_requests'
                }
            ],
            order: [
                ['id', 'DESC']
            ],
        });

        return res.json({
            repositories: repositories.rows,
            total: repositories.count
        });
    },

    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            owner: Yup.string().required(),
            description: Yup.string(),
            language: Yup.string(),
            stars: Yup.number().required(),
            forks: Yup.number().required(),
            license: Yup.string(),
            created_at: Yup.string().required(),
            contributors: Yup.array(),
            pull_requests: Yup.array()
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails !'});
        }

        const checkRepository = await Repository.findOne({
            where: {
                name: req.body.name,
                owner: req.body.owner
            }
        });

        if(checkRepository) {
            return res.status(400).json({ message: 'Repository already saved !' });
        }
        
        try {
            const repository = await Repository.create({
                ...req.body,
                createdAt: req.body.created_at
            });

            const repository_id = repository.id;

            const contributorsData = req.body.contributors.map(contributor => {
                return {
                    repository_id: repository_id,
                    login: contributor.login,
                    avatar_url: contributor.avatar_url
                }
            });   
            
            const pullRequestsData = req.body.pull_requests.map(pull_request => {
                return {
                    id: pull_request.id,
                    repository_id: repository_id,
                    user: pull_request.user,
                    url: pull_request.url,
                    title: pull_request.title,
                    body: pull_request.body,
                    createdAt: pull_request.created_at,
                };
            }) 

            await Contributor.bulkCreate(contributorsData);
            await PullRequest.bulkCreate(pullRequestsData);
            
            // Promise.all([
            //     req.body.contributors.map(async (contributor) => {
            //         return await Contributor.create({
            //             repository_id: repository_id,
            //             login: contributor.login,
            //             avatar_url: contributor.avatar_url
            //         })
            //     })
            // ]) 
            
            // Promise.all([
            //     req.body.pull_requests.map(async (pull_request) => {
            //         return await PullRequest.create({
            //             id: pull_request.id,
            //             repository_id: repository_id,
            //             user: pull_request.user,
            //             url: pull_request.url,
            //             title: pull_request.title,
            //             body: pull_request.body,
            //             createdAt: pull_request.created_at,
            //         })
            //     })   
            // ]) 
            
            

            return res.json(req.body);
       } catch (error) {
           return res.status(400).json(error);
       }
    }
};