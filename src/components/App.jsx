import { Alert } from "./Alert";

export const App = () => {
  return (
    <>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated={true}>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined={true}>
        Please update your profile contact information
      </Alert>
    </>
  );
};