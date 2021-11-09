module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    Fname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Lname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  });
  User.associate = (models) => {
    User.hasOne(models.Progress, {
      foreignKey: {
        name: "UserId",
        allowNull: false,
      },
    });
  };
  return User;
};
