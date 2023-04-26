import meter1 from "../assets/images/meter-1.svg";
import meter2 from "../assets/images/meter-2.svg";
import meter3 from "../assets/images/meter-3.svg";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/images/arrow1.svg";
import arrow2 from "../assets/images/arrow2.svg";
import colorSharp from "../assets/images/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Front End Development, HTML, CSS, JavaScript.
                <br></br> I am in the process of learning Back-End development.
              </p>
              <div className="row skill-content">
                <div className="col-sm-6 col-md-3 col-lg-3">
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>Web Design</h5>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3">
                  <div className="item">
                    <img src={meter2} alt="Image" />
                    <h5>Brand Identity</h5>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3">
                  <div className="item">
                    <img src={meter3} alt="Image" />
                    <h5>HTML & CSS</h5>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3">
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>JavaScript</h5>
                  </div>
                </div>
              </div>

              {/* <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              /*</Carousel> */}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
