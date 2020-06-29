import { Model, DataTypes } from 'sequelize';

class Contributor extends Model {
    static init(sequelize) {
        super.init({
            login: DataTypes.STRING,
            avatar_url: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'contributors'
        })
    }

    static associate(models) {
        this.belongsTo(models.Repository, {
            foreignKey: 'repository_id',
            as: 'repositorie_contributors'
        });
    }
}

export default Contributor;