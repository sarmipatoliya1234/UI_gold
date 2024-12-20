import React from "react";
import Hero from "../components/HeroSection";
import CategorySection from '../components/CategorySection';
import BestSellers from '../components/BestSellers';
import Jewellery from '../components/Jewellery';
import BestSellingJewelry from '../components/BestSellingJewelry';
import VirtualAppointment from '../components/VirtualAppointment';
import GiftIdeas from '../components/GiftIdeas';
import CommitmentToExcellence from '../components/CommitmentToExcellence';
import CharmingNecklaces from '../components/CharmingNecklaces';
import CustomerReviews from '../components/CustomerReviews';

function Home() {
  return (
    <div>
      <Hero />
      <CategorySection />
      <BestSellers />
      <Jewellery />
      <BestSellingJewelry />
      <VirtualAppointment />
      <GiftIdeas />
      <CommitmentToExcellence />
      <CharmingNecklaces />
      <CustomerReviews />
    </div>
  );
}

export default Home;
