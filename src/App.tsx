import "./App.css";
import "./scss/styles.scss";

function App() {
  // useEffect(() => {
  //   const hyperlinks = document?.querySelectorAll(".icon");
  //   function addAnimationDelay({ node, index }: any) {
  //     node.classList.add("scale-delay");
  //     node.style = "--animationDelay:" + index;
  //     console.log(node + index);
  //   }
  //   hyperlinks.forEach(addAnimationDelay);
  // }, []);

  return (
    <section className='section'>
      <img
        className='background'
        src='./src/assets/flat-hand-drawn-psychedelic-groovy-background_23-2148850121.webp'
        alt=''
      />
      <div className='overlay'></div>
      <div className='whole transition-translate-y'>
        <div className='container'>
          <img
            className='pfp transition-scale-in'
            src='https://pbs.twimg.com/profile_images/1659370175546765314/NQtKyiWa_400x400.jpg'
            alt=''
          />
          <hr className='separator-1' />
          <div className='copy'>
            <h1 className='transition-translate-y transition-opacity-2'>Kinxori</h1>
            <p className='transition-translate-y transition-opacity-2'>
              3D artist, Investor and Web Developer in process. <br /> Keep Creating!
            </p>
            <div className='icons'>
              <a className='icon' href='https://www.instagram.com' target='_blank'>
                <i className='fa fa-instagram' aria-hidden='true'></i>
              </a>
              <a className='icon' href='https://www.facebook.com/kinxori' target='_blank'>
                <i className='fa fa-facebook' aria-hidden='true'></i>
              </a>
              <a className='icon' href='https://www.linkedin.com/in/quinchori/' target='_blank'>
                <i className='fa fa-linkedin' aria-hidden='true'></i>
              </a>
              <a className='icon' href='https://www.kinxori.com/' target='_blank'>
                <i className='fa-solid fa-window-maximize' aria-hidden='true'></i>
              </a>
              <a className='icon' href='https://twitter.com/kinxori' target='_blank'>
                <i className='fa fa-twitter' aria-hidden='true'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
