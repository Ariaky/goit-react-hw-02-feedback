import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.wrapper}>
            {options.map((option) => (
            <button 
                key={option}
                className={css.button} 
                type="button" 
                onClick={() => onLeaveFeedback(option)}>
                {option}
            </button>
            ))}
        </div>
  );
};
/*
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
*/
