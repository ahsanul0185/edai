import React from "react";
import Sidebar from "../sections/dashboard/Sidebar";
import Main from "../sections/dashboard/Main";
import { motion } from "motion/react";
import Header from "../sections/dashboard/Header";

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="z-0 text-white font-poppins flex flex-col md:flex-row"
    >

      <Header />
      <Sidebar />
      <Main />
     
      
    </motion.div>
  );
};

export default Dashboard;
