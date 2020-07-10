import React from "react";
import Layout from "../../components/Layout";
import Carousel from "../../components/Carousel";
import Images from "../../components/Images";
import NewsLetter from "../../components/NewsLetter";
// import { Container } from './styles';

function Home() {

  if(window.Notification && Notification.permission !== "denied"){
    Notification.requestPermission()
  }
  
  return (
    <Layout>
      <header style={{marginBottom:100, marginTop:30}}>
            <h1 className="logo_titulo">Juliana Fernandes Store</h1>
        <div className="image_background">
          <div>
          </div>
        </div>
      </header>

      <Images/>
      <Carousel/>
      <NewsLetter/>
      {/* <Body/> */}
    </Layout>
  );
}

export default Home;
