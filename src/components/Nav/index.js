import React, { useState, useEffect } from 'react';
import { capitalizeFirstLetter} from '../../assets/utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);
 

  return (
    <header className="flex-row px-1">
        <h2>
            <a data-testid="link" href="/">
                <span role="img" aria-label="camera"> 📸 </span> Oh Snap!
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a data-testid="about" href="#about"> About Me </a>
                </li>
                <li>
                    <span>Contact</span>
                </li>
                {categories.map((category) => (
                    <li className={`mx-1 ${
                        currentCategory.name === category.name && 'navActive'
                        }`} 
                        key={category.name}>
                        <span onClick={() => { setCategory(category)}} >
                        {capitalizeFirstLetter(category.name)}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  );
}

export default Nav;