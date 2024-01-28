import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const { events } = useLoaderData();

  //takto deferneme data, cize vlozime loading... az kym sa to vsetko nenacita
  return (
    //suspense - je to z reactu, show a fallback while we are waiting for a data to be loaded
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      {/*tu vlozime deffered value, cize events*/}
      <Await resolve={events}>
        {/*tato funckia nizsie sa execut-ne ked sa nacita vsetko*/}
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      }
    );
  } else {
    //nemozeme vratit response rovno, ale musime to vratit cez json
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  //tu nechcem awaitovat na promise, ale pouzit defer z react routra
  // defer funkction takes all http req from the page
  return defer({
    events: loadEvents(), //execute the load event function, and save it to events prop. (takze musi to vratit promise)
  });
}
