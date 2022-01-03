import React from "react";

import { Spin } from "antd";

interface withLoaderProps {
  isLoading: boolean;
}
const WithLoader: React.FC<withLoaderProps> = ({ isLoading, children }) => {
  return <>{isLoading ? <Spin /> : children}</>;
};

export default WithLoader;
