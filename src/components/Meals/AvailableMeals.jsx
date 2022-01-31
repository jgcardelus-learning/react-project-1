import styles from "./AvailableMeals.module.css";

import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import DUMMY_DATA from "./data";

const AvailableMeals = (props) => {
	const mealsList = DUMMY_DATA.map((meal) => {
		return (
			<MealItem
				key={meal.id}
				id={meal.id}
				name={meal.name}
				description={meal.description}
				price={meal.price}
			/>
		);
	});

	return (
		<section className={styles.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
