import { Outlet } from 'react-router-dom';

import EventsNavigation from '../components/EventsNavigation';

function EventsRootLayout() {
  // toto je bonusova cast
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventsRootLayout;
