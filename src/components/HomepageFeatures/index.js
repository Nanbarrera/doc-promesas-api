import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil de Usar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Nuestra documentación sobre promesas y APIs está diseñada para ser fácil de entender y utilizar, permitiéndote implementar estos conceptos rápidamente en tus proyectos de JavaScript.
      </>
    ),
  },
  {
    title: 'Enfócate en lo Importante',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Aquí encontrarás información práctica sobre el uso de promesas y APIs, para que puedas concentrarte en lo que realmente importa: desarrollar funcionalidades efectivas en tu aplicación.
      </>
    ),
  },
  {
    title: 'Impulsado por JavaScript',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Nuestra guía sobre promesas y APIs te ayudará a extender o personalizar tus aplicaciones utilizando JavaScript de manera efectiva, mejorando tu comprensión y habilidades en la programación asincrónica.
      </>
    ),
  },
  
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
