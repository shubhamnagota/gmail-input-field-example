import * as React from 'react';
import './style.css';

import EmailInput from './components/EmailInput';

export default function App() {
  const [toEmails, setToEmails] = React.useState([]);
  const [ccEmails, setCcEmails] = React.useState([]);
  const [bccEmails, setBccEmails] = React.useState([]);

  return (
    <>
      <EmailInput emails={toEmails} setEmails={setToEmails} />
      <EmailInput emails={ccEmails} setEmails={setCcEmails} />
      <EmailInput emails={bccEmails} setEmails={setBccEmails} />

      <div>To: {JSON.stringify(toEmails)}</div>
      <div>Cc: {JSON.stringify(ccEmails)}</div>
      <div>Bcc: {JSON.stringify(bccEmails)}</div>
    </>
  );
}
