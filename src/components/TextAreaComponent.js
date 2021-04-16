import React from "react"

const funcaoDate = () => `${new Date().toLocaleDateString()}`;

const TextAreaComponent = (props) => {
const {cpf, nb,esp,get} = props.infos;

return <div rows='50' style={{width:'90%'}}>
        <div style={{textAlign:'center'}} className="to-copy">
            Brasília, {funcaoDate()}
        </div> 

        <div className="to-copy">
            Nome do(a) segurado(a): {props.infos.nomeSegurado.toUpperCase()}
        </div>
        
        <br />
        
        <div className="to-copy">
            CPF: {cpf.toUpperCase()}
        </div>
        
        <div className="to-copy">
            Esp: {esp} / NB: {nb}
        </div>
        
        <br />
        
        <div className="to-copy">
            Get: {get}
        </div>

        <br />

        <div className="to-copy">
            Assunto: Revisão das informações do benefício nº {esp}/{nb}
        </div>

        <ol>
            <li className='to-copy-li'>Após a revisão administrativa processada pelo Instituto Nacional do Seguro Social - INSS,
com base no art. 69, da Lei 8.212/91, ficou constatada a necessidade de reavaliar a documentação que
embasou a concessão de seu benefício nº {esp}/{nb}, para tanto foi criado o Protocolo de nº {get}.</li>
<li className='to-copy-li'>Em decorrência deste procedimento, solicitamos que no prazo de 60 (sessenta) dias, a
contar do recebimento desta comunicação, agende o comparecimento na Agência do INSS mais próxima
de sua residência para apresentação da documentação abaixo. Para efetuar o agendamento basta ligar para
a Central de Teleatendimento do INSS, através do número 135 e solicitar o serviço “ENTREGA DE
DOCUMENTOS POR CONVOCAÇÃO”, e informar o Número do Benefício {nb}, o Protocolo
de nº {get} e o CPF do beneficiário.</li>
<li className='to-copy-li'>Na data agendada para comparecimento à Agência da Previdência Social – APS deverá
apresentar esta notificação e documento(s) originais ou cópias autenticadas de identificação a seguir:
CPF, RG, certidão de nascimento ou casamento, Carteira de Trabalho e Previdência Social – CTPS do
titular do benefício, do procurador ou representante legal, se houver, objetivando demonstrar a
regularidade da manutenção do benefício.</li>
<li className='to-copy-li'>Além dos documentos citados no item anterior, em caso de pensão por morte deverão ser
apresentados ainda os seguintes documentos: certidão de óbito e documentos originais ou cópias
autenticadas dos documentos de identificação da pessoa falecida e dos dependentes que recebem o
benefício. Caso o falecido não tenha CPF deverá ser providenciado junto à Receita Federal do Brasil - RFB. Orientações neste sentido podem ser obtidas neste link: https://receita.economia.gov.br/interface/lista-de-servicos/cadastros/cpf/servicos-do-cpf-para-falecidos</li>
<li className='to-copy-li'>Comunicamos que não havendo o agendamento no prazo acima citado (60 dias), seu
benefício será suspenso até o comparecimento para apresentação da documentação. Transcorridos 30
(trinta) dias a contar da suspensão, o benefício será cessado nos termos do art. 69 da Lei nº 8.212/1991.</li>
<li className="to-copy-li">
Salienta-se que os documentos poderão ser enviados via aplicativo MEU INSS ou pelo site www.inss.gov.br, ambos por meio senha de acesso, não havendo necessidade de comparecimento a uma unidade do INSS.
</li>
        </ol>

        <p className="to-copy">Atenciosamente</p>
        <p className="to-copy">INSTITUTO NACIONAL DO SEGURO SOCIAL – INSS</p>
    </div>

}


export default TextAreaComponent