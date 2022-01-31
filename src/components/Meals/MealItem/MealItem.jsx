import { useContext } from "react";
import styles from "./MealItem.module.css";

import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
	const cartContext = useContext(CartContext);

	const price = `$${props.price.toFixed(2)}`;

	const addItemHandler = (amount) => {
		cartContext.addItem({
			id: props.id,
			name: props.name,
			price: props.price,
			amount: amount,
		});
	};

	return (
		<li className={styles.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={styles.description}>{props.description}</div>
				<div className={styles.price}>{price}</div>
			</div>
			<div>
				<MealItemForm id={props.id} onAddItem={addItemHandler} />
			</div>
		</li>
	);
};

export default MealItem;
