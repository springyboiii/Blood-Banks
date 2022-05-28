import slideshow1 from "../../image/Login-pic-1.jpeg";
import slideshow2 from "../../image/Login-pic-2.jpg";
const SlideShow = () => {
  let slideIndex = 0;
  showSlides();
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[slideIndex - 1] && dots[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 2</div>
          <img
            src={slideshow1}
            alt="slide-1"
            style={{ width: "100%", height: "450px" }}
          />
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 2</div>
          <img
            src={slideshow2}
            alt="slide-2"
            style={{ width: "100%", height: "450px" }}
          />
        </div>
      </div>
      <br />

      <div style={{ textAlign: "center" }}>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </>
  );
};

export default SlideShow;
