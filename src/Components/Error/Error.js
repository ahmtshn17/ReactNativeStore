import React from "react";
import LottieView from "lottie-react-native";

function Error(){
    return (
        <LottieView
          source={require("../../animations/Error.json")}
          style={{width: "100%", height: "100%"}}
          autoPlay
          loop
        />
      );
}

export default Error