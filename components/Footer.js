import styled from 'styled-components'
import tw from 'tailwind.macro'


const Footer = () => {
  const Footer = styled.footer`
    ${tw`text-center`};
  `;

  return (
    <Footer>
      <small>©2021 klim0824</small>
    </Footer>
  );
}

export default Footer;