import { cn } from '@/utils/cn';
import { ReactNode, useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Iconify from '../iconify';

interface SubMenuProps {
  label: string;
  className?: string;
  children: ReactNode;
  subItemClass?: string;
}

export const SubMenu: React.FC<SubMenuProps> = ({
  label,
  children,
  className,
  subItemClass
}) => {
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      detailsRef.current &&
      !detailsRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={detailsRef}
      className={cn('w-full group text-pretty ', className)}
    >
      <div
        onClick={handleToggle}
        className="flex justify-between items-center cursor-pointer list-none p-1 rounded-lg transition-colors duration-100 group-open:bg-gray-200"
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
            <div className="flex flex-col p-2 gap-2 rounded-lg bg-base-200 glass  shadow-black m-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
