import * as React from "react";
import { Flex, Button } from "@fluentui/react-components";
// const useStyles = makeStyles({
//   container: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "2rem",
//     padding: "2rem",
//   },
//   inputGroup: {
//     flex: "1 1 300px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "0.5rem"
//   },
//   fullWidth: {
//     flexBasis: "100%",
//   },
// });

function App() {
  // const styles = useStyles();

  return (
    <Flex direction="column" gap="medium">
    <Button appearance="primary">Login</Button>
    <Button>Signup</Button>
  </Flex>
  );
}

export default App;
