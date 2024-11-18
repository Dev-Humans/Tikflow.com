import React from 'react'; // Import React
import Hero from '../components/Hero'
import ProductPlan from '../components/ProductPlan';
import ProductFeatures from '../components/ProductFeature';
import Faqsection from '../components/FaqSection'
const ProductPages = () => {
  return (
    <div>
        <Hero/>
     <ProductPlan/>    
     <ProductFeatures/>
     <Faqsection/>
    </div>
  );
};

export default ProductPages;
