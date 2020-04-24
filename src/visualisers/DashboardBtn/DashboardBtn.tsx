import React from 'react';

import { getStyle } from './DashboardBtn.style';
import { ButtonAdd } from '../../assets/svgs';

const DashboardBtn = ({ children, style }: any) => {
  const { btn, span, svg } = getStyle();
  return (
    <button style={{ ...btn, ...style }}>
      <ButtonAdd style={svg} />
      <span className="p-fz-11" style={span}>
        {children}
      </span>
    </button>
  );
};

export default DashboardBtn;
