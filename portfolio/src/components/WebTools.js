import React,  { useState }from 'react'
import imp from '../sample/imp.jpg'
import imp2 from '../sample/imp2.png'
import icon1 from '../sample/icon1.png'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: imp,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: imp2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: icon1,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
     
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      className="container fluid col sm-4">
        <img src={item.src} alt={item.altText} width="300px" height="300px" />
        <hr/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
     
     
 
     
    );
  });
  const images = items.map((item)=>{
      return (
          <div className="col sm-4">
          <img src={item.src}  alt={item.altText} width="100px" height="100px"/>
          <h3> {item.altText}</h3>
          </div>
      )
  })

  return (
      <div>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    <div className="row">{images}</div>
        
    </div>

  );
}

export default Example 
