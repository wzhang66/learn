import React from 'react';

export const Hexagon: React.FunctionComponent<{classname?: string}> = ({ classname }) => (
  <svg width="61" height="66" viewBox="0 0 61 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      className={classname}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.5 2.88675C28.594 1.10042 32.406 1.10042 35.5 2.88675L54.0788 13.6132C57.1729 15.3996 59.0788 18.7008 59.0788 22.2735V43.7265C59.0788 47.2992 57.1728 50.6004 54.0788 52.3868L35.5 63.1133C32.406 64.8996 28.594 64.8996 25.5 63.1132L6.92116 52.3867C3.82715 50.6004 1.92116 47.2992 1.92116 43.7265V22.2735C1.92116 18.7008 3.82715 15.3996 6.92116 13.6132L25.5 2.88675Z"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>
);
