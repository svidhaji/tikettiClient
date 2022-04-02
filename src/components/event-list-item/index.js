import React, { useState } from 'react';

import './styles.scss';
import { object } from 'prop-types';

import { resetTicketStatusByEvent } from 'apis/tickets';
import { useApp } from 'contexts/app-context';

import { Icon } from 'semantic-ui-react';

const EventListItem = ({ event }) => {
  const [currentEventID] = useState(event.eventID);
  const [isLoading, setIsLoading] = useState(false);
  const [codeError, setCodeError] = useState('');
  const [codeSuccess, setCodeSuccess] = useState(false);
  const { currentUser } = useApp();

  const onClickHandler = async () => {
    setIsLoading(true);
    setCodeSuccess('');
    setCodeError('');

    try {
      const tickets = await resetTicketStatusByEvent(
        currentEventID,
        currentUser.accessToken
      );

      if (tickets) {
        setCodeSuccess(true);
      } else {
        setCodeError('Failed to reset tickets');
      }
    } catch (error_) {
      setCodeError(error_.message);
    }

    setIsLoading(false);
  };

  return (
    <div className={`event-list-item-wrapper ${codeError ? 'error' : ''}`}>
      <label>{event.name}</label>
      <button
        className={`default-button ${codeSuccess ? 'success' : ''} ${
          codeError ? 'error' : ''
        }`}
        onClick={onClickHandler}
      >
        <Icon loading={isLoading} name='redo alternate' />
      </button>
    </div>
  );
};

EventListItem.propTypes = {
  event: object
};

export default EventListItem;
