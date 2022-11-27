import { useState } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    PayPalMarks,
} from "@paypal/react-paypal-js";



// This values are the props in the UI
//These values are currently hard coded but these will be either passed through props or will be fetched from backend api.
// The values will differ according to the selected products. For example: If someone is paying 100$, amount will be 100 for him/her.
// Same goes for currency and style
const amount = "2";
const currency = "USD";
const style = { "color": "white" };



export default function App() {
    // Funding sources are the three options that you can see on the screen. Yu can change it according to your desire.
    // If you want to use Card option only, then you ca remove the other two options of paypal and paylater
    const fundingSources = ["paypal", "card", "paylater"];
    // Remember the amount props is received from the control panel
    //By default the 1st option is selected and will change if a user selects some other option
    const [selectedFundingSource, setSelectedFundingSource] = useState(
        fundingSources[0]
    );



    // This is the function that changes the selected method to pay for the user
    function onChange(event) {
        setSelectedFundingSource(event.target.value);
    }



    return (
//You need to wrap your component/code with the PayPalScriptProvider in order to use Paypal in your code
<PayPalScriptProvider
options={{
"client-id": "AXI5_n92vi1fvfHMmWp6QQAeLqZQedDLC_tc9uNOEgVI-CcgivhxskY8Bfc6fbdIvmL8ptu-3fLT6SW2",
components: "buttons,marks,funding-eligibility"
}}
>        
<form style={{ minHeight: "200px" }}>
{/* fundingSource.map is used to show the number of options you have added for the users to choose while making a payment
In this code, we have used 3 options
*/}
{fundingSources.map((fundingSource) => (
<label className="mark" key={fundingSource}>
<input
defaultChecked={
fundingSource === selectedFundingSource
}
onChange={onChange}
type="radio"
name="fundingSource"
value={fundingSource}
/>
<PayPalMarks fundingSource={fundingSource} />
</label>
))}
</form>
<br />
<PayPalButtons
fundingSource={selectedFundingSource}
style={style}
forceReRender={[selectedFundingSource, style, amount, currency]}
createOrder={(data, actions) => {
return actions.order
.create({
// This is where you are creating the order for paypal to execute
purchase_units: [
{
amount: {
currency_code: currency, // Here change the currency if needed
value: amount, // Here change the amount if needed
},
},
],
})
.then((orderId) => {
// Your code here after create the order
//This is where you can add any code once the order is successfully created.
//Like you can show the user that his/her order is successfully created
return orderId;
});
}}
onApprove={(data, actions) => {
return actions.order.capture().then(function (details) {
// Your code here after approve the transaction
//Here you can give an alert to the user that his/her transaction is completed
});
}}
/>
</PayPalScriptProvider >
);
}