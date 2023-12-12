import { Component } from 'react';
import { Statistics}  from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';


export class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  
    handleFeedback = option => {
      this.setState(prevState => { 
        return {
          [option]: prevState[option] + 1,
        };
      });
    };
  
    countTotalFeedback = () => {
      return this.state.good + this.state.neutral + this.state.bad;
    };
  
    countPositiveFeedbackPercentage = () => {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    };
  
    render() {
      const { good, neutral, bad } = this.state;
      const totalFeedback = this.countTotalFeedback();
  
    return (
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions 
              options={Object.keys(this.state)} 
              onLeaveFeedback={this.handleFeedback} />
          </Section>
  
          <Section title="Statistics">
            {totalFeedback > 0 ? (
              <Statistics 
              good={good} 
              neutral={neutral} 
              bad={bad} 
              total={totalFeedback} 
              positivePercentage={this.countPositiveFeedbackPercentage()} 
              />
          ) : (
            <Notification message="There is no feedback" />
          )}
          </Section>
        </div>
    );
  }
}