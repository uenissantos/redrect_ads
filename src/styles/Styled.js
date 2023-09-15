import styled, { css } from 'styled-components';

export const Wrrape = styled.div`
${() => css`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, b, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
background-color: black;
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
p,h1,h2,h3,span{color:white;margin:auto}

span{ font-weight:bold;color:#FF8200}


.wrapper-title{ margin:auto; width:100%;}
.title{font-size:22px}


h1{font-size:32px}
h2{font-size:28px}

h3{font-size:20px; margin:10px 20%}


button { position:relative;height: 80px;animation: large 1s linear infinite;border-radius:8px;background-color:#FF8200;margin:30px; width:25%;span{color:white;font-size:28px;font-weight:bold; letter-spacing:2px};p{font-size:18px;margin:0}}


p{font-size:20px;margin:10px 20%}

.invite{color:#FF8200}


.footer{p{font-size:12px;margin:10px 10%}}

@keyframes large {
				from {
				width	: 25% ;font-size
				}

				to {
				width:30% ;
				}
			}





            @media (max-width: 320px) {
       
                .title{font-size:18px}
.image{margin:auto; width:250px;img{width:100%}}


h1{font-size:24px}
h2{font-size:20px}

h3{font-size:18px; margin:10px 10%}
p{font-size:18px;margin:10px 10%}


.renda{width:250px}


.footer{background-color:gray;p{font-size:8px}}

      }



`}
`;