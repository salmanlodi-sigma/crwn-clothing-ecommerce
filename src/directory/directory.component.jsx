import CategoriesContainer from '../categories-container/categories-container.component';
import categories from '../categories-container/categories.json';

const Directory = ()=>{
    return(
        <CategoriesContainer categories={categories}/>
    )    
}


export default Directory;