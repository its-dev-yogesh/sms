import React from 'react';

type ThemeDemoProps = {
  theme: { [key: string]: string };
};

const ThemeDemo: React.FC<ThemeDemoProps> = ({ theme }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Theme Preview</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(theme).map((key) => (
          <div key={key}>
            <div
              className={`p-4 mb-4 rounded-lg bg-${key} text-${key}-content`}
            >
              <p className="font-bold">{key}</p>
              <p>{theme[key]}</p>
              <p>{theme[`${key}-content`]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeDemo;
