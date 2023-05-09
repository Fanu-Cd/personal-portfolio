import './App.css';
import {BiMenuAltRight} from 'react-icons/bi'
import profile2 from './assets/101113291.jpg'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="first">
          <header className='my-3'>
            <p style={{margin:'0',textAlign:'left',paddingLeft:'2rem',fontSize:'2.5rem',fontWeight:'bold',color:'#DAF7A6'}}>Fanuel Amare</p>
          </header>
          <section style={{margin:'5rem 0 0 15%',maxWidth:'60%',height:'auto',minHeight:'15rem'}}>
            <div style={{width:'100%',minHeight:'10rem',height:'auto'}}>
              <h1 style={{textAlign:'left',color:'#DAF7A6',fontWeight:'bold'}}>Full Stack Web Developer</h1>
              <p style={{textAlign:'left',color:'white'}}>I am a MERN stack website developer with 2+ years of experience.</p>
            </div>
            <div className='expr'>
                <span>
                  <p style={{color:'#DAF7A6'}}>
                    Skilled in Full stack (MERN) Web Development
                  </p>
                </span>
                <span>
                  <p style={{color:'#DAF7A6'}}>
                    1+ years of experience in MERN stack website development
                  </p>
                </span>
            </div>
            <div className='rounded' style={{border:'1px solid #DAF7A6',margin:'1rem auto',width:'50%',minHeight:'3rem',height:'auto',display:'flex',alignItems:'center',backgroundColor:'white'}}>
              <span className='btn' style={{marginRight:'0.5rem',width:'49%',height:'100%'}}>
               <a style={{color:'black'}} href="https://github.com/Fanu-Cd"><AiFillGithub style={{width:'80%',height:'80%'}} /></a> 
              </span>
              <div style={{width:'0.1rem',height:'90%',backgroundColor:'black'}}></div>
              <span className='btn'  style={{marginLeft:'0.5rem',width:'49%',height:'100%'}}>
                <a style={{color:'black'}} href="https://www.linkedin.com/in/fanucd"><AiFillLinkedin style={{width:'80%',height:'80%'}} /></a>
              </span>
            </div>
          </section>
        </div>
        <div className="second">
          <div className="dropdown my-3">
           <button style={{marginRight:'2rem',float:'right',width:'4rem',height:'4rem'}} className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
               <BiMenuAltRight color='#256aeb' style={{width:'100%',height:'100%'}} />
          </button>
          <ul className="dropdown-menu">
             <li><a href='#skills' className="dropdown-item btn" >My Skills</a></li>
             <li><a href='#lang' className="dropdown-item btn" >Programming Languages I Use</a></li>
             <li><a href='#resume' className="dropdown-item btn" >Download Resume</a></li>
             <li><a href='#contact' className="dropdown-item btn" >Contact Me</a></li>
         </ul>
         </div>
          <div style={{border:'2px solid white',position:'relative',left:'-40%',width:'80%',height:'15rem',marginTop:'10rem'}}>
            <img alt='profile' src={profile2} width='100%' height='100%' style={{objectFit:'cover',position:'relative',left:'-1rem',bottom:'1rem'}} />
          </div>
        </div>
      </div>
      <div className='details my-5' style={{width:'100%',minHeight:'20rem',height:'auto'}}>
         <div id="skills" className='detail' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <h1>Skills</h1>
          <ul style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
             <li style={{textAlign:'left'}}>Frontend Development in <code>React, Bootstrap and Material UI</code></li>
             <li style={{textAlign:'left'}}>Backend Development in <code>Node js, Express js and Mongo DB</code></li>
         </ul>
         </div>
         <div id="lang" className='detail' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
         <h1 style={{textAlign:'center'}}>Programming Languages I use</h1>
          <ul style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
             <li style={{textAlign:'left'}}><code>HTML5</code></li>
             <li style={{textAlign:'left'}}><code>CSS3</code></li>
             <li style={{textAlign:'left'}}><code>JAVASCRIPT</code></li>
         </ul>
         </div>
         <div id="resume" className='detail' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
         <h1>Resume</h1>
          <button className='btn border btn-secondary'>Download Resume</button>
         </div>
      </div>
      <hr style={{width:'60%',margin:'auto'}}/>
      <div id='contact' className='contact'>
        <h1>Contact Address</h1>
        <p style={{margin:'0'}}>Github Link: <a href="https://github.com/Fanu-Cd">https://github.com/Fanu-Cd</a></p>
        <p style={{margin:'0'}}>LinkedIn Link: <a href="https://www.linkedin.com/in/fanucd">https://www.linkedin.com/in/fanucd</a></p>
      </div>
    </div>
  );
}

export default App;