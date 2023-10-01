import Dog from "./img/dog.png"

function App() {
  return (
   <div> 
      <div className="App">
        <div id="dimg">
            <img id="img" src={Dog} alt="Imagem Dog"/>
        </div>
        <div className="titulo">
          <nav id="menu">
            <a href="#">Blog</a>
            <a href="#">Sobre</a>
            <a href="#">Descrição</a>
          </nav>
          <h1 id="nome"> Sobre mim</h1>
          <p id="bio"> Analista de Sistemas com experiência de 2 anos em TI, especializada em ProjectWise. Tenho formação em Análise e Desenvolvimento de Sistemas, além de um curso de Data Analytics. Possuo fluência em inglês e espanhol avançado. Atualmente, ocupo a posição de Responsável Técnica em projetos de implantação e integração no ProjectWise. Minhas principais áreas de atuação incluem mapeamento de processos, documentação e condução de treinamentos técnicos.

Com uma abordagem detalhista e orientada para resultados. 
</p>
        </div>
      </div>
      <div className="corpo">
        <h2>Você é Go Horse?</h2>
        <h3> Se você é Go Horse, precisa conhecer esses 5 itens</h3>
        <p className="p1">1. Pensou, não é GH</p>
        <p>2. GH é seu brother, mas é vingativo</p>
        <p>3. Se tiver funcionando, não rela a mão</p>
        <p>4. Teste é para os fracos</p>
        <p>5. Commit sempre antes de update</p>
        
        <h2>Você é Scrum Master?</h2>
        <h3> Se você é Scrum, precisa conhecer esses 5 itens</h3>
        <p className="p1">1. Planejamento da Sprint</p>
        <p>2. Reunião Diária</p>
        <p>3. Revisão da Sprint</p>
        <p>4. Retrospectiva da Sprint</p>
        <p>5. Refinamento do Backlog</p>

        <h2>Você é Kanban?</h2>
        <h3> Se você é Kanban, precisa conhecer esses 5 itens</h3>
        <p className="p1">1. Visualização do Fluxo de Trabalho</p>
        <p>2. Limitação do Trabalho em Progresso (WIP)</p>
        <p>3. Gestão do Fluxo</p>
        <p>4. Gestão Visual</p>
        <p>5. Melhoria Contínua</p>

      </div>   
    </div>  
  );
  
}

export default App;
