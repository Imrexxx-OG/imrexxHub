function MobileMenu({toggleSidebar}) {
  return (
      <button className="btn-open-menu" onClick={() => toggleSidebar()}>
          <span></span>
          <span></span>
          <span></span>
      </button>
  )
}

export default MobileMenu;