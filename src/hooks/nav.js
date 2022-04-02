import { useHistory } from 'react-router-dom';
import { func } from 'prop-types';

const useNav = () => {
  const history = useHistory();

  const goTo = (path) => {
    history.push(`${path}`);
  };

  return {
    ...history,
    goTo
  };
};

useNav.propTypes = {
  goTo: func
};

export default useNav;
