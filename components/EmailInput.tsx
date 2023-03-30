import * as React from 'react';
import './emailInput.css';

export default function EmailInput({ emails = [], setEmails }) {
  const [emailText, setEmailText] = React.useState('');
  const [emailList, setEmailList] = React.useState(emails);

  const onChange = (e) => {
    setEmailText(e.target.value.trim());
  };

  const onKeyDown = (e) => {
    if (e.code === 'Enter' || e.keyCode === 15) {
      const alreadyAdded = emailList.find((e) => e === emailText);
      const isValidEmail = emailText
        .trim()
        .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g);
      // const isDomainEmail = emailText.endsWith('@domain.com');

      if (
        !alreadyAdded &&
        isValidEmail
        // && isDomainEmail
      ) {
        const newEmailList = [...emailList, emailText.trim()];
        setEmailList(newEmailList);
        setEmails(newEmailList);
        setEmailText('');
      }
    }
  };

  const removeEmail = (email) => {
    setEmailList(emailList.filter((e) => e !== email));
    document.getElementById('email__input__box').focus();
  };

  return (
    <div className="email__input__container">
      {emailList.map((email) => {
        return (
          <div className="email__input__list_item" key={email}>
            {email}{' '}
            <button
              className="email__input__list__item__close"
              onClick={() => removeEmail(email)}
            >
              X
            </button>
          </div>
        );
      })}

      <input
        id="email__input__box"
        className="email__input__box"
        type="text"
        value={emailText}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
