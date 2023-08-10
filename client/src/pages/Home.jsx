/* import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  return (
    <div className='start-container'>
      <h1>Página de Inicio en Construcción</h1>
    </div>
  )
}

export default Home
 */

import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div className='container'>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperfx.com%2Fview_image%2Flogo-nike-1280x720-wallpaper-5376.jpg&f=1&nofb=1&ipt=69b212f503105888eebf130d9dafd4434447eb944d22a6cfd741b40ad736c1fb&ipo=images"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fproleon.com.mx%2Fwp-content%2Fuploads%2F2019%2F07%2Fnike-atletas-embarazadas.jpg&f=1&nofb=1&ipt=4c2ef426d2fdce3aacea536840bc0dd9dfc62b1ef2171bcbde0724e2ec892e3d&ipo=images"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.marketingregistrado.com%2Fimg%2Fnoticias%2Fnike-atletas.jpg&f=1&nofb=1&ipt=3610678597360eca407ea55fbfede0a7c44632a61bf0634f50e27f6f182c1265&ipo=images"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Home;