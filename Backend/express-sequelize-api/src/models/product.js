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
            created_by: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        }
    );
    Product.associate = function(models) {
        // associations can be defined here
    };
    return Product;
};