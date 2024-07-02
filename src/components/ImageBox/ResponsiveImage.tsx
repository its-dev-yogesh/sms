import React, { forwardRef } from 'react';
// import { Effect, LazyLoadImage } from 'react-lazy-load-image-component'
import getRatio from '@/utils/getRatio';
import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';

interface ImageProps {
  src: string;
  alt: string;
  ratio?:
    | '4/3'
    | '3/4'
    | '6/4'
    | '4/6'
    | '16/9'
    | '9/16'
    | '21/9'
    | '9/21'
    | '1/1'
    | '32/5';
  disabledEffect?: boolean;
  effect?: 'blur';
  sx?: React.CSSProperties;
}

const ResponsiveImage = ({
  ratio,
  disabledEffect = true,
  //   effect = 'blur',
  alt,
  sx,
  src,
  ...other
}: ImageProps) => {
  const content = (
    <Image
      src={src}
      alt={alt}
      fill
      loading="lazy"
      //   wrapperClassName="wrapper"
      //   effect={disabledEffect ? undefined : effect}
      //   placeholderSrc={
      //     disabledEffect ? '/assets/transparent.png' : '/assets/placeholder.svg'
      //   }
      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      {...other}
    />
  );

  if (ratio) {
    return (
      <span
        style={{
          width: '100%',
          lineHeight: 1,
          display: 'block',
          overflow: 'hidden',
          position: 'relative',
          paddingTop: getRatio(ratio),
          ...sx
        }}
      >
        <div
          className="wrapper"
          style={{
            textAlign: 'center',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundSize: 'cover'
          }}
        >
          {src ? (
            src === 'error' ? (
              <div className="flex justify-center items-center">
                {/* <Icon
                  icon={ICONS_WEB.imageError}
                  width={'50%'}
                  className="text-gray-300"
                /> */}
                img
              </div>
            ) : (
              content
            )
          ) : (
            <div className="bg-gray-200 h-full w-full rounded-none skeleton"></div>
          )}
        </div>
      </span>
    );
  }

  return (
    <span
      style={{
        lineHeight: 1,
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        ...sx
      }}
    >
      <div
        className="wrapper"
        style={{
          textAlign: 'center',
          width: '100%',
          height: '100%',
          backgroundSize: 'cover'
        }}
      >
        {content}
      </div>
    </span>
  );
};

export default ResponsiveImage;
