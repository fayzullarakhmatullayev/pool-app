import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import Question from './question.js';

const Choice = sequelize.define('choice', {
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  choice_text: {
    type: DataTypes.STRING(200)
  },
  votes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

Choice.belongsTo(Question, { foreignKey: 'question_id' });
Question.hasMany(Choice, { foreignKey: 'question_id' });

export default Choice;
