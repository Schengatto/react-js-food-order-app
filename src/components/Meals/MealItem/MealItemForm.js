import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const [isValidAmount, setIsValidAmount] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setIsValidAmount(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    const input = {
        id: "amount" + props.id,
        type: "number",
        min: "1",
        max: "5",
        step: "1",
        defaultValue: "1",
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input ref={amountInputRef} label='Amount' input={input} />
            <button type='submit'>+ Add</button>
            {!isValidAmount && <p>Please enter a valid amount (1-5)</p>}
        </form>
    );
};

export default MealItemForm;
