import React, {FormEvent, useRef} from 'react';

function CreditCardForm() {
    const numberInputRef = useRef();
    const nameInputRef = useRef();
    const expirationInputRef = useRef();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const cardNumber = numberInputRef?.current?.value
        const holderName = nameInputRef?.current?.value
        const expiration = expirationInputRef?.current?.value
        console.log(cardNumber, holderName, expiration)
    }

    return <form onSubmit={handleSubmit}>
        <input ref={numberInputRef} />
        <input ref={nameInputRef} />
        <input ref={expirationInputRef} />
    </form>;
}

export default CreditCardForm;
