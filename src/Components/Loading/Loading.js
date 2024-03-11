import React from "react";
import LottieView from "lottie-react-native";

function Loading(){
    return (
        <LottieView
          source={require("../../animations/Loading.json")}
          style={{width: "100%", height: "100%"}}
          autoPlay
          loop
        />
      );
}

export default Loading