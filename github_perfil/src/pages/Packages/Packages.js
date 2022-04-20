import Head from '../../utils/Head';
import PackagesContainer from './Packages.styles';
import packageLogo from '../../assets/images/packages_logos/package.PNG';
import PackagesShowcase from './PackagesShowcase/PackagesShowcase';

const Packages = () => {
  return (
    <>
      <Head title='Your Packages' />
      <PackagesContainer>
        <figure>
          <img src={packageLogo} alt="Package Logo" />
        </figure>
        <h1>Get started with GitHub Packages</h1>
        <p>Safely publish packages, store your packages alongside your code, and share your packages privately with your team.</p>

        <PackagesShowcase />
      </PackagesContainer>
    </>
  )
}

export default Packages;
