<h1 align="center">
   Server from RepositoryList 
</h1>
<h4 align="center">
  This project was developed only from merge concepts of the Node.js + Sequelize ORM. It possible list repositories from user/organization and save/destroy in database.
</h4>
<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;
</p>

## :rocket: Technologies

-  [Node.js](https://nodejs.org)
-  [SequelizeORM](https://sequelize.org/)

## :information_source: How To Use

NOTE: You need rename the .env-example from .env and add configs from you Database.
To run this application, you'll need clone and run this steps below. 

```bash
# Clone this repository
$ git clone https://github.com/luisotavio756/github-repository-manager.git

# Go into the repository
$ cd github-repository-manager/backend

# Install packages
$ yarn install or npm install

# Init Database
$ yarn sequelize db:create

# Run migrations
$ yarn sequelize db:migrate

# Build Application with sucrase
$ yarn build or npm run build

# Run start
$ yarn start or npm run start

# Enjoy!
```

## 🚖 Routes
I left a [Insomnia file](../InsomniaRestClient.json) for API calls.

|TYPE|REQUEST|RESPONSE
|--|--|--|
|GET|http://localhost:3333/repositories|JSON with repositories and total
| | |
**BODY:**

    No Body

|TYPE|REQUEST|RESPONSE
|--|--|--|
|POST|http://localhost:3333/repositories| JSON with repositorie stored
| | |
**BODY:**

    {
	    "name": "dashboard-reacts",
		"owner": "luisotavio756",
		"description": "null",
		"language": "Javascript",
		"stars": 29,
		"forks": 4,
		"license": "null",
		"created_at": "2020-05-15T13:26:15Z",
		"contributors": []
		"pull_requests": []
	}
|TYPE|REQUEST|RESPONSE
|--|--|--|
|DELETE|http://localhost:3333/repositories/:id| Response status 200
| | |
**BODY:**

    No Body


---

Made with ♥ by Luis Otávio :wave:

