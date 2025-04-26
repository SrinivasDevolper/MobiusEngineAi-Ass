import Navbar from "../components/Navbar";
import image1 from "../images/image 1.png";
import BookImg from "../images/📖.png";
import Button from "../components/Button";

function HomePage() {
  return (
    <div className="home-container">
      <div className="max-w-[1500px] w-full" style={{ padding: "1rem 2.5rem" }}>
        <Navbar />
        {/* <div
          className="flex items-center justify-center"
          style={{ height: "70vh", marginTop: "2rem" }}
        >
          <div
            className="sm:w-full md:max-w-4xl flex justify-center items-center gap-32 "
            style={{ height: "60vh" }}
          >
            <div className=" flex flex-col flex-1/2 items-center gap-6">
              <h1
                className="text-lg lg:text-5xl text-white font-semibold"
                style={{ width: "500px" }}
              >
                Land job interviews <span className="text-[#0649e7]">10x</span>{" "}
                faster
              </h1>
              <p
                className="text-xs lg:text-sm text-white"
                style={{ width: "480px" }}
              >
                Custom-built resumes that match your goals, keywords, and
                recruiter expectations.
              </p>
              <Button />
            </div>
            <div className="relative flex-1/2 mt-12 md:mt-0">
              <img
                src={image1}
                alt="Hiring Trends 2024/2025"
                className="w-52 rounded-md"
              />
              <div className="absolute -bottom-3 -right-10 transform -translate-x-1/2 bg-white/30 backdrop-blur-lg rounded-full h-12 w-12 flex justify-center items-center space-x-2 text-white text-sm border border-white">
                <img
                  src={BookImg}
                  alt="book"
                  className="h-8 w-8"
                  style={{ padding: "5px" }}
                />
                <div
                  className="absolute -bottom-2 left-2 transform -translate-x-1/2 bg-white backdrop-blur-lg rounded-full h-5 w-5 flex justify-center items-center space-x-2 text-[#0649e7] text-sm font-medium"
                  style={{ padding: "5px" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 7.5a.5.5 0 01.5.5v4.5H8a.5.5 0 010 1H3a.5.5 0 01-.5-.5V8a.5.5 0 01.5-.5z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M12.354 3.646a.5.5 0 010 .708l-9 9a.5.5 0 01-.708-.708l9-9a.5.5 0 01.708 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div
                  className="absolute -bottom-8 -left-35"
                  style={{ padding: "5px" }}
                >
                  <p className="text-xs text-center text-white">
                    Download Free E-book
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div> */}
        <div
          className="flex flex-col justify-center"
          style={{ height: "80vh" }}
        >
          <div
            className="w-full flex flex-col md:flex-row justify-center items-center md:gap-20 gap-10 p-6 md:p-12"
            style={{ minHeight: "60vh" }}
          >
            {/* Left Side */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md gap-6">
              <h1 className="text-2xl md:text-4xl text-white font-semibold">
                Land job interviews
              </h1>
              <h1 className="text-2xl md:text-4xl text-white font-semibold">
                <span className="text-[#0649e7]">10x</span> faster
              </h1>
              <p className="text-sm md:text-base text-white">
                Custom-built resumes that match your goals, keywords, and
                recruiter expectations.
              </p>
              <div className="text-center md:text-left">
                <Button />
              </div>
            </div>

            {/* Right Side */}
            <div className="relative flex justify-center items-center">
              <img
                src={image1}
                alt="Hiring Trends 2024/2025"
                className="w-40 md:w-52 rounded-md"
              />

              {/* Badge */}
              <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 bg-white/30 backdrop-blur-lg rounded-full h-12 w-12 flex justify-center items-center border border-white">
                <img src={BookImg} alt="book" className="h-6 w-6" />

                {/* Icon */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-[#0649e7] rounded-full h-5 w-5 flex justify-center items-center text-xs font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 7.5a.5.5 0 01.5.5v4.5H8a.5.5 0 010 1H3a.5.5 0 01-.5-.5V8a.5.5 0 01.5-.5z" />
                    <path d="M12.354 3.646a.5.5 0 010 .708l-9 9a.5.5 0 01-.708-.708l9-9a.5.5 0 01.708 0z" />
                  </svg>
                </div>
              </div>

              {/* Download text */}
              <div className="absolute bottom-[-2rem] text-white text-xs text-center w-max">
                Download Free E-book
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
