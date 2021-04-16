import { Box, Button, Container, InputAdornment, List, ListItem, TextField } from "@material-ui/core";
import {Face } from "@material-ui/icons";
import React, { useState } from "react";
import InputText from "./InputText";
import MyModal from "./Modal";
import MyToast from "./MyToast";
import TextAreaComponent from "./TextAreaComponent";



const TextComponent = () =>{
    const [infos,setInfos] = useState({nomeSegurado:'',cpf:'',esp:'',nb:'',get:''});
    // const [showToast,setShowToast] = useState(false);
    const [toast,setToast] = useState({show:false,header:'',body:'',severity:'success'});    
    const [showModal,setShowModal] = useState(true);

    // useEffect(() => {
    //     // console.log(infos);
    // }, [infos])

    const trataTexto = (e) => {
        try {
            

        const texto = e.target.value;
        const getlocal = texto.split("Tarefa de Protocolo:")[1].split("-");
        // setInfos({...infos,get:getlocal[0].trim()});

        const nblocal1 = texto.split("NB")
        // console.log("NB LOCAL:",nblocal1 );
        const nbdef = nblocal1[1].split("Lembretes")[0]
        // console.log("NB DEF:",nbdef );
        const cpflocal = texto.split("CPF	Nome Completo	Data de Nascimento	Nome Completo da Mãe	Contatos	Ação");
        // console.log("CPF LOCAL: ",cpflocal);
        
        const nomeecpf = cpflocal[1].split("Procurador(es) / Representante(es) Legal(is)")[0];
                
        const cpf_reg = /\d/g;
        const cpfreg = nomeecpf.match(cpf_reg);
        
        const nome_reg = /[a-zA-Z\s]/g;
        const nomereg = nomeecpf.match(nome_reg);
        
        setInfos({...infos,nomeSegurado:nomereg.join('').trim(), cpf:cpfreg.join('').trim(),nb:nbdef.trim(),get:getlocal[0].trim()});
        setShowModal(false);
        setToast({...toast,show:true,header:'Colado!',body:'Texto colado com sucesso!',severity:'success'});

        // console.log("INFOS: ",infos);
    } catch (error) {
        setShowModal(false);
        setToast({...toast,show:true,header:'ERRO!',body:`Erro ao analisar o texto. Tecle Ctrl+a na tela inicial do detalhamento da tarefa no GET. `,severity:"error"});            
    }
       

    }

    const copyText = () => {
        
        try {          

            var textBoxCopy = document.createElement("textarea");
            document.body.appendChild(textBoxCopy);

        const els = document.querySelectorAll(".to-copy,.to-copy-li")
        // console.log("Texto: ",els)

        var index = 1;
        els.forEach( e => 
            {
                // setTextoCompleto(textoCompleto+e.innerText);
                if(e.localName == 'li') 
                textBoxCopy.value += `${index++} - ${e.innerText}\n`; 
                  else 
                  textBoxCopy.value += `${e.innerText}\n`
            });

            textBoxCopy.select();
        
        document.execCommand('copy')
            setToast({...toast,show:true,body:"Texto copiado com sucesso!",header:'Copiado',severity:'success'});            
                        
        } catch (error) {
            setToast({...toast,show:true,body:`Erro ao copiar ${error}`,header:'ERRO! ',severity:'error'});                        
    }
         
    
    document.body.removeChild(textBoxCopy);
    }
        
        return <div>
        <h4>QDBEN - Emissor de Exigência</h4>        
        <Container>            
            <Box>
            <List>
                <ListItem>
                     <TextField placeholder="Nome do(a) Segurado(a)"
                         variant="outlined"
                         label="Nome: "
                         onChange={(e) => setInfos({...infos,nomeSegurado:e.target.value})}            
                         value={infos.nomeSegurado}
                         fullWidth
                         InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Face />
                              </InputAdornment>
                            ),
                          }}
                    />
                 </ListItem>
                <ListItem>
                <Box>
                    <InputText name="cpf" label="CPF" placeholder="CPF do(a) segurado(a)" mask="999.999.999-99" onChange={(e) => setInfos({...infos,cpf:e.target.value})} value={infos.cpf}/>                
                    <InputText name="esp" label="Esp" placeholder="Espécie" mask="99" onChange={(e) => setInfos({...infos,esp:e.target.value})}/>                
                    <InputText name="nb" label="NB" placeholder="Número de benefício" mask="999.999.999-9" onChange={(e) => setInfos({...infos,nb:e.target.value})} value={infos.nb}/>
                    <InputText name="get" label="GET" placeholder="Número do protocolo" mask="9999999999999" onChange={(e) => setInfos({...infos,get:e.target.value})} value={infos.get}/>
                </Box>                     
                </ListItem>
            </List>

            <Button onClick={() => setShowModal(true)} className="mx-3" variant="contained" color="primary">Mostrar área de texto</Button>
            <Button onClick={() => copyText()} variant="contained" color="primary">Copiar texto da exigência</Button>
            </Box>            
        
    
        <Box m={2}>
            <h4>Texto da Exigência:</h4>
        </Box>
        <TextAreaComponent infos={infos}/>        
        <MyToast toast={toast} closeToast={() => setToast({...toast,show:false})} />
        <MyModal show={showModal} closeModal={() => setShowModal(false)} trataTexto={(e) => trataTexto(e)}/>
    </Container>
</div>
} 

export default TextComponent
