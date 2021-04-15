import '../../App.css';
import './TilesFCC.css';
import Accordian from '../Accordion';
import React from '../../images/React.jpg';
import ContentForm from '../../images/ContentForm.jpg';
import Pineapple from '../../images/pineapple.png';
import TechDoc from '../../images/TechDoc.png';
import Dog from '../../images/dog.jpg';

function TilesFCC() {
  return (
    <div className='tiles'>
      <h1>Check out these EPIC Projects!</h1>
      <ul className='tile__items'>
        <Accordian
          icon={<i class='fas fa-laptop-code fa-fw'></i>}
          text='Responsive Web Design'
          content={[
            {
              image: ContentForm,
              text: 'Contact Form',
              path:
                'https://joeluciano.github.io/website/FreeCodeCamp/ResponsiveWebDesign/ContactForm/index.html',
            },
            {
              image: Dog,
              text: 'Dog Viewer',
              path:
                'https://joeluciano.github.io/website/FreeCodeCamp/ResponsiveWebDesign/DogViewer/index.html',
            },
            {
              image: Pineapple,
              text: 'Product Landing Page',
              path:
                'https://joeluciano.github.io/website/FreeCodeCamp/ResponsiveWebDesign/ProductLandingPage/index.html',
            },
            {
              image: TechDoc,
              text: 'Technical Documentation',
              path:
                'https://joeluciano.github.io/website/FreeCodeCamp/ResponsiveWebDesign/TechnicalDocumentation/index.html',
            },
          ]}
        />
        <Accordian
          icon={<i class='fab fa-js fa-fw'></i>}
          text='JavaScript Algorithms and Data Structures'
          content={[
            { image: ContentForm, text: 'Contact Form' },
            { image: React, text: 'Dog Viewer' },
            { image: React, text: 'Product Landing Page' },
            { image: React, text: 'Technical Documentation' },
          ]}
        />
        <Accordian
          icon={<i class='fab fa-react fa-fw'></i>}
          text='Front End Development Libraries'
          content={[
            { image: ContentForm, text: 'Contact Form' },
            { image: React, text: 'Dog Viewer' },
            { image: React, text: 'Product Landing Page' },
            { image: React, text: 'Technical Documentation' },
          ]}
        />
      </ul>
    </div>
  );
}

export default TilesFCC;
