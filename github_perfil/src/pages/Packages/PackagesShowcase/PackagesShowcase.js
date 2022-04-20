import * as S from './PackagesShowcase.styles';
import dockerImg from '../../../assets/images/packages_logos/docker.png';
import apacheImg from '../../../assets/images/packages_logos/apache.png';
import nugetImg from '../../../assets/images/packages_logos/nuget.png';
import rubyGems from '../../../assets/images/packages_logos/rubygems.png';
import npm from '../../../assets/images/packages_logos/npm.png';
import containers from '../../../assets/images/packages_logos/containers.png';

const packagesList = [
  {
    key: 'docker',
    packageImg: dockerImg,
    packageName: 'Docker',
    packageDesc: 'A software platform used for building applications based on containers — small and lightweight execution environments.',
    packageBtn: 'Learn More'
  },
  {
    key: 'apache-maven',
    packageImg: apacheImg,
    packageName: 'Apache Maven',
    packageDesc: 'A default package manager used for the Java programming language and the Java runtime environment.',
    packageBtn: 'Learn More'
  },
  {
    key: 'nuget',
    packageImg: nugetImg,
    packageName: 'NuGet',
    packageDesc: 'A free and open source package manager used for the Microsoft development platforms including .NET.',
    packageBtn: 'Learn More'
  },
  {
    key: 'rubygems',
    packageImg: rubyGems,
    packageName: 'RubyGems',
    packageDesc: 'A standard format for distributing Ruby programs and libraries used for the Ruby programming language.',
    packageBtn: 'Learn More'
  },
  {
    key: 'npm',
    packageImg: npm,
    packageName: 'npm',
    packageDesc: 'A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.',
    packageBtn: 'Learn More'
  },
  {
    key: 'containers',
    packageImg: containers,
    packageName: 'Containers',
    packageDesc: 'A single place for your team to manage Docker images and decide who can see and access your images.',
    packageBtn: 'Learn More'
  }
];

const PackagesShowcase = () => {
  return (
    <S.PackagesShowcaseArea>
      <h3>Choose a registry</h3>

      <S.PackagesShowcaseContainer>
        {packagesList.map(packageEl => (
          <div key={packageEl.key}>
            <figure>
              <img src={packageEl.packageImg} alt="" />
              <h3>{packageEl.packageName}</h3>
            </figure>
            <p>{packageEl.packageDesc}</p>
            <button>{packageEl.packageBtn}</button>
          </div>
        ))}
      </S.PackagesShowcaseContainer>
    </S.PackagesShowcaseArea>
  )
}

export default PackagesShowcase;