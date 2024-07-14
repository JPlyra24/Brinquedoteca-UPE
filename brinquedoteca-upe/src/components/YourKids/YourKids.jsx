import React from "react";
import "./YourKids.css";
import Kid from "./Kid/Kid";
import { FaPlus } from "react-icons/fa";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
const YourKids = () => {
  const navigate = useNavigate();

  return (
    <div className="t3-1-container">
      <div className="t3-1-title-box">
        <div className="t3-1-title">Sua(s) criança(s):</div>
        <Button
          onClick={() => {
            navigate("/registerKid");
          }}
        >
          <FaPlus />
        </Button>
      </div>
      <div className="t3-1-kids">
        <Kid />
        <Kid />
        <Kid />
        <Kid />
        <Kid />
        <Kid />
        <Kid />
      </div>
    </div>
  );
};

export default YourKids;
