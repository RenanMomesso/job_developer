import React from "react";

// import { Container } from './styles';

function Footer() {
  return (
	  <>

	  <hr style={{marginTop:100}}/>
	<footer>

    <div className="footerHeader" ></div>
    <div className="container rowsfooter" stle={{display:'flex',flexDirection:"row"}}>

		<div className="col-md-4" >
		    <h3>Sobre nós</h3>
		    <p>
		       A loja Juliana Vechini Fernandes Store {"&"} Studio vem para te proporcionar uma experiência de compra incrível com roupas novas e sofisticadas, além de um ambiente agradável e confortável para você se sentir segura provando e relaxando no local.
		    </p>
		</div>

		<div className="col-md-4">
		    <h3>Localização </h3>
		    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d459.9813964628324!2d-47.6655314877069!3d-22.733772485099998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c6313d5a4ea6bb%3A0x24b7c4ed49a48b96!2sAv.%20Nove%20de%20Julho%20-%20Castelinho%2C%20Piracicaba%20-%20SP%2C%20Brasil!5e0!3m2!1spt-BR!2sjo!4v1593691113360!5m2!1spt-BR!2sjo" width="400" height="300" frameBorder="1" style={{border:"1px solid gray"}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
		</div>

		<div className="col-md-4" >
		    <h3>Formas de contanto</h3>
		    <ul>
		        <li>Phone : 123 - 456 - 789</li>
		        <li>E-mail : info@comapyn.com</li>
		        <li>Fax : 123 - 456 - 789</li>
		    </ul>
		    <p>
		        Nos encontre em nossas redes sociais, postamos diaramento novos produtos, estamos no instagram, facebook e whatsapp, podendo fazer pedidos onlines por whatsapp no qual estamos sempre pronto para atender-los.
		    </p>
		    <ul className="sm">
		        <li><a href="#" ><img src="https://www.facebook.com/images/fb_icon_325x325.png" className="img-responsive"/></a></li>
		        <li><a href="#" ><img src="https://lh3.googleusercontent.com/00APBMVQh3yraN704gKCeM63KzeQ-zHUi5wK6E9TjRQ26McyqYBt-zy__4i8GXDAfeys=w300" className="img-responsive" /></a></li>
		        <li><a href="#" ><img src="http://playbookathlete.com/wp-content/uploads/2016/10/twitter-logo-4.png" className="img-responsive"  /></a></li>
		    </ul>
		</div>
    </div>
</footer>
</>
  );
}

export default Footer;
