import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import './style.css'
import SliderLogo from "../../components/SliderLogo/SliderLogo";
import objectives from '../../assets/odsImage.png'
import sdgCircle from '../../assets/sdgCircle.png'
import bannerImage from '../../assets/banner.png'

const Home = () => {
    return(
        <div className="Home">            
            <div className="banner">
                <div className="banner-text">
                    <h2>Desafio ODS</h2>
                    <p>Responda algumas perguntas e descubra o quanto a sua comunidade progride nos ODS.</p>
                    <div className="banner-button-container">
                        <Link to='/participar/login' className='banner-button'>Responder agora</Link>
                        <a href="#saiba-mais" className="banner-more-button">Saiba Mais</a>
                    </div>
                </div>
                <img src={bannerImage} className="banner-image" alt="Imagem de uma mão segurando uma planta" />
            </div>

            <div className="OdsAll" id="saiba-mais">
                <div className="OdsContent">
                    <h1>Os ODS no Brasil</h1>
                    <p>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</p>
                </div>

                <div className="OdsContent">
                    <h1>O que são os ODS?</h1>          
                    <p>Os Objetivos de Desenvolvimento Sustentável (ODS), também conhecidos como Objetivos Globais, foram adotados pelas Nações Unidas em 2015 como um apelo universal à ação para acabar com a pobreza, proteger o planeta e garantir que até 2030 todas as pessoas desfrutem de paz e prosperidade. Os 17 ODS são integrados – eles reconhecem que a ação em uma área afetará os resultados em outras, e que o desenvolvimento deve equilibrar a sustentabilidade social, econômica e ambiental.</p>
                </div>

                <div className="Content">
                    <a target="_blank"  href="https://odsbrasil.gov.br/"><img src="https://cdn.discordapp.com/attachments/1037486089801306113/1037492045343903875/8666682_external_link_icon.png" alt="" />Saiba mais em odsbrasil.gov.br</a>
                </div>
            </div>            
                <SliderLogo></SliderLogo>
        </div>
    )
}

export default Home