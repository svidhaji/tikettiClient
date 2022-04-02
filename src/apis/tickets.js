import tiketti from './baseApi';

const defaults = {
  url: process.env.REACT_APP_API_URL_TICKETS
};

export const resetSpecificTicketStatus = async (
  ticketCode = null,
  accessToken = null
) => {
  try {
    const url = `${defaults.url}/ticket/${ticketCode}/reset`;

    const update = await tiketti.post(url, {
      ticketCode,
      accessToken
    });

    return update;
  } catch (error) {
    return error;
  }
};

export const resetTicketStatusByEvent = async (eventID, accessToken) => {
  try {
    const url = `${defaults.url}/ticket/resetByEvent`;

    const update = await tiketti.post(url, {
      eventID,
      accessToken
    });

    return update;
  } catch (error) {
    throw new Error(error);
  }
};
