import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  url: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'ghproxy',
    url: '/docs/category/ghproxy',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        基于Go的高性能,多功能,可扩展的Github代理加速项目
      </>
    ),
  },
  {
    title: 'smart-git',
    url: '/docs/category/smart-git',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        基于HertZ和<code>Go-Git</code>实现的git clone (smart http) 转发
      </>
    ),
  },
  {
    title: 'tools-stable',
    url: '#',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        WJQserver-Studio的VPS工具箱
      </>
    ),
  },
];

function Feature({title, Svg, description,url}: FeatureItem) {
  return (
   
    <div className={clsx('col col--4')}>
       <Link href={url}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      </Link>
    </div>  
  );
}

export default function HomepageFeatures(): ReactNode {
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
