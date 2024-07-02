import { cn } from '@/utils/cn';
import { ReactNode, useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Iconify from '../iconify';

interface SubMenuDrawerProps {
  label: string;
  className?: string;
  children: ReactNode;
  subItemClass?: string;
}

export const SubMenuDrawer: React.FC<SubMenuDrawerProps> = ({
  label,
  children,
  className,
  subItemClass
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn('w-full group text-pretty ', className)}>
      <div
        onClick={handleToggle}
        className="flex justify-between items-center cursor-pointer list-none pr-4 p-2 hover:text-primary-content rounded-lg transition-colors duration-100 group-open:bg-gray-200 hover:bg-primary"
      >
        <li className="font-bold">{label}</li>
        <div className="w-4">
          <Iconify
            width={'auto'}
            icon={isOpen ? 'iconamoon:arrow-up-2' : 'iconamoon:arrow-down-2'}
          />
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.1 }}
            className={cn('overflow-hidden ', subItemClass)}
          >
            <div className="flex flex-col gap-2 rounded-none bg-transparent m-2 border-l border-gray-500 pl-1 ">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
