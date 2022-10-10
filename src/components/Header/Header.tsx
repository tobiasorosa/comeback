import HamburgerMenu from 'public/img/icons/hamburger-menu.svg'

export const Header = () => {
  return (
    <div className="px-2 py-1 shadow-basic mb-2">
      <div className="container flex justify-between items-center mx-auto px-4">
        <div className="flex">
          <span className="mr-20">
            <a href="https://www.whogaming.com">WhoGaming</a>
          </span>

          <ul className="justify-between w-60 hidden md:flex">
            <li>News</li>

            <li>Reviews</li>

            <li>Contact</li>
          </ul>
        </div>

        <HamburgerMenu fill="#fff" />
      </div>
    </div>
  )
}
