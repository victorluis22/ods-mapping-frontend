import React from "react";

import { Link } from "react-router-dom";
import './style.css'
import SliderLogo from "../../components/SliderLogo/SliderLogo";
import bannerImage from '../../assets/banner.png'

const Home = () => {
    return(
        <div className="Home">            
            <div className="banner">
                <div className="banner-text">
                    <h2>ODS MAPPING</h2>
                    <p>Ao responder a uma série de perguntas relacionadas aos Objetivos de Desenvolvimento Sustentável (ODS), é possível avaliar de maneira mais abrangente e coesa o progresso da sua comunidade em direção a essas metas globais. As respostas fornecidas durante essa análise não apenas permitem uma compreensão mais aprofundada do engajamento da comunidade nos ODS, mas também possibilitam uma avaliação mais holística dos esforços empreendidos para promover o desenvolvimento sustentável em diversas áreas.</p>
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
                    <p>
Os Objetivos de Desenvolvimento Sustentável constituem um apelo global para a implementação de ações concretas visando a erradicação da pobreza, a preservação do meio ambiente e do clima, e a asseguração de condições que permitam que todas as pessoas, em qualquer lugar, desfrutem de paz e prosperidade. No Brasil, as Nações Unidas desempenham um papel crucial na contribuição para alcançar a Agenda 2030, comprometendo-se a promover iniciativas e colaborações que impulsionem o avanço em direção a esses objetivos sustentáveis.</p>
                </div>

                <div className="OdsContent">
                    <h1>O que são os ODS?</h1>          
                    <p>
Os Objetivos de Desenvolvimento Sustentável (ODS), também conhecidos como Objetivos Globais, foram estabelecidos pelas Nações Unidas em 2015 como um apelo abrangente à ação, visando a erradicação da pobreza, a preservação do planeta e a garantia de que até 2030 todas as pessoas possam desfrutar de paz e prosperidade. Compostos por 17 metas interconectadas, os ODS reconhecem a integração entre diferentes áreas, entendendo que a ação em um domínio pode impactar diretamente os resultados em outros. Assim, promovem o desenvolvimento equilibrado, considerando a sustentabilidade social, econômica e ambiental como elementos interdependentes.</p>
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