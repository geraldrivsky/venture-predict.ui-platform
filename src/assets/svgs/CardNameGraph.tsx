import React from 'react';

function Icon({ scoreMarkerPosition, scoreStateColor, ...props }: any) {
  return (
    <>
      <svg
        fill="#D6D6D6"
        width="100%"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 0 783 172"
        {...props}
      >
        <defs>
          <linearGradient
            id="cardNameGraphGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style={{ stopColor: scoreStateColor }} />
            <stop
              offset={scoreMarkerPosition}
              style={{ stopColor: scoreStateColor }}
            />
            <stop
              offset={scoreMarkerPosition}
              style={{ stopColor: '#D6D6D6' }}
            />
            <stop offset="100%" style={{ stopColor: '#D6D6D6' }} />
          </linearGradient>
        </defs>
        <path
          fill="url(#cardNameGraphGradient)"
          d="M4.373 166.202c-1.599 1.457-2.721 2.56-3.493 3.392-1.75 1.886.795 2.306 3.368 2.306H783V1.282c0-.76-.348-1.303-1.107-1.277-1.007.035-2.929.25-6.599.951-21.463 4.102-37.336 29.53-57.732 38.627-27.708 12.358-46.303-4.536-75.583 0-31.971 4.953-47.641 21.62-79.641 26.3-26.355 3.853-41.632-3.993-67.974 0-33.141 5.022-49.03 23.804-82.177 28.764-25.757 3.854-40.65-3.37-66.452 0-30.576 3.993-46.01 18.333-76.598 22.19-24.236 3.056-38.284-4.288-62.394 0-29.567 5.257-43.014 23.993-72.539 29.586-27.012 5.117-107.96-.147-129.83 19.779z"
        ></path>
      </svg>

      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 360 197"
        fill="#D6D6D6"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <defs>
          <linearGradient
            id="cardNameGraphGradient2"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style={{ stopColor: scoreStateColor }} />
            <stop
              offset={`${parseFloat(scoreMarkerPosition) + 1}%`}
              style={{ stopColor: scoreStateColor }}
            />
            <stop
              offset={`${parseFloat(scoreMarkerPosition) + 1}%`}
              style={{ stopColor: '#D6D6D6' }}
            />
            <stop offset="100%" style={{ stopColor: '#D6D6D6' }} />
          </linearGradient>
        </defs>
        <path
          d="M4.49997 131C-11.3141 154.641 0.000261068 197 0.000261068 197H359.999V0.805575C359.999 0.339535 359.798 -0.0306113 359.334 0.016441C358.838 0.0668013 357.971 0.245188 356.46 0.716792C346.6 3.79224 339.308 22.8575 329.938 29.6778C317.209 38.9435 308.667 26.2768 295.216 29.6778C280.529 33.3914 273.331 45.8875 258.631 49.3959C246.524 52.2854 239.506 46.4024 227.405 49.3959C212.18 53.1622 204.881 67.2439 189.653 70.9626C177.821 73.8521 170.98 68.4361 159.126 70.9626C145.08 73.9565 137.99 84.7079 123.938 87.5997C112.804 89.891 106.351 84.3853 95.275 87.5997C81.6922 91.5418 73.1895 108.806 59.6258 113C47.2171 116.837 16.875 112.5 4.49997 131Z"
          fill="url(#cardNameGraphGradient2)"
        />
      </svg>
    </>
  );
}

export default Icon;
