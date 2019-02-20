// @flow
import * as React from 'react';
import styled from 'react-emotion';

import TopSection from '../../components/top-section';
import photo from '../../assets/images/cyf-colombia.png';
import cssLogo from '../../assets/images/css-logo.svg';
import jsLogo from '../../assets/images/js-logo.svg';
import reactLogo from '../../assets/images/react-logo.svg';
import htmlLogo from '../../assets/images/html-logo.svg';

const studentLink = 'https://airtable.com/shr8vflbZQkh5hAe4';
const volunteerLink = 'https://airtable.com/shroNkIefDJfFksXa';

const StyledLink = styled('a')`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-color: #2ba560;
`;

const Buttons = styled('div')`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const StyledUl = styled('ul')`
  display: inline-block;
`;

const InfoBox = styled(({ className, title, items }) => (
  <div className={className}>
    <h3>{title}</h3>
    <StyledUl>{items.map(item => <li key={item.key}>{item}</li>)}</StyledUl>
  </div>
))`
  :not(:last-child) {
    margin-bottom: 30px;
  }
  li:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const FAQ = ({ question, answer }: Object) => (
  <div>
    <div>
      <b>{question} </b>
    </div>
    <div> {answer} </div>
  </div>
);

const listFaq = [
  {
    key: 'colombia-question-1',
    question: '¿ Realizar el curso tiene algun costo?',
    answer:
      'NO, solo requieren que realices los pasos para postularte y esperar el proceso de selección',
  },
  {
    key: 'colombia-question-2',
    question: '¿Debo saber sobre programación de software para aplicar?',
    answer:
      'NO, los aplicantes hacen un proceso de 5 pasos y con estos pasos adquirirán conocimientos básicos con los que tendrán idea de que se trata el curso y que van a aprender.',
  },
  {
    key: 'colombia-question-3',
    question: '¿Soy menor de edad puedo aplicar?',
    answer:
      'NO, nos enfocamos en edades de 18 en adelante sin embargo existen fundaciones como coderise que trabajan con chicos de 12 a 18 años',
  },
  {
    key: 'colombia-question-4',
    question: '¿Que incluye la beca?',
    answer: (
      <ul>
        <li>
          6 meses GRATIS curso profesional por desarrollador web full-stack.
        </li>
        <li>Entrenamiento para ser desarrollador junior web.</li>
        <li>Tutoría de desarrolladores profesionales de la comunidad local.</li>
        <li>Clases en vivo en los fines de semanas.</li>
        <li>Clases por Internet durante la semana.</li>
        <li>Apoyo en conseguir tu primer trabajo como desarrollador.</li>
        <li>
          Una oportunidad de estudiar juntos con estudiantes por todo el mundo!
        </li>
      </ul>
    ),
  },
  {
    key: 'colombia-question-5',
    question: '¿ la fundación entregará un certificado por este curso?',
    answer:
      'La fundación entregará una certificación por asistir al curso es decir certificado de participación.',
  },
];

const StyledImg = styled('img')`
  width: 50px;
  height: 50px;
`;

const BottomMarginImg = styled('img')`
  margin-bottom: 30px;
`;

const LearnItem = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const LearnText = styled('div')`
  width: 200px;
`;

const LearnLogos = styled('div')`
  display: flex;
  flex-grow: 1;
  justify-content: start;
`;

const CTA = () => (
  <Buttons>
    <StyledLink href={studentLink} className="big-link-3 button btn green-text">
      Quiero ser estudiante
    </StyledLink>

    <StyledLink
      href={volunteerLink}
      className="big-link-3 button btn green-text"
    >
      Quiero ser voluntario
    </StyledLink>
  </Buttons>
);

const ColombiaText = styled(({ className }) => (
  <div className={className}>
    <CTA />
    <InfoBox
      className="text-left"
      title="¿Quienes somos?"
      items={[
        {
          text: 'Somos una organización non-profit empezada en Inglaterra',
          key: 'colombia-infobox-1',
        },
        {
          text:
            'Ayudamos a personas a aprender desarrollo de software que mejorara sus vidas.',
          key: 'colombia-infobox-2',
        },
        {
          text:
            'Nos enfocamos en personas que por su propia cuenta no tienen la posibilidad de acceder a una carrera universitaria',
          key: 'colombia-infobox-3',
        },
      ]}
    />

    <BottomMarginImg src={photo} alt="code-your-future-colombia" />

    <InfoBox
      className="text-left"
      title="Lenguajes de programación que se ensañarán"
      items={[
        {
          text: () => (
            <LearnItem>
              <LearnText>JavaScript (React.js)</LearnText>
              <LearnLogos>
                <StyledImg src={jsLogo} alt="javascript-logo" />
                <StyledImg src={reactLogo} alt="react-logo" />
              </LearnLogos>
            </LearnItem>
          ),
          key: 'colombia-infobox-4',
        },
        {
          text: () => (
            <LearnItem>
              <LearnText>HTML</LearnText>
              <LearnLogos>
                <StyledImg src={htmlLogo} alt="html-logo" />
              </LearnLogos>
            </LearnItem>
          ),
          key: 'colombia-infobox-5',
        },
        {
          text: () => (
            <LearnItem>
              <LearnText>CSS</LearnText>
              <LearnLogos>
                <StyledImg src={cssLogo} alt="css-logo" />
              </LearnLogos>
            </LearnItem>
          ),
          key: 'colombia-infobox-6',
        },
      ]}
    />

    <InfoBox
      className="text-left"
      title="Preguntas frecuentes"
      items={listFaq.map(({ key, question, answer }) => (
        <FAQ key={key} question={question} answer={answer} />
      ))}
    />

    <InfoBox
      className="text-left"
      title="Tutores"
      items={[
        {
          text:
            'Los tutores son personas profesionales en esta área desarrolladores de software que tienen años trabajando en empresas de este medio y que aportan su tiempo y conocimiento para esta buena causa.',
          key: 'colombia-infobox-7',
        },
      ]}
    />

    <InfoBox
      className="text-left"
      title="Voluntarios"
      items={[
        {
          text:
            'Tenemos voluntarios de todas partes de Colombia y el mundo que conocen el proyecto y saben que vale la pena apostar para contribuir un poco de lo que ellos han recibido, estos son algunos de ellos.',
          key: 'colombia-infobox-8',
        },
      ]}
    />

    <InfoBox
      className="text-left"
      title="Patrocinadores"
      items={[
        {
          text: 'Yuxy global',
          key: 'colombia-infobox-9',
        },
        {
          text: 'Endava',
          key: 'colombia-infobox-10',
        },
        {
          text: 'Biblioteca pública de San Javier',
          key: 'colombia-infobox-11',
        },
        {
          text: 'Banco de Alimentos',
          key: 'colombia-infobox-12',
        },
        {
          text: 'EPM',
          key: 'colombia-infobox-13',
        },
      ]}
    />
  </div>
))`
  font-size: 18px;
`;

const Colombia = () => (
  <main>
    <TopSection title="Code Your Future Colombia" content={<ColombiaText />} />
  </main>
);

export default Colombia;
