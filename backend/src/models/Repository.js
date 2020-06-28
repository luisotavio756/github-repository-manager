import { Model, DataTypes } from 'sequelize';

class Repository extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            owner: DataTypes.STRING,
            description: DataTypes.TEXT,
            language: DataTypes.STRING,
            stars: DataTypes.INTEGER,
            forks: DataTypes.INTEGER,
            license: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'repositories'
        })
    }

    static associate(models) {
        this.hasMany(models.Contributor, {
            foreignKey: 'repository_id',
            as: 'contributors'
        });

        this.hasMany(models.PullRequest, {
            foreignKey: 'repository_id',
            as: 'pull_requests'
        });
    }
}

export default Repository;