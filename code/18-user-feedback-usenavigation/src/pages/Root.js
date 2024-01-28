import { Outlet, useNavigation } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  //cez navigation a jeho state vieme zobrazit nieco pocas toho ako sa nacitavaju data
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>

        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
