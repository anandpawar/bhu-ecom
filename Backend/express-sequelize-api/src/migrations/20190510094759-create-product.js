module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Products', {
        id: {
            type: Sequelize.UUID,
        },
        name: {
            type: Sequelize.STRING,
        },
        quantity: {
            type: Sequelize.STRING,
        },
        createdBy: {
            type: Sequelize.UUID,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('Products'),
};