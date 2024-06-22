import React from "react";
import { useParams } from "react-router-dom";

import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
    const { roomID } = useParams();
    const meeting = async (element) => {
        const appID = 97892940;
        const serverSecret = "710003af9399973a9e8227b72ca26303";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomID,
            Date.now().toString(),
            "Enter your name"
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
        });
    };

    return <div ref={meeting} style={{ width: "100vw", height: "100vh" }}></div>;
};

export default Room;