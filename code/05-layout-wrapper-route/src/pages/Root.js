import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import classes from './Root.module.css';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        {/*toto je z react router dom, oznacuje miesto kde sa child elements budu renderovat. Je to marker.*/}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
