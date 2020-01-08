import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceInCents = price * 100;
    const publishKey = 'pk_test_GYdAeJiwLVEIlUmphGV9mi9T00zCAWSqUU';

    const onToken = function(token) {
        axios({
            url: "payment",
            method: "POST",
            data: {
                amount: price,
                token: token
            }
        }).then(response => {
            alert('succesful payment');
        }).catch(error => {
            console.error('Payment Error: ', error);
            alert('There was an issue with your payment! Please make sure you use the provided credit card.');
        });
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