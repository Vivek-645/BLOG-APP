import { Link } from 'react-router-dom';
import "./Home.css";
import articleImage from '../../Assets/Article-Writing-1.jpg';
import { useState } from 'react';

function Home() {

  let [home,setHome]=useState(false)

  function handleSetHome() {
    setHome(false);
  }

  function handleResetHome() {
    setHome(true);
  }

  return (
    <div className='container mt-5 main'>
      <div className='row content rounded-pill bg-info'>
        {
          home?(
            <>
            <div className='col-md-5 m-5 d-block mx-auto text-center'>
          <img src={articleImage} alt="Article Writing" className="artcleImage img-fluid" />
        </div>
            </>
          ):(
            <>
            <div className='col-md-5 text-center mt-5'>
          <img src={articleImage} alt="Article Writing" className="artcleImage img-fluid" />
        </div>
        <div className='col-md-7 p-5'>
          <h1 className="mb-4">Welcome to <span className='text-danger'>Blog Bridge</span></h1>
          <p className="lead">
            Your bridge to insightful articles, thought-provoking discussions, and a vibrant community of bloggers.
          </p>
          <p>
            Explore a diverse range of topics, from technology to travel, fashion to finance, and everything in between. Dive into engaging content crafted by passionate writers from around the world.
          </p>
          <p>
            Whether you're a seasoned blogger or just starting out, Blog Bridge provides the platform and resources you need to elevate your blogging journey.
          </p>
          <p>
            Ready to cross the bridge? <Link to="/signin" className="btn btn-success p-1">Get Started</Link> now to join our community, share your voice, and connect with fellow bloggers.
          </p>
        </div>
            </>
          )
        }
        
      </div>
        <div style={{marginBottom:-150}} className='text-center slogans mt-5'>
          <p className="slogan">"Cross the Blog Bridge: Where Ideas Meet Insights."</p>
          <p className="slogan">"Connecting Bloggers, Bridging Minds."</p>
          <p className="slogan">"Blog Bridge: Your Pathway to Blogging Brilliance."</p>
          <p className="slogan">"Discover. Connect. Blog. Welcome to Blog Bridge."</p>
        </div>
    </div>
  );
}

export default Home;
