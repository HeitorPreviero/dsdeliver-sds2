import { checkIsSelected } from "./helpers";
import ProductsCard from "./ProductsCard";
import { Product } from "./types";

type Props = {
    products: Product[];
    selectedProducts: Product[];
    onSelectPruct: (product: Product) => void;
}

function ProductsList({ products, selectedProducts, onSelectPruct }: Props) {
    return(
       <div className="orders-list-container">
         <div className="orders-list-items">            
           {products.map(product => (
              <ProductsCard 
                key={product.id} 
                product={product}
                onSelectPruct={onSelectPruct}
                isSelected={checkIsSelected(selectedProducts, product)}
              />
           ))}
         </div>  
       </div> 
    )
}

export default ProductsList;
