import HeaderSvg from '../../assets/images/HeaderSvg'
import Navbar from '../navbar/Navbar'
import {
  headerWrapper,
  headerContainer,
  headerContent,
  headerTitle,
  headerDescription,
  headerButtons,
  headerButton,
  headerImages,
  headerImageBorder,
  headerImage
} from './styles.module.css'


const Header = () => {
  return (
    <>
        <Navbar />
        <section className={headerWrapper}>
          <div className={headerContainer}>
            <div className={headerImages}>
                <div className={headerImage}>
                  <img src=
                  "../headerImage.jpg"
                    alt="header Image"
                  />
                </div>
                <div className={headerImage}>
                  <img src=
                  "../headerImage2.jpg"
                    alt="header Image"
                  />
                </div>
                <div className={headerImage}>
                  <img src=
                  "../headerImage3.jpg"
                    alt="header Image"
                  />
                </div>
            </div>
            <div className={headerContent}>
              <h1 className={headerTitle}>
                Planejamento 
                <span>reprodutivo</span>
              </h1>
              <p className={headerDescription}>
                Planejamento reprodutivo é o direito que toda pessoa tem à informação, à assistência especializada e ao acesso aos recursos que permitam optar livre e  conscientemente por ter ou não ter filhos.
              </p>
              <div className={headerButtons}>
                <button className={headerButton}>Comece agora</button>
                <button className={headerButton}>Saiba mais</button>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Header