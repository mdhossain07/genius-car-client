import img1 from "../assets/images/banner/1.jpg";
import img2 from "../assets/images/banner/2.jpg";
import img3 from "../assets/images/banner/3.jpg";

const Slider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full lg:h-[80vh] ">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute rounded-lg flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
          <div className="text-white w-1/2 ml-5 lg:ml-10 space-y-3 lg:space-y-5 ">
            <h2 className="text-4xl lg:text-7xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-md">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn">Discover More</button>
              <button className="btn">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-10 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full lg:h-[80vh]">
        <img src={img2} className="w-full rounded-lg" />
        <div className="absolute rounded-lg flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
          <div className="text-white w-1/2 ml-5 lg:ml-10 space-y-3 lg:space-y-5">
            <h2 className="text-4xl lg:text-7xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-md">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn">Discover More</button>
              <button className="btn">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-10 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full lg:h-[80vh]">
        <img src={img3} className="w-full rounded-lg" />
        <div className="absolute rounded-lg flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
          <div className="text-white w-1/2 ml-5 lg:ml-10 space-y-3 lg:space-y-5">
            <h2 className="text-4xl lg:text-7xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-md">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn">Discover More</button>
              <button className="btn">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-10 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
