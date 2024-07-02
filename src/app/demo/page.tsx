'use client';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeForm from '@/components/ThemeForm/ThemeForm';
import ThemeDemo from '@/components/ThemeForm/ThemeDemo';

type ThemeObject = {
  [key: string]: string;
};

interface AccordionItemProps {
  title: string;
  content: ReactNode;
}
const DemoPage: React.FC = () => {
  const [theme, setTheme] = useState<null | ThemeObject>(null);
  const accordionItems = [
    {
      title: 'Accordion Item 1',
      content:
        'This is the content for accordion item 1. You can place any content here, such as text, images, or other components.'
    },
    {
      title: 'Accordion Item 2',
      content:
        'This is the content for accordion item 2. You can place any content here, such as text, images, or other components.'
    },
    {
      title: 'Accordion Item 3',
      content:
        'This is the content for accordion item 3. You can place any content here, such as text, images, or other components.'
    }
  ];

  const applyTheme = (themeName: string, themeObject: ThemeObject) => {
    setTheme(themeObject);
    console.log(`Applied theme "${themeName}"`);
  };

  const detailsRef = useRef<HTMLDetailsElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      detailsRef.current &&
      !detailsRef.current.contains(event.target as Node)
    ) {
      detailsRef.current.removeAttribute('open');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Theme Demo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ThemeForm onSubmit={applyTheme} />
        </div>
        <div>{theme && <ThemeDemo theme={theme} />}</div>
      </div>

      <div className="max-w-md mx-auto mt-10">
        {accordionItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default DemoPage;

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
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
    <div ref={detailsRef} className="group mb-4 bg-white shadow-lg rounded-lg">
      <div
        onClick={handleToggle}
        className="cursor-pointer list-none p-4 bg-gray-100 rounded-lg transition-colors duration-300 group-open:bg-gray-200"
      >
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 border-t border-gray-200">
              <p>{content}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
