import React from 'react';
import './Kid.css';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Kid = ({ child }) => {
    const navigate = useNavigate();

    const handleClickR = async () => {
        try {
            navigate(`/schedulingkid/${child.id}`); // Passa o ID da criança para a rota de agendamento
        } catch (error) {
            console.error("Erro", error);
        }
    };

    const handleClickL = async () => {
        try {
            navigate(`/editKidprofile/${child.id}`); // Passa o ID da criança para a rota de edição do perfil da criança
        } catch (error) {
            console.error("Erro", error);
        }
    };

    return (
        <div className="t1-1-1-child-schedule">
            <p className='t1-1-1-p'>{child.name}</p>
            <div className='t3-1-1-buttons-box'>
                <button className="t1-1-1-button-r" onClick={handleClickR}>Agendar</button>
                <button className="t1-1-1-button-l" onClick={handleClickL}><FaUser/></button>
            </div>
        </div>
    );
};

export default Kid;
