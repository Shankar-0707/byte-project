import React, { useEffect } from "react";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";




const clientId =
  "722554368270-vnmsgd5ea7k20rfm43m64adee7k1ht79.apps.googleusercontent.com";
const apiKey = "AIzaSyAd0S4gfGzjxZkKGkmG6IJPsVcI4ah0wAk";
const scope = "https://www.googleapis.com/auth/youtube.readonly";

export const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        apiKey: apiKey,
        clientId: clientId,
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest",
        ],
        scope: scope,
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const checkSubscription = async () => {
    try {
      const response = await gapi.client.youtube.subscriptions.list({
        part: "snippet",
        mine: true,
      });
      const subscriptions = response.result.items;
      const isSubscribed = subscriptions.some(
        (item) =>
          item.snippet.resourceId.channelId === "UCgIzTPYitha6idOdrr7M8sQ"
      );
      return isSubscribed;
    } catch (error) {
      console.error("Error checking subscription:", error);
      return false;
    }
  };

  const handlelogin = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    authInstance
      .signIn()
      .then(async () => {
        const isSubscribed = await checkSubscription();
        if (isSubscribed) {
          console.log("User is subscribed");
          navigate("/private"); // Correct usage of navigate
        } else {
          console.log("User is not subscribed");
          navigate("/unauthorized"); // Correct usage of navigate
        }
      })
      .catch((error) => {
        console.error("Login failed: ", error);
      });
  };

  return (
    <div>
      <nav> 
          
        
        <h1 className="navheading">BYTE </h1>
         </nav>


      <h1 className="mainheading">Welcome to the home page!</h1>


      <p>(Click on the button below to login with Google and verify your subscription.)</p>


      <button onClick={handlelogin}>Login with Google</button>
      
      
      <p> You are kindly Requested to use Below Gmail to access the private page of our channel</p>
      
      <strong> GMAIL ID - byteproject81</strong>
      
      <strong> PASSWORD - byte-project-81</strong>
      <p> NOTE:-   If you are subscribed to our youtube channel with the email provided above you can access our private page </p>
      <p> NOTE:-   If you are not subscribed to our youtube channel with the email provided above you can not access our private page. So please go and subscribe our channel to access  </p>
    </div>
  );
};

export default HomePage;