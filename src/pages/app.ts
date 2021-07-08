import React, { useState } from 'react';

export async function qiankun() {
  return {
    apps: [
      {
        name: 'app1', // 唯一 id
        entry: '//localhost:8001', // html entry
      },
    ],
    lifeCycles: {
      afterMount: (props: any) => {
        console.log(props);
      },
    },
  };
}
export const useQiankunStateForSlave = () => {
  const [globalState, setQiankunGlobalState] = useState({
    slogan: 'Hello MicroFrontend',
  });

  return {
    globalState,
    setQiankunGlobalState,
  };
};

export async function getInitialState() {
  return {
    a: 1,
    b: 2,
  };
}
