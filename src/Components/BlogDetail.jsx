import { useState, useEffect } from "react";
import { IoTimeOutline, IoPersonOutline, IoLocationOutline, IoChevronDown, IoChevronUp } from "react-icons/io5";
import swiss1 from "../assets/images/swiss1.jpg";

const PullQuote = ({ quote, author }) => (
  <div className="border-l-4 border-blue-500 pl-4 my-8 italic">
    <div className="text-xl text-gray-700 mb-2">{quote}</div>
    <div className="text-sm text-gray-500">— {author}</div>
  </div>
);

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex justify-between items-center w-full text-left font-semibold cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {title}
        {isOpen ? <IoChevronUp /> : <IoChevronDown />}
      </div>
      {isOpen && <div className="mt-2">{content}</div>}
    </div>
  );
};

export default function BlogDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12" data-aos="fade-up">
      <div className="mb-8 text-center">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
          Discovering Switzerland: <span className="font-serif italic">Nature</span> and Culture
        </div>
        <div className="flex items-center justify-center text-sm text-gray-600 space-x-4">
          <span className="flex items-center">
            <IoTimeOutline className="w-5 h-5 mr-2" />5 min read
          </span>
          <span className="flex items-center">
            <IoPersonOutline className="w-5 h-5 mr-2" />
            By John Doe
          </span>
          <span className="flex items-center">
            <IoLocationOutline className="w-5 h-5 mr-2" />
            Switzerland
          </span>
        </div>
      </div>

      <div className="mb-10">
        <img src={swiss1} alt="Swiss landscape" className="w-full h-auto object-cover rounded-lg shadow-lg" loading="lazy" />
        <div className="text-center text-sm text-gray-500 mt-2">The breathtaking Swiss Alps (Photo by Jane Smith)</div>
      </div>

      <div className="mx-auto text-gray-700">
        <div id="section-1" className="text-2xl font-bold mt-8 mb-4">
          Introduction
        </div>
        <p>
          Switzerland, a land of picturesque landscapes and rich cultural heritage, offers visitors an unparalleled experience. From the majestic Alps to the serene lakes, from medieval towns to modern cities, Switzerland is a country of
          contrasts and harmony.
        </p>

        <PullQuote quote="In Switzerland, I learned the importance of punctuality. Even the mountains arrive on time." author="Anonymous Traveler" />

        <div id="section-2" className="text-2xl font-bold mt-8 mb-4">
          Natural Wonders
        </div>
        <p>
          The Swiss Alps dominate the landscape, offering breathtaking views and world-class skiing. Pristine lakes like Lake Geneva and Lake Lucerne provide tranquil settings for relaxation and water activities. The country&apos;s
          commitment to environmental conservation ensures that these natural wonders remain unspoiled for generations to come.
        </p>

        <div id="section-3" className="text-2xl font-bold mt-8 mb-4">
          Cultural Heritage
        </div>
        <p>
          Switzerland&apos;s cultural tapestry is woven from its four national languages and diverse regional traditions. From the annual Fasnacht carnival in Basel to the Fête des Vignerons in Vevey, Swiss festivals showcase the
          country&apos;s rich cultural heritage.
        </p>

        <div id="section-4" className="text-2xl font-bold mt-8 mb-4">
          Swiss Hospitality
        </div>
        <p>
          The Swiss are renowned for their warm hospitality and attention to detail. Whether you&apos;re staying in a luxury hotel in Zurich or a family-run chalet in the Alps, you&apos;ll experience the highest standards of service and
          comfort.
        </p>

        <div id="section-5" className="text-2xl font-bold mt-8 mb-4">
          Planning Your Trip
        </div>
        <p>When planning your Swiss adventure, consider the following tips:</p>
        <AccordionItem
          title="Best Time to Visit"
          content="Switzerland is beautiful year-round, but the best time to visit depends on your interests. Summer (June-August) is perfect for hiking, while winter (December-March) is ideal for skiing. Spring and fall offer mild weather and fewer crowds."
        />
        <AccordionItem
          title="Transportation"
          content="Switzerland has an efficient public transportation system. Consider purchasing a Swiss Travel Pass for unlimited travel on trains, buses, and boats. For scenic routes, don't miss the Glacier Express and the Bernina Express."
        />
        <AccordionItem
          title="Must-Visit Places"
          content="Include Lucerne, Interlaken, Zermatt (home to the Matterhorn), and Bern (the capital) in your itinerary. Each region offers unique experiences, from the Italian-influenced Ticino to the French-speaking Romandy."
        />
      </div>

      <div className="mt-12 bg-blue-100 p-6 rounded-lg">
        <div className="text-2xl font-bold mb-4">About the Author</div>
        <div className="flex items-center">
          <img src={swiss1} alt="John Doe" className="w-24 h-24 rounded-full mr-4" />
          <div>
            <div className="text-xl font-semibold">John Doe</div>
            <p className="text-gray-600">John is a travel writer and photographer with a passion for alpine adventures. He has been exploring Switzerland for over a decade and loves sharing insider tips with fellow travelers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
