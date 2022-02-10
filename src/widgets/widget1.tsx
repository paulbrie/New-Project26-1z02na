import React from "react";

const Widget = ({ title, color }: { title: string; color: string }) => {
  return <div style={{ color: color || "" }}>{title}</div>;
};

export default Widget;
