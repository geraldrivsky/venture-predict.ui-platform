import React from 'react';

type StateProps = {
  scoreMarkerPosition: string;
  scoreStateColor: string;
  opacity?: number;
  fillColor?: string;
  [prop: string]: string | number | undefined;
};

function Icon({
  scoreMarkerPosition,
  scoreStateColor,
  opacity = 0.1,
  fillColor = '#D8D8D8',
  ...props
}: StateProps) {
  return (
    <svg
      fill={fillColor}
      width="100%"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 783 172"
      opacity={opacity}
      {...props}
    >
      <defs>
        <linearGradient
          id="startupStateGraphGradient"
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
          <stop offset={scoreMarkerPosition} style={{ stopColor: fillColor }} />
          <stop offset="100%" style={{ stopColor: fillColor }} />
        </linearGradient>
      </defs>
      <path
        fill="url(#startupStateGraphGradient)"
        d="M4.373 166.202c-1.599 1.457-2.721 2.56-3.493 3.392-1.75 1.886.795 2.306 3.368 2.306H783V1.282c0-.76-.348-1.303-1.107-1.277-1.007.035-2.929.25-6.599.951-21.463 4.102-37.336 29.53-57.732 38.627-27.708 12.358-46.303-4.536-75.583 0-31.971 4.953-47.641 21.62-79.641 26.3-26.355 3.853-41.632-3.993-67.974 0-33.141 5.022-49.03 23.804-82.177 28.764-25.757 3.854-40.65-3.37-66.452 0-30.576 3.993-46.01 18.333-76.598 22.19-24.236 3.056-38.284-4.288-62.394 0-29.567 5.257-43.014 23.993-72.539 29.586-27.012 5.117-107.96-.147-129.83 19.779z"
      ></path>
    </svg>
  );
}

export default Icon;
