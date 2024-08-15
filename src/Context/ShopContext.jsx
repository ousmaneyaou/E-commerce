import React, { createContext, useState } from 'react'; 
import allProduct from '../Components/Assets/data'; 

// Crée un contexte appelé ShopContext avec une valeur par défaut de null.
export const ShopContext = createContext(null);

// Fonction pour initialiser le panier avec une quantité de 0 pour chaque produit.
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < allProduct.length; index++) {
        cart[index] = 0; // Initialisation de chaque produit avec une quantité de 0.
    }
    return cart;
}
 
const ShopContextProvider = (props) => { 
    // État pour gérer les articles dans le panier.
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // Fonction pour ajouter un article au panier.
    const addToCart = (articleId) => {
        setCartItems((prev) => ({
            ...prev, [articleId]: prev[articleId] + 1 // Incrémente la quantité de l'article sélectionné.
        }));
    }

    // Fonction pour retirer un article du panier.
    const removeFromCart = (articleId) => {
        setCartItems((prev) => ({
            ...prev, [articleId]: prev[articleId] - 1 // Décrémente la quantité de l'article sélectionné.
        }));
    }

    // affiche au niveau du cart
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems){
            if (cartItems[item] > 0){
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }


    // calcule du prix total
    const getTotalCartAmount = () => {
        let TotalAmount = 0;
        // Parcourt chaque élément du panier
        for (const item in cartItems) {
            // Vérifie si l'article a une quantité supérieure à 0
            if (cartItems[item] > 0) {
                // Trouve les informations sur l'article correspondant dans la liste des produits
                let itemInfo = allProduct.find((product) => product.id === Number(item));
                // Ajoute le montant total pour cet article au montant total du panier
                TotalAmount += itemInfo.newPrice * cartItems[item];
            }
        }
        // Retourne le montant total du panier
        return TotalAmount;
    };
    
    
    // Définit la valeur du contexte, qui contient toutes les données du produit importées,
    // ainsi que les fonctions pour gérer le panier.
    const contextValue = { 
        allProduct, 
        cartItems, 
        addToCart, 
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems
    };

    return (
        // Fournit le contexte aux composants enfants. 
        // Tout composant à l'intérieur de ShopContext.Provider pourra accéder aux données contextValue.
        <ShopContext.Provider value={contextValue}>
            {props.children} {/* Les composants enfants sont rendus ici. */}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
