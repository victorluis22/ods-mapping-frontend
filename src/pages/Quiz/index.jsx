import React, { useContext, useState } from "react";
import './style.css'

import { useNavigate } from "react-router-dom";
import { ResultContext } from "../../contexts/results";
import SelectAnswer from "../../components/SelectAnswer";

import odsIcon1 from '../../assets/odsIcons/1.png'
import odsIcon2 from '../../assets/odsIcons/2.webp'
import odsIcon3 from '../../assets/odsIcons/3.png'
import odsIcon4 from '../../assets/odsIcons/4.webp'
import odsIcon5 from '../../assets/odsIcons/5.png'
import odsIcon6 from '../../assets/odsIcons/6.png'
import odsIcon7 from '../../assets/odsIcons/7.png'
import odsIcon8 from '../../assets/odsIcons/8.png'
import odsIcon9 from '../../assets/odsIcons/9.png'
import odsIcon10 from '../../assets/odsIcons/10.webp'
import odsIcon11 from '../../assets/odsIcons/11.png'
import odsIcon12 from '../../assets/odsIcons/12.png'
import odsIcon13 from '../../assets/odsIcons/13.png'
import odsIcon14 from '../../assets/odsIcons/14.png'
import odsIcon15 from '../../assets/odsIcons/15.webp'
import odsIcon16 from '../../assets/odsIcons/16.webp'
import odsIcon17 from '../../assets/odsIcons/17.png'
import { AuthContext } from "../../contexts/auth";
import { updateUserPoints } from "../../services/api";




const Quiz = () => {
    const [answers, setAnswers] = useState(new Array(16).fill(0))
    const { user } = useContext(AuthContext)
    const { storeResult } = useContext(ResultContext)
    const navigate = useNavigate()

    const getAnswers = (value, index) => {
        var auxArray = [...answers]
        auxArray.splice(index, 1, value)

        setAnswers(auxArray)
    }

    const sendDataHandler = async () => {
        let auxResults = new Array(16).fill(0)
        var pointsCounter = 0
        const odsIndividual = [12, 7, 12, 6, 6, 2, 14, 14, 13, 15, 13, 13, 11, 11, 17, 17]

        for (let i = 0; i < auxResults.length; i++){
            if(answers[i] === '1'){
                auxResults[odsIndividual[i]-1] += 100
            }
            else if(answers[i] === '2'){
                auxResults[odsIndividual[i]-1] += 200
            }
            else if(answers[i] === '3'){
                auxResults[odsIndividual[i]-1] += 300
            }
            else if(answers[i] === '4'){
                auxResults[odsIndividual[i]-1] += 400
            }
            else{
                auxResults[odsIndividual[i]-1] += 0
            }
        }

        storeResult(auxResults)

        auxResults.map((eachResult) =>{
            pointsCounter += eachResult
        })

        const request = await updateUserPoints(user.id, pointsCounter)

        navigate('/resultado')
    }

    return(
        <div className="Quiz">
            <div className="QuizContainer">
                <div className="QuizArea ods12">
                    <p>1) Você pratica a coleta seletiva dos resíduos gerados no seu domicílio. Se sim, qual o grau de reciclagem que você realiza?
                    </p>
                    <div className="tags">
                            <img src={odsIcon12} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Não faço coleta seletiva, o lixo da minha casa é comum.' 
                                opB='b) Separo apenas alguns itens de reciclagem, quando dá tempo.'
                                opC='c) Separo e encaminho para a reciclagem e logística reversa, de forma rotineira os resíduos de casa.'
                                opD='d) Pratico diariamente a separação dos resíduos (recicláveis, orgânicos, itens de logística reversa e rejeito) e encaminho adequadamente cada um deles.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={0}/>
                </div>

                <div className="QuizArea ods7">
                    <p>2) Com que frequência você vê carros elétricos ou painéis solares na comunidade em que vive? 
                    </p>
                    <div className="tags">
                        <img src={odsIcon7} alt="" />
                    </div>
                    <SelectAnswer 
                                opA='a) Nunca os vejo.' 
                                opB='b) Vejo poucos.'
                                opC='c) Frequentemente os vejo.'
                                opD='d) Toda a comunidade em que vivo é energizada por energia solar, e sempre vejo carros elétricos.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={1}/>
                </div>

                <div className="QuizArea ods12">
                    <p>3) Você se considera uma pessoa consumista ou consciente?
                    </p>
                    <div className="tags">
                            <img src={odsIcon12} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Totalmente consumista, faço compras todo mês com frequência sem pensar no impacto desta ação.' 
                                opB='b) Parcialmente consumista, faço compras sempre que almejo algo.'
                                opC='c) Parcialmente consciente, não deixando totalmente de comprar algo quando tenho vontade.'
                                opD='d) Totalmente consciente, compro somente quando há a necessidade e avalio o impacto ambiental da minha compra.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={2}/>
                </div>

                <div className="QuizArea ods6">
                    <p>4) A comunidade em que vive tem acesso à água potável?
                    </p>
                    <div className="tags">
                            <img src={odsIcon6} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Não há acesso à água potável, seja por abastecimento municipal ou poço próprio.' 
                                opB='b) Poucos têm este acesso à água potável.'
                                opC='c) Uma parte significativa tem acesso.'
                                opD='d) Toda a minha comunidade tem acesso à água potável.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={3}/>
                </div>

                <div className="QuizArea ods6">
                    <p>5)A comunidade em que vive possui acesso a saneamento básico?
                    </p>
                    <div className="tags">
                            <img src={odsIcon6} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Não há rede de esgoto ou soluções individuais adequadas (fossa e sumidouro).' 
                                opB='b) Poucos têm este acesso à saneamento básico.'
                                opC='c) Uma parte significativa os tem acesso ao saneamento básico.'
                                opD='d) Toda a minha comunidade tem acesso à saneamento básico de qualidade.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={4}/>
                </div>


                <div className="QuizArea ods2">
                    <p>6) Na comunidade em que você vive, você conhece pessoas que passam fome? É do seu conhecimento projetos locais voltados a ajudá-las?
                    </p>
                    <div className="tags">
                            <img src={odsIcon2} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Conheço pessoas em situação de fome, e não há projetos voltados a ajudá-las.' 
                                opB='b) Conheço pessoas em situação de fome, entretanto há um ou mais projetos voltados para a sua ajuda.'
                                opC='c) Não conheço pessoas em situação de fome, e não há projetos voltados para elas no local onde moro.'
                                opD='d) Não conheço pessoas em situação de fome, e conheço um ou mais projetos voltados para a ajuda destas pessoas, possivelmente em outras comunidades.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={5}/>
                </div>

                <div className="QuizArea ods14">
                    <p>7) Como você considera o nível de qualidade dos ambientes aquáticos (mares e lagoas) próximos à sua comunidade? 
                    </p>
                    <div className="tags">
                            <img src={odsIcon14} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Estão sempre sujos e poluídos.' 
                                opB='b) Constantemente estão sujos e com lixo.'
                                opC='c) Às vezes estão limpos.'
                                opD='d) Estão sempre limpos e despoluídos.'
                                opE='e) Não tenho ambientes aquáticos próximos.'
                                getAnswers={getAnswers} 
                                index={6}/>
                </div>

                <div className="QuizArea ods14">
                    <p>8) Você conhece áreas de preservação marinha na sua região?
                    </p>
                    <div className="tags">
                            <img src={odsIcon14} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Não conheço.' 
                                opB='b) Conheço pelo menos 1.'
                                opC='c) Conheço pelo menos 3.'
                                opD='d) Conheço mais de 5.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={7}/>
                </div>

                <div className="QuizArea ods13">
                    <p>9) Você conhece áreas de preservação terrestre (parques florestais, reservas ambientais, RPPN’s, unidades de conservação) na sua região?
                    </p>
                    <div className="tags">
                            <img src={odsIcon13} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Não conheço.' 
                                opB='b) Conheço pelo menos 1.'
                                opC='c) Conheço pelo menos 3.'
                                opD='d) Conheço mais de 5.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={8}/>
                </div>

                <div className="QuizArea ods15">
                    <p>10) As áreas de reflorestamento são essenciais para a preservação da fauna e flora e recuperar áreas degradadas. Você conhece projetos de reflorestamento na sua comunidade?
                    </p>
                    <div className="tags">
                            <img src={odsIcon15} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Não conheço nenhuma iniciativa deste gênero.' 
                                opB='b) Conheço entre uma e três.'
                                opC='c) Conheço entre três e cinco.'
                                opD='d) Conheço mais do que cinco.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={9}/>
                </div>

                <div className="QuizArea ods13">
                    <p>11) A mudança de clima no mundo já está sendo sentida por cada um de nós. em relação às “catástrofes naturais” (chuvas intensas, deslizamentos, alagamentos, etc) a sua comunidade já passou por algum desses problemas nos últimos meses?
                    </p>
                    <div className="tags">
                            <img src={odsIcon13} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Não temos nenhuma catástrofe natural nos últimos 5 anos.' 
                                opB='b) Tivemos alguns momentos de catástrofe nos últimos 3 anos.'
                                opC='c) Frequentemente minha comunidade tem sofrido com catástrofes anualmente.'
                                opD='d) Sofremos ao menos duas vezes por ano, com catástrofes naturais.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={10}/>
                </div>

                <div className="QuizArea ods13">
                    <p>12) Os dois principais causadores das mudanças de clima são os gases de efeito estufa (GEE), por exemplo  o  CO2 (gás carbônico) e CH4 (gás metano). Algumas atividades humanas contribuem para a emissão destes gases, como a queima de combustíveis fósseis (energia), agropecuária, indústrias, uso da terra e lixo urbano. O Estado do Rio de Janeiro apresentou, em 2016, emissão de 92.318 Gg CO2 e, com destaque para os setores Energia (70%), indústrias (17%) e Lixo (8%). As emissões do Rio de Janeiro representaram 6% das emissões nacionais e 24% da região Sudeste, em 2016. assinale qual a opção que você melhor se identifica:
                    </p>
                    <div className="tags">
                            <img src={odsIcon13} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Não mudo minhas atividades em função da emissão de gases de efeito estufa.' 
                                opB='b) Raramente faço alguma mudança de hábito em função de GEE (exemplo: reciclagem de lixo, consumo consciente, transporte coletivo ou alternativo).'
                                opC='c) Às vezes faço algumas alterações de hábito para reduzir as emissões.'
                                opD='d) Sempre busco opções na minha rotina para reduzir as emissões.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={11}/>
                </div>

                <div className="QuizArea ods11">
                    <p>13) Na sua comunidade existem pessoas vivendo em assentamentos ou habitações precários, inadequados ou informais? Considere habitações inadequadas aqueles que possuem ao menos uma das condições: mais de 3 pessoas por quarto; sem abastecimento de água; sem rede de esgoto ou fossa séptica; sem coleta de lixo. 
                    </p>
                    <div className="tags">
                            <img src={odsIcon11} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Não conheço pessoas em situação de habitação precária.' 
                                opB='b) Conheço algumas pessoas em situação de habitação precária.'
                                opC='c) Conheço muitas pessoas em situação de habitação precária.'
                                opD='d) Todas as pessoas na minha comunidade vivem em situação de habitação precária.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={12}/>
                </div>

                <div className="QuizArea ods11">
                    <p>14) Cidades sustentáveis possuem sistema de gestão de resíduos sólidos eficiente, recuperando a maior fração possível de recicláveis e compostáveis. Existem na sua comunidade iniciativas de reciclagem e/ou compostagem?
                    </p>
                    <div className="tags">
                            <img src={odsIcon11} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Não existem iniciativas ou não conheço.' 
                                opB='b) Existem algumas poucas iniciativas, mas não participo.'
                                opC='c) Existem algumas iniciativas, e as vezes participo.'
                                opD='d) Existem várias iniciativas e participo com frequência.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={13}/>
                </div>

                <div className="QuizArea ods17">
                    <p>15) Você conhece ONG's ou projetos sociais na area de ambiental próximos a sua localidade?
                    </p>
                    <div className="tags">
                            <img src={odsIcon17} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) +10.' 
                                opB='b) 7-9.'
                                opC='c) 4-6.'
                                opD='d) 0-3.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={14}/>
                </div>
                
                <div className="QuizArea ods17">
                    <p>16) Você conhece ou já participou de algum evento relacionado a agenda 2030?
                    </p>
                    <div className="tags">
                            <img src={odsIcon17} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Sim, participo ativamente.' 
                                opB='b) Sim, mas pouco participo.'
                                opC='c) Sim, mas não participo'
                                opD='d) Não participo.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={15}/>
                </div>

                <button onClick={() => sendDataHandler()}>Enviar</button>

            </div>
            
        </div>
    )
}

export default Quiz