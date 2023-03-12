import RocketLogo from "../../assets/rocket-logo.svg"
import { HeaderComponent, LogoContainer } from "./styles"

export function Header() {
  return (
    <HeaderComponent>
      <LogoContainer>
        <img src={RocketLogo} alt="Logotipo do site" />
        <h1>to<span>do</span></h1>
      </LogoContainer>
    </HeaderComponent>
  )
}