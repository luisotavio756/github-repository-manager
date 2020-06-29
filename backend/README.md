<h1 align="center">
   Server from RepositoryList 
</h1>
<h4 align="center">
  This project was developed only from merge concepts of the Node.js + Sequelize ORM. It possible list repositories from user/organization and save in database.
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
$ yarn sequelize db:migration

# Run start
$ yarn dev or npm run dev

# Enjoy!
```
---

Made with ♥ by Luis Otávio :wave:

