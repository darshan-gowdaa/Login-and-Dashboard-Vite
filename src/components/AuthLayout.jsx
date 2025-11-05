






import React from 'react';
import { Link } from 'react-router-dom';
import AuthDivider from './AuthDivider';
import bgImage from '../assets/bg.jpeg';

const AuthLayout = ({
  title,
  socialLabel,
  dividerLabel = 'or',
  footerText,
  footerLinkText,
  footerLinkTo,
  children,
}) => {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-6">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: 'brightness(50%)',
        }}
      ></div>

      <div
        className="relative w-full max-w-md p-8 rounded-lg shadow-xl bg-opacity-60 animate-slide-up backdrop-blur-lg"
        style={{ filter: 'brightness(100%)' }}
      >
        <h1 className="mb-6 text-3xl font-bold text-center text-white">{title}</h1>

        {socialLabel && (
          <button className="flex items-center justify-center w-full gap-3 p-3 mb-6 text-white bg-gray-900 rounded-lg hover:bg-gray-800">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
            {socialLabel}
          </button>
        )}

        <AuthDivider label={dividerLabel} />

        {children}

        {footerText && (
          <p className="mt-6 text-lg text-center text-gray-400">
            {footerText}{' '}
            <Link to={footerLinkTo} className="text-blue-400 hover:underline">
              {footerLinkText}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;
import React from 'react';
import AuthDivider from './AuthDivider';
import bgImage from '../assets/bg.jpeg';

const AuthLayout = ({
  title,
  socialLabel,
  dividerLabel = 'or',
  footerText,
  footerLinkText,
  footerLinkTo,
  children,
}) => {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-6">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: 'brightness(50%)',
        }}
      ></div>

      <div
        className="relative w-full max-w-md p-8 rounded-lg shadow-xl bg-opacity-60 animate-slide-up backdrop-blur-lg"
        style={{ filter: 'brightness(100%)' }}
      >
        <h1 className="mb-6 text-3xl font-bold text-center text-white">{title}</h1>

        {socialLabel && (
          <button className="flex items-center justify-center w-full gap-3 p-3 mb-6 text-white bg-gray-900 rounded-lg hover:bg-gray-800">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
            {socialLabel}
          </button>
        )}

        <AuthDivider label={dividerLabel} />

        {children}

        {footerText && (
          <p className="mt-6 text-lg text-center text-gray-400">
            {footerText}{' '}
            <Link to={footerLinkTo} className="text-blue-400 hover:underline">
              {footerLinkText}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;
