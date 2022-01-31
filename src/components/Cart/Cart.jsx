import React, { useContext } from "react";

import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
	const cartContext = useContext(CartContext);

	const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
	const hasItems = cartContext.items.length > 0;

	const addCartItemHandler = (item) => {
		cartContext.addItem({
			...item,
			amount: 1,
		});
	};

	const removeCartItemHandler = (id) => {
		cartContext.removeItem(id);
	};

	const cartItems = (
		<ul className={styles["cart-items"]}>
			{cartContext.items.map((item) => {
				return (
					<CartItem
						key={item.id}
						name={item.name}
						price={item.price}
						amount={item.amount}
						onAdd={addCartItemHandler.bind(null, item)}
						onRemove={removeCartItemHandler.bind(null, item.id)}
					/>
				);
			})}
		</ul>
	);

	return (
		<Modal onClose={props.onClose}>
			<div>{cartItems}</div>
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={styles.actions}>
				<button
					className={styles["button--alt"]}
					onClick={props.onClose}
				>
					Close
				</button>
				{hasItems && <button className={styles.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
