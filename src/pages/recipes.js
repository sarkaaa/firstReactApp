import React from "react"
import styles from "./css-style.module.css"

const Recipe = props =>
    <div className={styles.recipe}>
        <img src={props.recipe_photo} className={styles.recipe_photo} alt=""/>
        <div>
            <h3 className={styles.recipe_name}>
                {props.recipe_name}
            </h3>
            <p className={styles.descr}>
                {props.descr}
            </p>
        </div>
    </div>

export default () =>
    <div>
        <h1>Recipes</h1>
        <Recipe
            recipe_photo="https://rlv.zcache.com/rainbow_sprinkles_chocolate_donut_paper_plate-rd98c02afc2df460e8cfe1cf4355c40fe_zkbhg_324.jpg?rlvnet=1"
            recipe_name="Chocolate donut"
            descr="Powder macaroon marzipan tart. Sweet icing tiramisu halvah. Pastry cupcake sweet toffee tart danish icing donut pudding.
            Pie candy canes topping donut. Tart gummi bears tiramisu candy canes tart dessert caramels brownie sweet. Wafer bonbon apple pie chupa chups."
        />
        <Recipe
            recipe_photo="http://thecluttershop.com/wp-content/uploads/2017/05/s1-l1600.jpg"
            recipe_name="Pink donut"
            descr="Powder macaroon marzipan tart. Sweet icing tiramisu halvah. Pastry cupcake sweet toffee tart danish icing donut pudding.
            Pie candy canes topping donut."
        />
    </div>