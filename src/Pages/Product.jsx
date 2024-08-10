import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb';
import AffichageProduct from '../Components/AffichageProduct/AffichageProduct';

const Product = () => {
  // Utilise le contexte ShopContext pour accéder à allProduct
  const { allProduct } = useContext(ShopContext);

  // Récupère l'ID du produit depuis les paramètres de l'URL
  const { productId } = useParams();

  // Trouve le produit correspondant dans allProduct en utilisant l'ID extrait de l'URL
  const product = allProduct.find((e) => e.id === Number(productId));

  return (
    <div>
      {/* Affiche le fil d'Ariane (breadcrumb) avec les informations du produit */}
      <Breadcrumb product={product} />

      {/* Affiche les détails du produit avec le composant AffichageProduct */}
      <AffichageProduct product={product} />
    </div>
  );
}

export default Product;
