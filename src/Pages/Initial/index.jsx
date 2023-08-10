import { Container } from "./style";
import { Header } from "../../Componentes/Header";
import { useEffect,useRef,useState } from "react";
import { useNavigate } from "react-router-dom";
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import javaS from '../../assets/javascript.svg';
import react from '../../assets/react.svg';
import node from '../../assets/node.svg';
import java from '../../assets/java.svg';
import spring from '../../assets/springBoot.svg';
import typescript from '../../assets/typescript.svg'



export function Initial() {
    
    const h1Ref = useRef('');
    const menuRef = useRef('')
    const [mounted, setMounted] = useState(false);
    const headerPagex = document.getElementById("headerPage");
    const menuFechado = document.getElementById("menuFechado");
    const navigate = useNavigate();

    const aboutMe = () => {
        navigate('/about');
    }
    const projetos = () => {
        navigate("/projects");
    }
    
    const fecharMenu = () => {
        if(headerPagex.classList.contains("open")){
            headerPagex.classList.remove("open");
            menuRef.current.innerHTML = "menu"

        }
    }
    function menuToggle(){

        
        if(headerPagex.classList.contains("open")){
            headerPagex.classList.remove("open");
            menuRef.current.innerHTML = "menu"
        }
        else{
            menuRef.current.innerHTML = "close"
            headerPagex.classList.add("open");
        }
    }
    
    
    useEffect(() => {

        
        
        if (mounted) {
         
            
            const texto = "Olá, eu sou Guilherme Akihito desenvolvedor de softwares"
            let idx = 0;
            
            menuRef.current.addEventListener("click" , menuToggle)
            
            const escreverTexto = () => {

            if(idx < texto.length){
                h1Ref.current.innerHTML += texto.charAt(idx);
                idx++
                setTimeout(escreverTexto, 100);
            }
            else{
                return null;
            }
            }

            escreverTexto();
        }
         else {
            setMounted(true);
        }
    }, [mounted]);

    return (
        <Container>
            <Header></Header>
            <span ref={menuRef} id="menuFechado" className="material-symbols-outlined">
              menu
            </span>
            <main onClick={fecharMenu}>
                <div className="textoAutomatico">
                <h1 ref={h1Ref}></h1>
                </div>

                <div className="infos">

                    <div className="buttonsInfos">

                   <button onClick={aboutMe} id="buttonMain">Sobre mim</button>
                   <button onClick={projetos} id="buttonMain">Projetos</button>
                    </div>
                   <div className="icons">
                   <img src={html} alt="icone html" />
                   <img src={css} alt="icone css" />
                   <img src={javaS} alt="icone javaScript" />
                   <img src={react} alt="icone react" />
                   <img src={node} alt="icone node" />
                   <img src={java} alt="icone java" />
                   <img src={spring} alt="icone spring boot" />
                   <img src={typescript} alt="icone typescript" />
                   
                    </div>
                </div>
            </main>
        </Container>
    );
}
