
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'


const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo/>
        </nav>

        <div className="container page">
           {/*info */} 
           <div className="info">

              <h1>Track your<span>Job</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Odit exercitationem cumque
                ab vitae quasi labore laudantium accusantium 
                officiis sapiente tempore?
              </p>

                 <Link to='/register' className='btn btn-hero'>Login/Register</Link>
            </div> 
            <img src={main} alt='job hunt' className='img main-img'/>
        </div>
    </Wrapper>
  )
}



export default Landing
