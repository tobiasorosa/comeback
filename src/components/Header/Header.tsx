import ComebackIcon from 'public/img/icons/comeback-icon.svg'
import HamburgerMenu from 'public/img/icons/hamburger-menu.svg'

export const Header = () => {
  return (
    <div className="flex justify-between px-2 py-1 items-center shadow-basic mb-2">
      <ComebackIcon />

      <HamburgerMenu fill="#fff" />
    </div>
  )
}
