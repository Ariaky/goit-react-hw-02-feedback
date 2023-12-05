import css from './Section.module.css';

export const Section = ({ title, children }) => (
  <div className={css.section}>
    <h2>{title}</h2>
    {children}
  </div>
);