import{
  nav,
  navContainer,
  navTitle,
  navButtons,
  navButton
} from './styles.module.css'


const Navbar = () => {
  return (
    <section className={nav}>
    <div className={navContainer}>
      <a className={navTitle} href='#'>Planeja</a>
        <div className={navButtons}>
          <button className={navButton}>
            <a href="#home">Home</a>
            <span></span>
          </button>
          <button className={navButton}>
            <a href="#methods">Métodos</a>
            <span></span>
          </button>
          <button className={navButton}>
            <a href="#rights">Direitos</a>
            <span></span>
          </button>
          <button className={navButton}>
            <a href="#help">Ajuda</a>
            <span></span>
          </button>
          <button className={navButton}>
            <a href="#quiz">Quiz</a>
            <span></span>
          </button>
        </div>
    </div>
  </section>
  )
}

export default Navbar