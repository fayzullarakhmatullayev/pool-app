import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Question = sequelize.define('question', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  question_text: {
    type: DataTypes.STRING(200)
  }
});

export default Question;
