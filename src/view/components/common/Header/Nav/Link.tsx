import { useEffect, useState } from 'react';
import { Link as Route, useLocation } from 'react-router-dom';

interface LinkProps {
  route: string;
  text: string;
  mainLink?: boolean;
}

const Link: React.FunctionComponent<LinkProps> = ({
  route,
  text,
  mainLink,
}) => {
  const [isActive, setIsActive] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (mainLink) setIsActive(location.pathname === route && mainLink);
    console.log(isActive);
  }, [location]);

  return (
    <Route className={`${isActive ? 'main-link' : ''}`} to={route}>
      {text}
    </Route>
  );
};

export default Link;
