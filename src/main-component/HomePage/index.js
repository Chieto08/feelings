import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/hero";
import StorySection from "../../components/StorySection";
import CoupleSection from "../../components/CoupleSection";
import VideoSection from "../../components/VideoSection";
import PortfolioSection2 from "../../components/PortfolioSection2";
import EventSection from "../../components/EventSection";
import RSVP from "../../components/RSVP";
import BlogSection from "../../components/BlogSection";
import Scrollbar from "../../components/scrollbar";
import PartnerSection from "../../components/PartnerSection";
import Footer from "../../components/footer";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar hclass={"wpo-site-header-s1"} />
      <Hero />
      <CoupleSection />
      <StorySection />
      <VideoSection />
      <PortfolioSection2 />
      <RSVP />
      <EventSection />
      <PartnerSection />
      <BlogSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default HomePage;
