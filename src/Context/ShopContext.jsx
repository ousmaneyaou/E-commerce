import React, { createContext } from 'react'; 
import allProduct from '../Components/Assets/data'; 

// Crée un contexte appelé ShopContext avec une valeur par défaut de null.
export const ShopContext = createContext(null);

const shopContextProvider = (props) => { 
    // Définit la valeur du contexte, qui contient toutes les données du produit importées.
    const contextValue = { allProduct };

    return (
        // Fournit le contexte aux composants enfants. 
        // Tout composant à l'intérieur de ShopContext.Provider pourra accéder aux données contextValue.
        <ShopContext.Provider value={contextValue}>
            {props.children} {/* Les composants enfants sont rendus ici. */}
        </ShopContext.Provider>
    );
}

export default shopContextProvider;
