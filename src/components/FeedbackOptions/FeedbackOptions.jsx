// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

export default class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positive = total > 0 ? (good / total) * 100 : 0;

    return (
      <>
        <div>
          <button
            className={css.button}
            type="button"
            onClick={() => this.handleButtonClick('good')}
          >
            Good
          </button>
          <button
            className={css.button}
            type="button"
            onClick={() => this.handleButtonClick('neutral')}
          >
            Neutral
          </button>
          <button
            className={css.button}
            type="button"
            onClick={() => this.handleButtonClick('bad')}
          >
            Bad
          </button>
        </div>
        <div className={` ${total > 0 ? css.feedbackStatistics : ''}`}>
          <Notification message="There is no feedback"></Notification>
        </div>
        <div className={` ${total > 0 ? '' : css.feedbackStatistics}`}>
          <Section title="Statistics" />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive.toFixed(0)}
          />
        </div>
      </>
    );
  }
}
