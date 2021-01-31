import HeaderLink from '../components/HeaderLink'

const Header = (props) => (
  <header className="text-center">
    {(() => {
      if (props.place === 'home') {
        return (
          <h1 className="m-8 text-3xl font-semibold">
            <HeaderLink />
          </h1>
        )
      } else if (props.place === 'page') {
        return (
          <div className="m-8 text-3xl font-semibold">
            <HeaderLink />
          </div>
        )
      }
    })()}
  </header>
)

export default Header
