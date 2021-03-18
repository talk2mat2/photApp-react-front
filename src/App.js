/* eslint-disable prettier/prettier */
import React from "react";
import { Provider } from "react-redux";
import { store } from "./reducers/store";
import { fetchUser } from "./actions/authactions";
import AuthLoading from "./components/AuthLoading";
import BaseRoute from "./components/BaseRoute";
// import About from "./views/pages/About";
// import Portfolio from "./views/pages/portfolio";
// import How_it_works from "./views/pages/how_it_works";
// import SignUp from "./views/pages/Signup";
// import Contact from "./views/pages/ContactPage";
// import { Scripts } from "./script";

function App() {
  store.dispatch(fetchUser());
  return (
<>
      {/* <AuthLoading> */}
      <BaseRoute />
      {/* <SignUp />
        <About />
        <Contact /> */}
      {/* </AuthLoading> */}
 </>
  );
}

export default App;
