module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        'Product', {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            quantity: {
                type: DataTypes.INTEGER,
            },
            createdBy: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        }
    );
    Product.associate = function(models) {
        models.Product.belongsTo(models.User, {
            foreignKey: 'createdBy'
        });
    };
    return Product;
};