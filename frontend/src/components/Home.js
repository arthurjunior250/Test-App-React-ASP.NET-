import React, { useState, useEffect } from "react";
import { Globe2, Cpu, Zap, Lock } from "lucide-react";

function Home() {
  // const [message, setMessage] = useState("");
  // const [heroctalink, setheroctalink] = useState("");
  // const [heroctatext, setheroctatext] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/welcome")
  //     .then((response) => response.json())
  //     .then((data) => setMessage(data.message))
  //     .catch((error) => console.error("Error:", error));
  // }, []);

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/homecontent")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMessage(data.welcomeMessage);
  //       setheroctatext(data.ctaSection.title);
  //       setheroctalink(data.ctaSection.description);
  //       // Update other sections as needed
  //     })
  //     .catch((error) => console.error("Error:", error));
  // }, []);
  const [content, setContent] = useState({
    welcomeMessage: "",
    platformTitle: "",
    heroCtaText: "",
    heroCtaLink: "",
    features: [],
    finalCtaTitle: "",
    finalCtaDescription: "",
    ctaSection: {
      title: "",
      description: "",
      buttonText: "",
      buttonLink: ""
    }
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/homecontent")
      .then((response) => response.json())
      .then((data) => {
        setContent(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);


  const iconMap = {
    Cpu: (props) => <Cpu {...props} />,
    Globe2: (props) => <Globe2 {...props} />,
    Zap: (props) => < Zap {...props} />,
    Lock: (props) => < Lock {...props} />,
  };


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20 platform-section">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            {content.platformTitle || " Welcome to Our Platform1"}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {content.welcomeMessage || "Loading..."}
          </p>
          <button className="button button-primary button-lg">
          {content.heroCtaText || "Get Started"}
          </button>
        </div>
      </section>
 {/* Features Section */}
 <section className="py-20 features-section">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Platform?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.features.map((feature, index) => (
              <div key={index} className="card">
               <div className="mb-4 text-purple-600">
                {/* Dynamically render the icon */}
                {iconMap[feature.iconName] ? iconMap[feature.iconName]({ className: "h-10 w-10" }) : null}
              </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-50 py-20 cta-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">  {content.finalCtaTitle || " Ready to Get Started?"}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {content.finalCtaDescription || " Join us today and experience the power of modern web development"}
          </p>
          <div className="flex gap-4 justify-center button-container">
            <button className="button button-outline button-lg mr-4">
              Learn More
            </button>
            <button className="button button-primary button-lg mr-4">
              Sign Up Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
