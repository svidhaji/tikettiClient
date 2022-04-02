import React, { useState } from 'react';

import { Input, Icon } from 'semantic-ui-react';
import Button from 'components/button/button';

import { resetSpecificTicketStatus } from 'apis/tickets';

import './styles.scss';
import { useApp } from 'contexts/app-context';
import Popper from 'components/popper/popper';

function Tickets() {
  const { currentUser } = useApp();
  const [isLoading, setIsLoading] = useState(false);
  const [ticketCode, setTicketCode] = useState('');
  const [codeError, setCodeError] = useState('');

  const handleChange = async (e) => {
    setTicketCode(e.target.value);
  };

  const handleButtonClick = async (e) => {
    setIsLoading(true);
    await setCodeError('');
    try {
      const ticket = await resetSpecificTicketStatus(
        ticketCode,
        currentUser.accessToken
      );

      setCodeError(ticket.data);
    } catch (error_) {
      setCodeError(error_.message);
    }

    setIsLoading(false);
  };

  const popperProps = {
    tooltipText: codeError,
    elementId: 'reset-ticket-input',
    tooltipId: 'reset-ticket-tooltip',
    popperProps: {
      placement: 'bottom'
    }
  };

  return (
    <div className='ticket-wrapper'>
      <label>Reset specific ticket</label>
      <div className='reset-wrapper'>
        <Input
          value={ticketCode}
          id='reset-ticket-input'
          onChange={handleChange}
        />
        {codeError ? <Popper {...popperProps} /> : ''}

        <Button className='default-button' onClick={handleButtonClick}>
          <Icon loading={isLoading} name='redo alternate' />
        </Button>
      </div>
    </div>
  );
}

export default Tickets;
