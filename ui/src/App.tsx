/*
 * SPDX-License-Identifier: Apache-2.0
 * SPDX-FileCopyrightText: Huawei Inc.
 */

import { Route, Routes } from 'react-router-dom';
import './styles/app.css';
import Home from './components/content/home/Home';
import LoginScreen from './components/content/login/LoginScreen';
import Protected from './components/protectedRoutes/ProtectedRoute';
import { homePageRoute } from './components/utils/constants';
import MiddleWare from "./components/content/catalog/MiddleWare/MiddleWare";


function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path={homePageRoute}
        element={
          <Protected>
            <Home />
          </Protected>
        }
      />
      {/*<Route path={'/catalog'}*/}
      {/*       element={*/}
      {/*         <Protected>*/}
      {/*           <Catalog/>*/}
      {/*         </Protected>*/}
      {/*       }*/}
      {/*/>*/}
      <Route path={'/middleware'}
             element={
               <Protected>
                 <MiddleWare/>
               </Protected>
             }
      />
      <Route path='*' element={<LoginScreen />} />
    </Routes>
  );
}

export default App;
