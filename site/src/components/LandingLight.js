/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import Hamburger from '../assets/hamburger.svg';
import Close from '../assets/close.svg';
import Leaf from '../assets/leaf.png';
import LeafSVG from '../assets/leaf.svg';

function LandingLight(theme, setTheme) {
  const toggle = () => {
    console.log(theme.theme);

    if (theme.theme == 'light') {
      setTheme('dark');
      console.log(theme.theme);
    }
    const landingIllus = document.getElementById("landing-light");
    landingIllus.classList.toggle("LandingLight-dark");

    const darkIllus = document.getElementById("home-illus-dark");
    // darkIllus.classList.toggle("home-illus-dark-show");
    darkIllus.style.display = "block";

    const landing = document.getElementById("landing");    landing.classList.toggle("test-toggle");

  };

  return (
    <div className="LandingLight" id="landing-light">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
      <defs>
        <style>{`.cls-1,.cls-10{fill:#fcfcff;}`}{`.cls-2{fill:#e4e4f4;}`}{`.cls-3{fill:none;}`}{`.cls-10,.cls-3,.cls-9{stroke:#033e57;stroke-linecap:round;stroke-linejoin:round;stroke-width:3.1px;}`}{`.cls-4,.cls-9{fill:#d7d6e8;}`}{`.cls-5{fill:#dfdfef;}`}{`.cls-6{fill:#f7d2a6;}`}{`.cls-7{fill:#166466;}`}{`.cls-8{fill:#033e57;}`}</style>
      </defs>
      <g id="Background">
        <polyline class="cls-1" points="748.97 255.71 748.97 204.12 800.56 204.12"/>
      </g>
      <g id="Layer_3" data-name="Layer 3">
        <path class="cls-2" d="M1007.67,420.33v219.4a8.17,8.17,0,0,1-8.15,8.16H308.09a8.17,8.17,0,0,1-8.16-8.16V176.59a2.75,2.75,0,0,1,0-.41,8.15,8.15,0,0,1,8.14-7.75H861.94v251.9Z"/>
        <path class="cls-3" d="M904.43,647.35a39.76,39.76,0,0,1-39.76,39.76H634.84"/><rect class="cls-4" x="299.95" y="168.43" width="561.99" height="48.78"/>
        <path class="cls-5" d="M1007,173.4a8.34,8.34,0,0,0-1.75-2.59A8,8,0,0,1,1007,173.4Z"/>
        <path class="cls-4" d="M1007.67,420.33v220c0,4.16-3.65,7.56-8.15,7.56H720.11s143.62-46.28,77-176.32c-26.31-51.38,16.84-95.81,64.82-81.94v30.7Z"/>
        <circle class="cls-6" cx="299.93" cy="647.35" r="68.08"/>
        <polyline class="cls-3" points="861.94 319.79 861.94 420.32 932.6 420.32"/>
        <polyline class="cls-3" points="1154.44 336.66 1154.44 420.32 1083.78 420.32"/>
        <polyline class="cls-3" points="861.94 110.85 861.94 27.19 932.6 27.19"/>
        <polyline class="cls-3" points="1154.44 110.85 1154.44 27.19 1083.78 27.19"/>
        <path class="cls-7" d="M169,172.78,279.7,239.36c-12.38,20.55-42.82,22.7-58.63,13.2a68,68,0,0,1-14-11c-6.8-6.8-9.9-13.43-12.78-18.41C187.32,211.05,169.62,173.91,169,172.78Z"/>
        <path class="cls-8" d="M263.85,181.41c15.81,9.5,28.18,37.41,15.85,58L169,172.78c1.3.05,42.39-1.71,56.39-1.22,5.75.2,13.07-.18,22.25,2.65A67.58,67.58,0,0,1,263.85,181.41Z"/>
        <path class="cls-7" d="M151.31,281.59l114.85,59.19c-11,21.31-41.25,25.45-57.64,17a67.5,67.5,0,0,1-14.66-10c-7.23-6.33-10.76-12.75-14-17.53C172.13,318.57,152,282.67,151.31,281.59Z"/>
        <path class="cls-8" d="M246.55,284c16.39,8.45,30.57,35.48,19.61,56.79L151.31,281.59c1.3,0,42.19-4.48,56.19-4.92,5.75-.16,13-1,22.37,1.2A67.76,67.76,0,0,1,246.55,284Z"/>
        <path class="cls-7" d="M432.8,172.78,322.07,239.36c12.38,20.55,42.83,22.7,58.63,13.2a67.79,67.79,0,0,0,14-11c6.79-6.8,9.9-13.43,12.78-18.41C414.45,211.05,432.15,173.91,432.8,172.78Z"/>
        <path class="cls-8" d="M337.92,181.41c-15.8,9.5-28.18,37.41-15.85,58L432.8,172.78c-1.29.05-42.39-1.71-56.39-1.22-5.74.2-13.07-.18-22.24,2.65A67.87,67.87,0,0,0,337.92,181.41Z"/>
        <path class="cls-7" d="M450.47,281.59,335.61,340.78c11,21.31,41.25,25.45,57.65,17a67.74,67.74,0,0,0,14.66-10c7.22-6.33,10.76-12.75,14-17.53C429.65,318.57,449.74,282.67,450.47,281.59Z"/>
        <path class="cls-8" d="M355.22,284c-16.39,8.45-30.56,35.48-19.61,56.79l114.86-59.19c-1.3,0-42.19-4.48-56.19-4.92-5.75-.16-13-1-22.38,1.2A67.92,67.92,0,0,0,355.22,284Z"/>
        <rect class="cls-8" x="42.19" y="673.08" width="27.25" height="27.25" rx="1.77"/><rect class="cls-8" x="532.34" y="673.08" width="27.25" height="27.25" rx="1.77"/>
        <line class="cls-3" x1="300.89" y1="146.64" x2="300.89" y2="453.53"/><line class="cls-3" x1="545.96" y1="467.08" x2="55.81" y2="467.08"/>
        <path class="cls-3" d="M55.81,673.08c.61-113.87,110.1-206,245.08-206s244.47,92.12,245.07,206"/>
        <circle class="cls-9" cx="558.63" cy="467.09" r="12.66"/>
        <path class="cls-9" d="M300.65,454.41a12.67,12.67,0,1,1,0,25.33"/>
        <circle class="cls-10" cx="41.23" cy="467.09" r="12.66"/>
        <path class="cls-10" d="M300.65,479.75a12.67,12.67,0,0,1,0-25.34"/>
        <rect class="cls-4" x="506.47" y="284.77" width="213.63" height="11.07" rx="3.61"/>
        <rect class="cls-4" x="506.47" y="309.88" width="182.94" height="11.07" rx="3.34"/>
        <rect class="cls-4" x="506.47" y="334.99" width="155.11" height="11.07" rx="3.07"/>
        <line class="cls-3" x1="392.65" y1="53.5" x2="741.39" y2="53.5"/><line class="cls-3" x1="512.82" y1="91.79" x2="769.64" y2="91.79"/><line class="cls-3" x1="1008.03" y1="378.49" x2="1008.03" y2="566.47"/><path class="cls-8" d="M1008.35,305.22s-36.16,39.39-.31,79.27"/><path class="cls-7" d="M1008,384.49c36.16-39.74.31-79.27.31-79.27"/><path class="cls-8" d="M934.61,394.78s1.61,53.44,55.13,57"/><path class="cls-7" d="M989.74,451.75c-1.87-53.7-55.13-57-55.13-57"/><path class="cls-8" d="M1081.68,394.78s-1.61,53.44-55.13,57"/><path class="cls-7" d="M1026.55,451.75c1.86-53.7,55.13-57,55.13-57"/><path class="cls-3" d="M1158.77,511.11s-68.38,69.07-153,0-148.21,0-148.21,0"/><path class="cls-10" d="M1069.07,647.2V760.53c0,6.77-4.1,12.28-9.15,12.28H956.15c-5.06,0-9.15-5.51-9.15-12.28V647.2c0-16.21,15.08-30.14,36.66-36.24V567.09h48.75V611C1054,617.06,1069.07,631,1069.07,647.2Z"/><path class="cls-3" d="M299.93,772.8h814.35a40.15,40.15,0,0,0,40.16-40.15V574.87"/><circle class="cls-9" cx="857.52" cy="511.11" r="12.66"/><circle class="cls-10" cx="1158.77" cy="511.11" r="12.66"/><path class="cls-10" d="M1007.68,498.44a12.67,12.67,0,0,1,0,25.33"/><path class="cls-9" d="M1007.68,523.77a12.67,12.67,0,1,1,0-25.33"/><path class="cls-3" d="M162.63,53.5H120.46A46.3,46.3,0,0,0,74.17,99.79V218.38"/><path class="cls-7" d="M300.9,28V157.18c-24,0-41.53-25-41.53-43.45a67.8,67.8,0,0,1,2.21-17.63c2.32-9.32,6.4-15.4,9.18-20.43C277.56,63.42,300.27,29.11,300.9,28Z"/><path class="cls-8" d="M342.4,113.73c0,18.44-17.54,43.43-41.5,43.45V28c.62,1.14,23.31,35.45,30.11,47.7,2.78,5,6.89,11.11,9.18,20.43A67.8,67.8,0,0,1,342.4,113.73Z"/>
        <path class="cls-6" id="light-cloud" onClick={() => toggle()} d="M1093.32,206.7c0,.66,0,1.3-.07,1.94a35.7,35.7,0,0,1-35.85,33.49H959a35.44,35.44,0,1,1,0-70.88,36.08,36.08,0,0,1,13.67,2.67A36.06,36.06,0,0,1,1028,149.38a35.36,35.36,0,0,1,15.76,24.54,36,36,0,0,1,49.58,32.78Z"/></g></svg>
    </div>
  );
}

export default LandingLight;
