import { BtnFeedback } from 'components/FeedbackBtns/FeedbackBtns';
import PropTypes from 'prop-types';
import React from 'react';
import { BtnWrapper } from './FeedbackOptions.styled';
import { Icons } from './Icons';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  return (
    <BtnWrapper>
      {options.map(option => {
        return (
          <li key={option}>
            <BtnFeedback
              /* key={option} */
              icon={Icons[option]}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </BtnFeedback>
          </li>
        );
      })}
    </BtnWrapper>
  );
};


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
