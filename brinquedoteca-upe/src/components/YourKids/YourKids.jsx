import React, { useState, useEffect } from "react";
import "./YourKids.css";
import Kid from "./Kid/Kid";
import { FaPlus } from "react-icons/fa";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

const YourKids = () => {
  const navigate = useNavigate();
  const [children, setChildren] = useState([]);

  useEffect(() => {
    // Função para buscar as crianças do backend
    const fetchChildren = async () => {
      try {
        const response = await api.get("/child/list");
        setChildren(response.data.childrenList); // Assume que a estrutura de dados é a mesma retornada pelo backend
      } catch (error) {
        console.error("Erro ao buscar crianças:", error);
      }
    };

    fetchChildren();
  }, []);

  return (
    <div className="t3-1-container">
      <div className="t3-1-title-box">
        <div className="t3-1-title">Sua(s) criança(s):</div>
        <Button
          onClick={() => {
            navigate("/registerKid");
          }}
          className="t3-1-add-button"
        >
          <FaPlus />
        </Button>
      </div>
      <div className="t3-1-kids">
        {children.map((child) => (
          <Kid key={child.id} child={child} />
        ))}
      </div>
    </div>
  );
};

export default YourKids;