import React from 'react';


/* eslint-disable-next-line */
export interface LayoutProps {
  headerStyle: string;
  layoutStyle: string
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { headerStyle, layoutStyle } = props;
  return (
    <div id="layout" className={layoutStyle}  >
      <h1 id="header" className={`${headerStyle} text-blue`} >Welcome to layout!</h1>
    </div>
  );
}

export default Layout;
