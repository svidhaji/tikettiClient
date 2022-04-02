import React from 'react';
import { Tab } from 'semantic-ui-react';

import MainLayout from 'layouts/main-layout/main-layout';

import Events from 'scenes/events';
import Tickets from 'scenes/tickets';
import Forms from 'scenes/forms';
import Lists from 'scenes/list';

import './styles.scss';

function Home() {
  const panes = [
    {
      menuItem: 'Events',
      render: () => (
        <Tab.Pane>
          <Events />
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Tickets',
      render: () => (
        <Tab.Pane attached={false}>
          <Tickets />
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Q&A section',
      render: () => (
        <Tab.Pane attached={false}>
          <Lists />
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Create a question',
      render: () => (
        <Tab.Pane attached={false}>
          <Forms />
        </Tab.Pane>
      )
    }
  ];
  return (
    <MainLayout>
      <div className='home-wrapper'>
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </div>
    </MainLayout>
  );
}

export default Home;
