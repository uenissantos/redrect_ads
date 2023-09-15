import React from 'react'
import *  as Styled from './styles/Styled'
import pro from  './assets/pro.png'

export const App = () => {


    const numeroAleatorio = Math.floor(Math.random() *9);



    function obterDataDoDia() {
        // Crie um novo objeto Date que representa a data e hora atual
        const dataAtual = new Date();
      
        // Obtenha o dia, mês e ano da data atual
        const dia = dataAtual.getDate(); // Dia do mês (1 a 31)
        const mes = dataAtual.getMonth() + 1; // Mês (0 a 11, então adicionamos 1)
        const ano = dataAtual.getFullYear(); // Ano com quatro dígitos
      
        // Formate a data como uma string (por exemplo, "14/09/2023")
        const dataFormatada = `${dia}/${mes}/${ano}`;
      
        return dataFormatada;
      }
      const data = obterDataDoDia();

      function redirecionarParaURL() {
        // Use window.location.href para redirecionar o usuário para a URL especificada
        window.location.href = 'https://api.whatsapp.com/send?phone=5521935000963';
      }
return (

<Styled.Wrrape>
<div className='wrapper-title'><p className='title'> RESTA APENAS  {numeroAleatorio} VAGAS GARANTA A SUA AGORA MESMO </p>
<p className='invite'> Agora só resta você fazer parte desse movimento ainda hoje!
Mas corra antes que (eles) derrubem mais um site nosso. </p>
</div>
<div className='image'><img src={pro} alt="" />
</div>


<h1> ACESSO A SALA COM MAIS DE 10 BOTS </h1>
<h2>DE R$97 POR R$20,00 </h2>



<h3> A PARTIR DE AGORA VOÇÊ TERÁ <span>ACESSO </span> A INTELIGENÇIA ARTIFICIAL QUE QUANTO MAIS JOGA MAIS ELE APRENDE  </h3>




<button onClick={redirecionarParaURL}  > <span>GARANTIR VAGA</span> <p>Somente HOJE {data}  </p></button>



<span>*Esse link pode não funcionar devido aos ataques que estamos recebendo*</span>

<p>Todo sistema no mundo pode ser hackeado, prova disso que os maiores hackers são contratados pelas grandes empresas após invadir o sistema delas, para corrigir e evitar futuros invasores. </p>
<p>

Nossa inteligência artificial atua nessa falha que foi detectada por nossos programadores, por isso estamos tendo resultados nunca vistos antes.
</p>



<p>

✅Resultados do mês anterior:
</p>
<img className='renda' src="https://rendaativa.online/wp-content/uploads/2023/06/download-1.png" alt="resultado anterior" />


<p>Desde o ano passado recebo convites de grandes C4SS1NOS para trabalhar na segurança e agora estão convidando minha equipe pra cuidar dessas falhas que dá tanto prejuízo pra eles</p>

<p>Mas a verdade é que dinheiro nenhum pode comprar a liberdade que proporcionamos pra mais de 2567 pessoas ao redor do mundo: 👇</p>


<p className='invite'> Agora só resta você fazer parte desse movimento ainda hoje!
Mas corra antes que (eles) derrubem mais um site nosso. </p>


<button onClick={redirecionarParaURL}  > <span>GARANTIR VAGA</span> <p>Somente HOJE {data}  </p></button>



<div  className='footer'><p>Este site não é afiliado ao Facebook,google ou uol ou a qualquer entidade de anuncios. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos nenhum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 ás 18h00. Lemos e respondemos todas as mensagens por ordem de chegada. </p></div>






</Styled.Wrrape>
)
};
