import React, { useContext, useState, createContext, useEffect } from 'react';

import { getAllEvents } from 'apis/events';

const AppContext = createContext({});

const AppProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    async function processEvents() {
      try {
        const events = await getAllEvents();

        setAllEvents(events.data.rows);
      } catch {
        setAllEvents([]);
      }
    }

    processEvents();
  }, [setAllEvents]);

  const values = { currentUser, setCurrentUser, allEvents, setAllEvents };

  return <AppContext.Provider value={values} {...props} />;
};

const useApp = () => useContext(AppContext);

export { AppProvider, useApp };
