import React from "react";

import { Link } from "react-router-dom";
import './style.css'
import SliderLogo from "../../components/SliderLogo/SliderLogo";
import bannerImage from '../../assets/banner.png'

import eolica from "../../assets/eolica.png"
import mixed from "../../assets/mixed.png"
import mixed2 from "../../assets/mixed2.png"
import serrHackclub from "../../assets/serraHackclub.png"

const Home = () => {
    return(
        <div className="Home">            
            <div className="banner">
                <div className="banner-text">
                    <h1 className="firsttitle">SEJA BEM VINDO AO</h1>
                    <h2>ODS MAPPING</h2>
                </div>
                <img src={bannerImage} className="banner-image" alt="Imagem de uma mão segurando uma planta" />
            </div>

            <div className="OdsAll" id="saiba-mais">
                
            {/* <div className="banner2">
                
                <img src={eolica} className="banner-image" alt="Imagem de uma turbina eolica" />
                <div className="banner-text2">
                    <h2 className="responda11">Responda</h2>
                    <p id="seconddesc">Fazer o questionário é importante para que o meio ambiente mude, para que o planeta seja salvo. contribua, acessando o questionário no botão abaixo.</p>
                    <div className="banner-button-container">
                    <Link to='/participar/login' className='banner-button'>Acesse aqui</Link>
                    <a href="#saiba-mais" className="banner-more-button">Saiba Mais</a>
                    </div>
                    </div>
                    
                </div> */}

            <div className="banner2">
                <img src={eolica} className="banner-image" />
                <div className="banner-text2">
                    <h2 className="responda11">Responda</h2>
                    <p id="seconddesc">Fazer o questionário é importante para que o meio ambiente mude, para que o planeta seja salvo. Contribua, acessando o questionário no botão abaixo.</p>
                    <div className="banner-button-container">
                    <Link to='/participar/login' className='banner-button'>Acesse aqui</Link>
                    <a href="#saiba-mais" className="banner-more-button">Saiba Mais</a>
                    </div>
                </div>
            </div>

            <div className="banner3">
                <div className="banner-text">
                    <h2>Por que responder?</h2>
                    <p id="seconddesc2">O planeta terra passa por tempos difíceis. a emissão de gás carbono tem sido muito acima do que era idealizado pela agenda 2030, o desmatamento aumenta anualmente, e a poluição está fora de controle. como consequência, ocorrem desastres naturais, e uma tendência cada vez menor de que o futuro da humanidade prospere.</p>
                    <p id="seconddesc2">Isso precisa parar imediatamente.</p>
                </div>
                <img src={mixed} className="banner-image-mixed" alt="Imagem de uma mão segurando uma planta" />
            </div>

            <div className="banner4">
                <img src={mixed2} className="banner-image-mixed" alt="Imagem de uma mão segurando uma planta" />
                <div className="banner-text">
                    <p id="seconddesc3">Mas nem tudo está perdido.</p>
                    <p id="seconddesc3">A humanidade também conta com grupos que lutam pela causa, através de trabalho voluntário, ao redor do mundo, eles atuam recolhendo lixo nas praias, fazendo coleta seletiva dos resíduos despejados indevidamente nas ruas, e conscientizando a todos. Conheça alguns deles perto de você, agora!</p>
                    <div className="banner-button-container">
                        <Link to='/participar/login' className='banner-button'>Veja o mapa</Link>
                    </div>

                </div>
            </div>

            <div className="banner5">
                <img src={serrHackclub} className="banner-image" />
                <div className="banner-text2">
                    <h2 className="quemsomosnos">Quem somos nós?</h2>
                    <p id="seconddesc">Somos a Serra Hackclub, um grupo de competição de hackaton especializado em engenharia de software, que há pouco mais de um ano conquistou o quarto lugar nacional, e o primeiro lugar geral de toda a Universidade do Estado do Rio de Janeiro.</p>
                </div>
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

/*<div className="OdsContent">
                    <h1>Os ODS no Brasil</h1>
                    <p>
Os Objetivos de Desenvolvimento Sustentável constituem um apelo global para a implementação de ações concretas visando a erradicação da pobreza, a preservação do meio ambiente e do clima, e a asseguração de condições que permitam que todas as pessoas, em qualquer lugar, desfrutem de paz e prosperidade. No Brasil, as Nações Unidas desempenham um papel crucial na contribuição para alcançar a Agenda 2030, comprometendo-se a promover iniciativas e colaborações que impulsionem o avanço em direção a esses objetivos sustentáveis.</p>
                </div>

                <div className="OdsContent">
                    <h1>O que são os ODS?</h1>          
                    <p>
Os Objetivos de Desenvolvimento Sustentável (ODS), também conhecidos como Objetivos Globais, foram estabelecidos pelas Nações Unidas em 2015 como um apelo abrangente à ação, visando a erradicação da pobreza, a preservação do planeta e a garantia de que até 2030 todas as pessoas possam desfrutar de paz e prosperidade. Compostos por 17 metas interconectadas, os ODS reconhecem a integração entre diferentes áreas, entendendo que a ação em um domínio pode impactar diretamente os resultados em outros. Assim, promovem o desenvolvimento equilibrado, considerando a sustentabilidade social, econômica e ambiental como elementos interdependentes.</p>
                </div>
*/