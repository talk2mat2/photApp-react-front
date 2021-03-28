/* eslint-disable prettier/prettier */
import React from "react";
import BaseRoute from "./components/BaseRoute";
// import About from "./views/pages/About";
// import Portfolio from "./views/pages/portfolio";
// import How_it_works from "./views/pages/how_it_works";
// import SignUp from "./views/pages/Signup";
// import Contact from "./views/pages/ContactPage";
// import { Scripts } from "./script";
// import './style.css'

function App() {
  window.OneSignal = window.OneSignal || [];
  const OneSignal = window.OneSignal;

  React.useEffect(()=>{
    OneSignal.push(function() {
      OneSignal.init({
        appId: "6419071e-2c4d-43b0-906c-3704961722e1",
        notifyButton: {
          enable: false,
        },
      });
      OneSignal.showNativePrompt();
    });
     OneSignal.push(function() {
    OneSignal.setExternalUserId('605e17222839b416d88c0b31');
  });
  },[])

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
