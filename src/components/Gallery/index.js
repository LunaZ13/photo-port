import React from "react";
import PhotoList from "../PhotoList";
import {capitalizeFirstLetter} from '../../assets/utils/helpers';


function Gallery({ currentCategory }) {
  const { name, description } = currentCategory;

  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={currentCategory.name}/>
    </section>
  );
}
export default Gallery;



// function Gallery(props) {
//   const { currentCategory } = props;
//   return (
//     <section>
//       <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
//       <p>{currentCategory.description}</p>
//       <PhotoList category={currentCategory.name} />
//     </section>
//   );
// }
// export default Gallery;