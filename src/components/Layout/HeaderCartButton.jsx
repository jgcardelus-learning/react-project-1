import React from "react";
import styles from "./HeaderCartButton.module.css";

import CartIcon from "./CartIcon";

const HeaderCartButton = (props) => {
	return (
		<React.Fragment>
			<button className={styles.button} onClick={props.onClick}>
				<span className={styles.icon}>
					<CartIcon />
				</span>
				<span>
					<p>Your cart</p>
				</span>
				<span className={styles.badge}>2</span>
			</button>
		</React.Fragment>
	);
};

export default HeaderCartButton;
