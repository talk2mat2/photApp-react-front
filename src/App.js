/* eslint-disable prettier/prettier */
import React from "react";
import BaseRoute from "./components/BaseRoute";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/headerNew";
import { Scripts } from "./scriptNew";
import Footer from "./components/FooterNew";
import ScrollToTop from "./ScrollToTop";
// import About from "./views/pages/About";
// import Portfolio from "./views/pages/portfolio";
// import How_it_works from "./views/pages/how_it_works";
// import SignUp from "./views/pages/Signup";
// import Contact from "./views/pages/ContactPage";
// import { Scripts } from "./script";
// import './style.css'

// import "./skin.css";

function App() {
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userData = CurrentUser && CurrentUser.userData;
  window.OneSignal = window.OneSignal || [];
  const OneSignal = window.OneSignal;

  // React.useEffect(()=>{
  //   OneSignal.push(function() {
  //     OneSignal.init({
  //       appId: "6419071e-2c4d-43b0-906c-3704961722e1",
  //       notifyButton: {
  //         enable: false,
  //       },
  //     });
  //     OneSignal.showNativePrompt();
  //   });

  // },[])

  React.useEffect(() => {
    if (userData) {
      OneSignal.push(function () {
        OneSignal.setExternalUserId(userData._id);
      });
    } else {
      OneSignal.push(function () {
        OneSignal.removeExternalUserId((results) => console.log(results));
        // OneSignal.setExternalUserId(userData._id);
      });
    }

    // !userData &&
    //   OneSignal.removeExternalUserId((results) => console.log(results));
  });

  // React.useEffect(() => {
  //   const loadScript = async () => {
  //     await Scripts.forEach(async (item) => {
  //       const script = document.createElement("script");
  //       script.src = item.src;
  //       // script.async = true;

  //       document.body.appendChild(script);
  //     });
  //   };
  //   loadScript();
  // }, []);

  return (
    // <Router forceRefresh={true}>
    <Router>
      <ScrollToTop>
        <BaseRoute />
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
