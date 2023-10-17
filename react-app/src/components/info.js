import React, { useRef, useState } from 'react';

import ArrowCollapse from './arrow-collapse';

import '../styles/components/info.scss';

function Info(props) {
  const [isOpen, setIsOpen] = useState(props.openByDefault);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const contentRef = useRef();
  return (
    <li className='info'>
        <p onClick={handleOpen} className="title-info">
          {props.label}
          <ArrowCollapse
            className={
                isOpen
                ? "fa-solid fa-chevron-up drop"
                : "fa-solid fa-chevron-up"
            }
          />
        </p>
        <div className={`${isOpen ? "open" : "closed"}`} ref={contentRef} 
        style={isOpen ? { height: contentRef.current.scrollHeight + "px" } : { height: "0"}}>
            <div className={`${props.className}`}>
                {props.description}
            </div>
        </div>
    </li>
  );
}

export default Info;