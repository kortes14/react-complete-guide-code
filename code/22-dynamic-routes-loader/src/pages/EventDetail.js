import { useLoaderData, json } from 'react-router-dom';

import EventItem from '../components/EventItem';

function EventDetailPage() {
  //novy loader pre id-cko daneho eventu
  const data = useLoaderData();

  return (
    <EventItem event={data.event} />
  );
}

export default EventDetailPage;

//loader obsahuje req a params property
export async function loader({request, params}) {
  const id = params.eventId; //getting access to the eventId

  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json({message: 'Could not fetch details for selected event.'}, {
      status: 500
    })
  } else {
    return response;
  }
}