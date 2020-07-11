import React, { useState, useEffect } from "react";
import axios from 'axios'
import { API,APIIMAGE } from "../../config";


function ImageComponent(props) {
  const [Images, setImages] = useState([])

    const fileChangedHandler = (event) => {
        let formData = new FormData();
        formData.append('file', event.target.files[0])
        const config = {
            header: { "content-type": "multipart/form-data" },
          };

        axios.post(API+'/product/image', formData, config).then(response => {
            if (response.data.success) {
                setImages([...Images, response.data.filePath]);
                props.refreshFunction([...Images, response.data.filePath]);
              }
            });
        };

        

  return (
    <div>
      <input type="file" onChange={fileChangedHandler} />
    </div>
  );
}

export default ImageComponent;
