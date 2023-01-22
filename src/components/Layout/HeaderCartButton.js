import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const [isBtnBump, setIsBtnBump] = useState(false);
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((output, item) => output + item.amount, 0);

    const { items } = cartCtx;
    const btnClasses = `${classes.button} ${isBtnBump ? classes.bump : ""}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setIsBtnBump(true);

        const timer = setTimeout(() => {
            setIsBtnBump(false);
        }, 300);
        return () => clearTimeout(timer);
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
