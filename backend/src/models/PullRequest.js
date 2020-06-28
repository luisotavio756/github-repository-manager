import { Model, DataTypes } from 'sequelize';

class PullRequest extends Model {
    static init(sequelize) {
        super.init({
            url: DataTypes.STRING,
            title: DataTypes.STRING,
            body: DataTypes.TEXT,
            user: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'pull_requests'
        })
    }

    static associate(models) {
        this.belongsTo(models.Repository, {
            foreignKey: 'repository_id',
            as: 'repositorie_requests'
        });
    }
}

export default PullRequest;