import "./hamburgerButton.css"

export const HamburgerButton = ({ onClick }) => {
  return (
    <button className="hamburger-btn" onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}
