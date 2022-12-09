import React, { FormEvent, useRef, useState } from 'react';
import CCIcon from './ccicon.svg';
import styles from './CreditCardForm.scss';

const CardIcons = {};

export function CreditCardForm() {
  // Main idea: Do not store values in state. As no need to have any validations or smth.
  const numberInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const expirationInputRef = useRef(null);
  const securityCodeInputRef = useRef(null);

  const [name, setName] = useState('');
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Get text input values
    const cardNumber = numberInputRef.current?.value;
    const holderName = nameInputRef.current?.value;
    const expiration = expirationInputRef.current?.value;
    const securityCode = securityCodeInputRef.current?.value;

    setName(holderName);
    console.log(cardNumber, holderName, expiration, securityCode);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className={styles.formTitle}>Payment information </h1>
      <div className={styles.formContainer}>
        <div className={styles.fieldContainer}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" maxLength={20} ref={nameInputRef} />
        </div>
        <div className={styles.fieldContainer}>
          <label htmlFor="cardnumber">Card Number</label>
          <input id="cardnumber" type="text" pattern="[0-9]*" inputMode="numeric" ref={numberInputRef} />
          <CCIcon className={styles.ccicon} />
        </div>
        <div className={styles.fieldContainer}>
          <label htmlFor="expirationdate">Expiration (mm/yy)</label>
          <input id="expirationdate" type="text" pattern="[0-9]*" inputMode="numeric" ref={expirationInputRef} />
        </div>
        <div className={styles.fieldContainer}>
          <label htmlFor="securitycode">Security Code</label>
          <input
            id="securitycode"
            type="text"
            pattern="[0-9]*"
            maxLength={4}
            minLength={4}
            inputMode="numeric"
            ref={securityCodeInputRef}
          />
        </div>
      </div>
      <button className={styles.submitBtn}>Send</button>
    </form>
  );
}
