import { _features } from '@/_mocks';
import Iconify from '@/components/iconify';
import { cn } from '@/utils/cn';
import { color } from 'framer-motion';
import { ReactNode } from 'react';

export default function Feature1() {
  return (
    <section className="container-main my-8 bg-transparent ">
      <h1 className="text-3xl font-bold mb-8 text-primary-content w-full text-center">
        {' '}
        TOP FEATURES
      </h1>

      <div className="grid sm:gap-6 sm:grid-cols-1 md:grid-cols-2 sm:mb-10 sm:mt-2">
        {_features.map((feature, index) => (
          <div
            key={index}
            className={cn('sm:card sm:py-0 py-6', feature.color)}
          >
            <div
              className={cn('card-body gap-4 text-primary-content sm:p-6 p-3')}
            >
              <div className="flex sm:justify-between items-center justify-center">
                <Iconify
                  width={40}
                  icon={feature.iconName}
                  className={
                    feature.iconColor + ` hidden sm:flex p-2 btn btn-circle`
                  }
                />
                <h2
                  className={cn(
                    'sm:text-3xl text-2xl font-semibold',
                    feature.iconColor
                  )}
                >
                  {feature.title.toUpperCase()}
                </h2>
              </div>

              <span
                className={cn(
                  'text-base-content text-lg font-extralight border p-4 rounded-md border-neutral'
                )}
              >
                {feature.description}
              </span>
              <div className="flex flex-col gap-3 text-base-content sm:text-lg font-bold p-4">
                {feature.listItems.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2">
                    <Iconify className={item.iconColor} icon={item.iconName} />
                    <span key={itemIndex}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
