
import OIP from '../components/assets/portfolio/OIP.jpg'
import Novice from '../components/assets/portfolio/novice.jpg'
import Cicd from '../components/assets/portfolio/cicd.jpg'
import Pportfolio from '../components/assets/portfolio/portfolio.jpg'
import Attendo from '../components/assets/portfolio/attendo.jpg'
import ShopCart from '../components/assets/portfolio/shopcart.jpg'
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: OIP,
      Name: "Weather App",
      href: "https://github.com/nileshsatote/WeatherApp"
    },
    {
      id: 2,
      src: Novice,
      Name: "Novice Trainer",
      href: '/'
    },
    {
      id: 3,
      src: Cicd,
      Name: "CICD",
      href: 'https://github.com/nileshsatote/AWS-CI-CD-Demo'
    },
    {
      id: 4,
      src: Pportfolio,
      Name: "Portfolio",
      href: 'https://github.com/nileshsatote/PortfolioNileshSatote'
    },
    {
      id: 5,
      src: Attendo,
      Name: "Attendo",
      href: '/'
    },
    {
      id: 6,
      src: ShopCart,
      Name: "ShopCart",
      href: 'https://github.com/nileshsatote/Shopcart'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-4 md:py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {portfolios.map(({ id, src, Name, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg mb-4">
              <img
                src={src}
                alt=""
                className="rounded-md w-full h-48 md:h-64 object-cover duration-200 hover:scale-105"
              />
              <div className="flex flex-col items-center justify-center p-4">
                <button className="w-full md:w-2/3 lg:w-1/2 px-4 py-2 mb-2 md:mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md duration-200 hover:scale-105">
                  {Name}
                </button>
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full md:w-2/3 lg:w-1/2 px-4 py-2 bg-gray-700 text-white rounded-md text-center duration-200 hover:scale-105 transition-transform"
                  >
                    Code
                  </a>

                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
