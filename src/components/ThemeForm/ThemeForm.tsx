import { useState } from 'react';

type ThemeObject = {
  [key: string]: string;
};

type ThemeFormProps = {
  onSubmit: (themeName: string, themeObject: ThemeObject) => void;
};

const ThemeForm: React.FC<ThemeFormProps> = ({ onSubmit }) => {
  const [themeName, setThemeName] = useState<string>('');
  const [themeJson, setThemeJson] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formattedThemeJson = formatJson(themeJson);
      const themeObject: ThemeObject = JSON.parse(formattedThemeJson);
      onSubmit(themeName, themeObject);
    } catch (error) {
      alert('Invalid JSON format');
    }
  };

  const formatJson = (input: string): string => {
    // Remove extra whitespace and format JSON
    try {
      const json = JSON.parse(input);
      return JSON.stringify(json, null, 2); // Pretty-print JSON with 2 spaces indentation
    } catch (error) {
      return input; // Return original input if unable to parse
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        className="w-full p-2 mb-4 border rounded-md focus:outline-none"
        placeholder="Enter theme name"
        value={themeName}
        onChange={(e) => setThemeName(e.target.value)}
        required
      />
      <textarea
        className="w-full h-40 p-2 mb-4 border rounded-md resize-none focus:outline-none"
        placeholder="Enter theme JSON here"
        value={themeJson}
        onChange={(e) => setThemeJson(e.target.value)}
        required
      />
      <button type="submit" className="btn btn-primary">
        Apply Theme
      </button>
    </form>
  );
};

export default ThemeForm;
