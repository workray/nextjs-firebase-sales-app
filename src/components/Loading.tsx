import React from "react";

type Props = {
  loading?: boolean;
};

const Loading = ({ loading }: Props) => {
  return loading && <span className="loading loading-ring loading-md"></span>;
};

export default Loading;
