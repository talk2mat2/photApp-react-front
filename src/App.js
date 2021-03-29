/* eslint-disable prettier/prettier */
import React from "react";
import BaseRoute from "./components/BaseRoute";
import { useSelector } from 'react-redux'
// import About from "./views/pages/About";
// import Portfolio from "./views/pages/portfolio";
// import How_it_works from "./views/pages/how_it_works";
// import SignUp from "./views/pages/Signup";
// import Contact from "./views/pages/ContactPage";
// import { Scripts } from "./script";
// import './style.css'

function App() {
  const CurrentUser = useSelector((state) => state.user.currentUser)
  const userData = CurrentUser && CurrentUser.userData
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
  
  },[])

  React.useEffect(()=>{
  
     userData && OneSignal.setExternalUserId(userData._id, (results) => {
      // The results will contain push and email success statuses
      console.log('Results of setting external user id');
      console.log(results);
      if (results.push && results.push.success) {
        console.log('Results of setting external user id push status:');
        console.log(results.push.success);
      }
    })
     !userData && OneSignal.removeExternalUserId(results=>console.log(results));
  
  },[userData])

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
