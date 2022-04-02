import tiketti from './baseApi';

const defaults = {
  url: process.env.REACT_APP_API_URL_EVENTS
};

export const getAllEvents = async (
  locale,
  etype = null,
  page = 0,
  pageSize = null
) => {
  try {
    const url = `${defaults.url}/events`;
    const params = { locale, page, pageSize, etype };

    return await tiketti.get(url, params);
  } catch (error) {
    return [];
  }
};
