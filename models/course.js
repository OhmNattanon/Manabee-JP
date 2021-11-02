module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "Course",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mainVid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mainText: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underScored: true,
    }
  );
  return Course;
};
