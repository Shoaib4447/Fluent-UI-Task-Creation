import * as React from "react";
import {  Button } from "@fluentui/react-components";

function App() {
  return (
      <div style={{ padding: "2rem" }}>
        <h1>Hello Fluent UI</h1>
        <Button appearance="primary">Click Me</Button>
        <Button appearance="outline">Click Me</Button>
        <Button appearance="subtle">Click Me</Button>
        <Button appearance="ghost">Click Me</Button>
        <Button appearance="link">Click Me</Button>
      </div>
  );
}

export default App;
