import HeaderLink from '../components/HeaderLink'

const Header = props => (
  <header className="text-center">
    {(() => {
      if (props.place === 'home') {
        return (
          <h1>
            <HeaderLink />
          </h1>
        )
      } else if (props.place === 'page') {
        return (
          <div>
            <HeaderLink />
          </div>
        )
      }
    })()}
  </header>
)

export default Header