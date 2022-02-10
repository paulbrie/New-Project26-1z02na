import React from "react";

import Component from "../teleporthq/components/component";
import styles from "../teleporthq/style.module.css"

const Demo = () => {
  return (
    <div>
      <h1 className={styles['red']}>Hello Diana</h1>
      <Component heading="Cool" />
    </div>
  );
};

export default Demo;
