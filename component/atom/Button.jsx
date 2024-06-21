import React from 'react';
import PropTypes from 'prop-types';
import "../../app/globals.css"

const Button = ({ href, children, variant, onClick }) => {
  let buttonStyle = '';

  switch (variant) {
    case 'button1':
      buttonStyle = 'w-[25%] pt-[20px] pb-[20px] pl-[30px] pr-[30px] text-white btn1 hover:bg-yellow-500 rounded-[50px]';
      break;
    case 'success':
      buttonStyle = 'bg-customgray h-[40px] cursor-pointer text-center w-[120px] rounded-[40px] py-[7px] text-[15px] font-medium text-white';
      break;
      case 'button':
        buttonStyle = 'bg-[#] hover:bg-black px-[30px] py-[10px] rounded-[50px] text-[10px] font-medium text-white';
        break;
      default:
      buttonStyle = '';
      break;
  }

  return (
    <a
      className={buttonStyle}
      onClick={onClick}
      href={href}
    >
      {children}
    </a>
  );
};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['button1', 'success']).isRequired,
  onClick: PropTypes.func,
};

export default Button;
