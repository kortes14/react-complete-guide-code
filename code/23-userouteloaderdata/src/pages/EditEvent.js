import { useRouteLoaderData } from 'react-router-dom';

import EventForm from '../components/EventForm';

function EditEventPage() {
  //toto vieme pozuit kedze mame zmenu v app js kde je loader pristupny aj pre edit
  // cez useRouteLoaderData sa dostanem ku higher-lever loader v ramci zadefinovanych paths
  const data = useRouteLoaderData('event-detail');

  return <EventForm event={data.event} />;
}

export default EditEventPage;
