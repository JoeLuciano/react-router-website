import '../../App.css';
import './CardsFMB.css';

import PortfolioLink from './PortfolioLink';
import starMoleGame from '../../images/StarMoleGame.jpg';
import Calculator from '../../images/Calculator.jpg';
import BasicDogViewer from '../../images/BasicDogViewer.jpg';
import DogGallery from '../../images/DogGallery.jpg';
import DogSwiper from '../../images/DogSwiper.jpg';
import Bakery from '../../images/Bakery.jpg';
import Alien from '../../images/Alien.jpg';
import Blog from '../../images/Blog.jpg';

function CardsFMB() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <PortfolioLink
              src={starMoleGame}
              text='Star Mole Game'
              label='Game'
              path='https://joeluciano.github.io/website/FrontEndMastersCourse/Star-Mole/'
            />
            <PortfolioLink
              src={Calculator}
              text='Primitive Calculator'
              label='Tool'
              path='https://joeluciano.github.io/website/FrontEndMastersCourse/5-github/begin/calculator.html'
            />
          </ul>
          <ul className='cards__items'>
            <PortfolioLink
              src={BasicDogViewer}
              text='Basic Dog Viewer'
              label='Photos'
              path='https://joeluciano.github.io/website/FrontEndMastersCourse/Pic_Practice/dogs/'
            />
            <PortfolioLink
              src={DogGallery}
              text='Basic Dog Gallery'
              label='Photos'
              path='https://joeluciano.github.io/website/FrontEndMastersCourse/Pic_Practice/gallery/'
            />
            <PortfolioLink
              src={DogSwiper}
              text='Dog Gallery with Swiper'
              label='Photos'
              path='https://joeluciano.github.io/website/FrontEndMastersCourse/Pic_Practice/swiper-gallery/'
            />
          </ul>
          <ul className='cards__items'>
            <PortfolioLink
              src={Bakery}
              text='Bakery'
              label='Website'
              path='https://joeluciano.github.io/website/FrontEndMastersCourse/practice/'
            />
            <PortfolioLink
              src={Alien}
              text='Alien Abduction'
              label='Form'
              path='https://joeluciano.github.io/website/FrontEndMastersCourse/4-forms/begin/forms.html'
            />
            <PortfolioLink
              src={Blog}
              text='Zorgblag...'
              label='Blog'
              path='https://joeluciano.github.io/website/FrontEndMastersCourse/3-layout/blog-begin/blog.html'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsFMB;
