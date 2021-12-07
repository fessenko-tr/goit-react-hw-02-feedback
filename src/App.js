import React, { Component } from "react";
import "./App.css";
import FeedbackOptions from "./components/FeedBackOptions/Feedback";
import Stats from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import NotificationMessage from "./components/NotificationMessage/Notification message";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (btn) => {
    this.setState((current) => {
      return {
        [btn]: current[btn] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round((100 * this.state.good) / this.countTotalFeedback());

  render() {
    const feedBackTitle = "Please leave feedback";
    const statisticsTitle = "Statistics";
    const feedBakBtnOptions = ["Good", "Neutral", "Bad"];
    const onEmptyFeedbackMsg = "There is no feedback";
    const { good, neutral, bad } = this.state;
    const totalFeedbackCount = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title={feedBackTitle}>
          <FeedbackOptions
            options={feedBakBtnOptions}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title={statisticsTitle}>
          {totalFeedbackCount ? (
            <Stats
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbackCount}
              positiveFeedback={positiveFeedbackPercentage}
            />
          ) : (
            <NotificationMessage message={onEmptyFeedbackMsg} />
          )}
        </Section>
      </>
    );
  }
}

export default App;
