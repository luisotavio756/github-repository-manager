import Repository from '../models/Repository';
import Contributor from '../models/Contributor';
import PullRequest from '../models/PullRequest';
import {
    parseISO
} from 'date-fns';
import * as Yup from 'yup';

export default {
    async index(req, res) {
        const repositories = await Repository.findAll({
            include: [
                {
                    model: Contributor,
                    as: 'contributors'
                },
                {
                    model: PullRequest,
                    as: 'pull_requests'
                }
            ]
        });

        return res.json(repositories);
    },

    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            owner: Yup.string().required(),
            description: Yup.string().required(),
            language: Yup.string().required(),
            stars: Yup.number().required(),
            forks: Yup.number().required(),
            license: Yup.string().required(),
            created_at: Yup.string().required(),
            contributors: Yup.array(),
            pull_requests: Yup.array()
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails !'});
        }
        
        try {
            const repository = await Repository.create({
                ...req.body,
                createdAt: req.body.created_at
            });

            const repository_id = repository.id;

            Promise.all([
                req.body.contributors.map(async (contributor) => {
                    return await Contributor.create({
                        repository_id: repository_id,
                        user: contributor.user,
                        createdAt: contributor.created_at,
                    })
                })
            ]) 
            
            Promise.all([
                req.body.pull_requests.map(async (pull_request) => {
                    return await PullRequest.create({
                        id: pull_request.id,
                        repository_id: repository_id,
                        user: pull_request.user,
                        url: pull_request.url,
                        title: pull_request.title,
                        body: pull_request.body,
                        createdAt: pull_request.created_at,
                    })
                })   
            ]) 
            

            return res.json({
                ...repository.dataValues,
                contributors: req.body.contributors,
                pull_requests: req.body.pull_requests
            });
       } catch (error) {
           return res.status(400).json(error);
       }
    }
};