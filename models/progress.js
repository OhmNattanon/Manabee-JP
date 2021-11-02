module.exports = (sequelize, DataTypes) => {
  const Progress = sequelize.define(
    "Progress",
    {
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      underScored: true,
    }
  );
  Progress.associate = (models) => {
    Progress.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Progress;
};
