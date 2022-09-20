import HamburgerMenu from 'public/img/icons/hamburger-menu.svg'

export const Header = () => {
  return (
    <div className="flex justify-between px-2 py-1 items-center shadow-basic mb-2">
      <span>WhoGaming</span>

      <div>
        <ul className="flex justify-around">
          <li>News</li>

          <li>Reviews</li>

          <li>Contact</li>
        </ul>
      </div>

      <HamburgerMenu fill="#fff" />
    </div>
  )
}
