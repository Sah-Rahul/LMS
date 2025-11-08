import React from "react";

const Footer = () => {
  return (
    <div className="text-sm text-center bg-gray-50 py-4">
      <b>
        {" "}
        © Copyright {new Date().getFullYear()} | Designed & Developed By: Rahul
        Sah{" "}
      </b>
    </div>
  );
};

export default Footer;
