import React from 'react';

export default function Picture ({path}) {

  return (
    <div>
      <img src={path} alt='' />
    </div>
  );
}