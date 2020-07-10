import React from "react";
import {
  WhatsappIcon,
  WhatsappShareButton,
  FacebookMessengerShareButton,
  InstapaperIcon,
  FacebookIcon,
  FacebookShareButton
  
} from "react-share";

function ShareButton(props) {
  return (
    <div>
      <WhatsappShareButton url={props.url}>
        <WhatsappIcon size={30} style={{marginRight:20,borderRadius:10}}/>
      </WhatsappShareButton>
      <FacebookShareButton  url={props.url}>
        <FacebookIcon size={30} style={{marginRight:20,borderRadius:10}}/>
      </FacebookShareButton>
    </div>
  );
}

export default ShareButton;
