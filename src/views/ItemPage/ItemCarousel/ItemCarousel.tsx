import React from 'react';
import { Carousel } from 'antd-mobile';

function ItemCarousel(): JSX.Element {
  return (
    <div style={{ marginTop: '45px' }}>
      <Carousel
        autoplay={false}
        dots
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={(index) => console.log('slide to', index)}
      >
        {['7104594a-1f51-e4fd-9923-3010a188a697?imageView2/2/w/1080/format/jpg/q/75', 'be1fb05a-a6df-f4a2-79bb-d978a1552682?imageView2/2/w/1080/format/jpg/q/76', '7144a4f0-df4c-c777-bb6b-95d0423ceae6?imageView2/2/w/1080/format/jpg/q/75'].map((val) => (
          <a
            key={val}
            href="http://www.alipay.com"
            style={{ display: 'inline-block', width: '100%', height: 'auto' }}
          >
            <img
              src={`https://ci.xiaohongshu.com/${val}.png`}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
              }}
            />
          </a>
        ))}
      </Carousel>
    </div>
  );
}

export default ItemCarousel;
