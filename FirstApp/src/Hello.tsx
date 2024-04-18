import type { Component } from 'solid-js';

const Hello: Component<{name: string}> = (props) => {
  return <div>Hello, {props.name}</div>;
}

export default Hello;
