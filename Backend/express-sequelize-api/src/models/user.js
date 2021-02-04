module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User', {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
            },
            userName: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
            },
            isAdmin: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            isVerified: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        }
    );
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};