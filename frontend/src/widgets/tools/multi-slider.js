
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import MultiCarousel from 'react-multi-carousel';


const MultiSlider = ({
  children, height, afterChange, beforeChange
}) => {
  const style = makeStyles((theme) => ({
    '@global': {
      '.react-multi-carousel-item': {
        '& > div': {
          alignSelf: 'center',
          height: '60%',
          position: 'relative',
          transition: 'width .3s linear, height .3s linear',
          width: '90%'
        },
        height
      },
      '.react-multi-carousel-item--active': {
        '& > div': {
          height: '99%',
          width: '99%'
        }
      }
    },
    slider: {
      direction: 'ltr',
      flex: 1,
      flip: false,
      height: '100%',
      width: '100%'
    }
  }), { name: 'multi-slider-' });

  const classes = style();

  return (
    <div className={classes.slider}>
      <MultiCarousel
        afterChange={(...props) => {
          afterChange(...props);
        }}
        beforeChange={(...props) => {
          beforeChange(...props);
        }}
        additionalTransfrom={1}
        arrows
        autoPlaySpeed={3000}
        centerMode={!isMobile}
        className=""
        containerClass="MultiCarousel-"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1,
            partialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {children}
      </MultiCarousel>
    </div>
  );
};

MultiSlider.propTypes = {
  afterChange: PropTypes.func,
  beforeChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ]).isRequired,
  height: PropTypes.number
};

MultiSlider.defaultProps = {
  afterChange: () => null,
  beforeChange: () => null,
  height: 300
};


export default MultiSlider;
