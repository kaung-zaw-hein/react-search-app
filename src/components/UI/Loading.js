import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = () => (
  <div className="flex items-center justify-center ">
    <Loader type="Puff" color="#3d3d3d" height={550} width={80} />
  </div>
);

export default Loading;