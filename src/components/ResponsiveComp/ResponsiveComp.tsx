// components/ResponsiveComp.js
import { useSelectDeviceType } from '@/stores';
import React from 'react';
// Adjust the path according to your project structure

const ResponsiveComp = () => {
  const deviceType = useSelectDeviceType();

  return (
    <div>
      <h1>Current Device Type: {deviceType}</h1>
      {deviceType === 'MOBILE' && <p>This is a mobile device.</p>}
      {deviceType === 'TABLET' && <p>This is a tablet device.</p>}
      {deviceType === 'DESKTOP' && <p>This is a desktop device.</p>}
    </div>
  );
};

export default ResponsiveComp;
