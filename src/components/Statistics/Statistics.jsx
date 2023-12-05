import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={css.statistics}>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </div>
);

