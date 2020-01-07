import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceInCents = price * 100;
    const publishKey = 'pk_test_GYdAeJiwLVEIlUmphGV9mi9T00zCAWSqUU';

    const onToken = function(token) {
        alert('Payment sucessful!!');
        console.log(token);
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="crown clothing"
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total price is ${price}$`}
            panelLabel="pay now"
            amount={priceInCents}
            stripeKey={publishKey}
            token={onToken}
        />
    );
};

export default StripeCheckoutButton;