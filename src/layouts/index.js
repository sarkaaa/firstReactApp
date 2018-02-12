import React from "react"
import Link from "gatsby-link"
import styles from "../pages/css-style.module.css"

const ListLink = props =>
    <li style={{ display: 'inline-block', marginRight: `2rem`}}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>

export default ({children}) =>
    <div className={styles.div__body}>
        <header>
            <h2>World of donuts</h2>
            <ul style={{ listStyle: 'none'}}>
                <ListLink to="/">About</ListLink>
                <ListLink to="/recipes/">Recipes</ListLink>
                <ListLink to="/cookbook/">Cookbook</ListLink>
            </ul>
        </header>
        {children()}
    </div>