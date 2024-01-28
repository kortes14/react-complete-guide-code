import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  //takto si popytam vysledok z loader funkcie
  // taktiez to viem pouzit aj hocikde nizsie v ramci routes
  const events = useLoaderData();

  return <EventsList events={events} />;
}

export default EventsPage;
