import React from 'react';
import { List } from 'semantic-ui-react';

import EventListItem from 'components/event-list-item';

import './styles.scss';
import { useApp } from 'contexts/app-context';

function Events() {
  const { allEvents } = useApp();

  return (
    <div className='event-wrapper'>
      <label>Reset Tickets by Event</label>
      <List divided relaxed>
        {allEvents &&
          allEvents.map((event) => (
            <List.Item key={event.eventID}>
              <EventListItem event={event} />
            </List.Item>
          ))}
      </List>
    </div>
  );
}

export default Events;
