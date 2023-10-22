import person from "../assets/images/about_us/person.jpg";
import parts from "../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mt-16">
        <div className="w-3/4 lg:w-1/2 relative">
          <img src={person} alt="" className="lg:w-3/4 rounded-lg" />
          <img
            src={parts}
            alt=""
            className="absolute w-1/2 right-0 top-1/2 rounded-lg border-8 border-white"
          />
        </div>

        <div className="lg:w-1/2 space-y-3 lg:px-10">
          <h2 className="text-primary-color font-semibold text-xl">About Us</h2>
          <h2 className="text-4xl font-bold">
            We are qualified & of experience in this field
          </h2>
          <p className="text-sm text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
            <br />
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className="btn">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
