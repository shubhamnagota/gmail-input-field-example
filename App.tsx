import * as React from 'react';
import './style.css';

import EmailInput from './components/EmailInput';

export default function App() {
  const [emails, setEmails] = React.useState([]);

  return (
    <>
      {JSON.stringify(emails)}
      <EmailInput emails={emails} setEmails={setEmails} />
    </>
  );
}
