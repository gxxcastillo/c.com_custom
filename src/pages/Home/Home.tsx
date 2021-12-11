import Button from '@storybook/Button/Button';
import Image from '@storybook/Image/Image';
import logo from '@images/logo.png';

function Home() {
  return (
    <div className="Home">
      Home page
      <Button />
      <Image src={logo} />
    </div>
  )
}

export default Home;