import React from 'react';

import './Loader.scss'

interface LoaderProps {
    className?: string;
}
  
  export const Loader: React.FC<LoaderProps>  = ({ className }: LoaderProps) => {
    
    const classNames = [
        'ldsEllipsis', 
        className, 
    ].join(" ");

    return (
      <div className={classNames}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  };