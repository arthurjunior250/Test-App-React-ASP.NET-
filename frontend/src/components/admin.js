// import React, { useState, useEffect } from 'react';
// import { Save } from 'lucide-react';
// import "./style.css";
// export default function AdminDashboard() {
//   const [welcomeMessage, setWelcomeMessage] = useState('');
//   const [features, setFeatures] = useState([]);
//   const [ctaSection, setCtaSection] = useState({
//     title: '',
//     description: ''
//   });

//   useEffect(() => {
//     fetchContent();
//   }, []);

//   const fetchContent = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/homecontent');
//       const data = await response.json();
//       setWelcomeMessage(data.welcomeMessage || '');
//       setFeatures(data.features || []);
//       setCtaSection(data.ctaSection || { title: '', description: '' });
//     } catch (error) {
//       console.error('Error fetching content:', error);
//     }
//   };

//   const saveWelcomeMessage = async () => {
//     try {
//       await fetch('http://localhost:5000/api/homecontent/welcome', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ welcomeMessage })
//       });
//     } catch (error) {
//       console.error('Error saving welcome message:', error);
//     }
//   };

//   const saveFeature = async (feature) => {
//     try {
//       await fetch('http://localhost:5000/api/homecontent/features', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(feature)
//       });
//     } catch (error) {
//       console.error('Error saving feature:', error);
//     }
//   };

//   const saveCtaSection = async () => {
//     try {
//       await fetch('http://localhost:5000/api/homecontent/cta', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(ctaSection)
//       });
//     } catch (error) {
//       console.error('Error saving CTA section:', error);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-8">Content Management</h1>

//       {/* Welcome Message Section */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-4">Welcome Message</h2>
//         <div className="flex gap-4">
//           <textarea
//             className="flex-1 p-2 border rounded"
//             value={welcomeMessage}
//             onChange={(e) => setWelcomeMessage(e.target.value)}
//             rows="3"
//           />
//           <button
//             onClick={saveWelcomeMessage}
//             className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//           >
//             <Save className="h-5 w-5" />
//           </button>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-4">Features</h2>
//         {features.map((feature, index) => (
//           <div key={index} className="mb-4 p-4 border rounded">
//             <input
//               className="w-full p-2 border rounded mb-2"
//               value={feature.title}
//               onChange={(e) => {
//                 const newFeatures = [...features];
//                 newFeatures[index].title = e.target.value;
//                 setFeatures(newFeatures);
//               }}
//               placeholder="Feature Title"
//             />
//             <textarea
//               className="w-full p-2 border rounded mb-2"
//               value={feature.description}
//               onChange={(e) => {
//                 const newFeatures = [...features];
//                 newFeatures[index].description = e.target.value;
//                 setFeatures(newFeatures);
//               }}
//               placeholder="Feature Description"
//               rows="2"
//             />
//             <button
//               onClick={() => saveFeature(feature)}
//               className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//             >
//               Save Feature
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* CTA Section */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-4">CTA Section</h2>
//         <div className="p-4 border rounded">
//           <input
//             className="w-full p-2 border rounded mb-2"
//             value={ctaSection.title}
//             onChange={(e) => setCtaSection({ ...ctaSection, title: e.target.value })}
//             placeholder="CTA Title"
//           />
//           <textarea
//             className="w-full p-2 border rounded mb-2"
//             value={ctaSection.description}
//             onChange={(e) => setCtaSection({ ...ctaSection, description: e.target.value })}
//             placeholder="CTA Description"
//             rows="2"
//           />
//           <button
//             onClick={saveCtaSection}
//             className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//           >
//             Save CTA Section
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { Save, Trash } from 'lucide-react';
// import { Link } from "react-router-dom";
// import './style.css';

// export default function AdminDashboard() {
//   const [welcomeMessage, setWelcomeMessage] = useState('');
//   const [platformTitle, setPlatformTitle] = useState(''); // For "Why Choose Our Platform?"
//   const [ctaTitle, setCtaTitle] = useState(''); // For "Ready to Get Started?"
//   const [ctaTitle1, setCtaTitle1] = useState(''); // For "Ready to Get Started?"
//   const [features, setFeatures] = useState([]);
//   const [ctaSection, setCtaSection] = useState({
//     title: '',
//     description: ''
//   });

//   // Fetch content on component mount
//   useEffect(() => {
//     fetchContent();
//   }, []);

//   const fetchContent = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/homecontent');
//       const data = await response.json();
//       setWelcomeMessage(data.welcomeMessage || '');
//       setPlatformTitle(data.platformTitle || ''); // Set platform title
//       setCtaTitle(data.ctaTitle || ''); // Set CTA title
//       setFeatures(data.features || []);
//       setCtaSection(data.ctaSection || { title: '', description: '' });
//     } catch (error) {
//       console.error('Error fetching content:', error);
//     }
//   };

//   const saveWelcomeMessage = async () => {
//     try {
//       await fetch('http://localhost:5000/api/homecontent/welcome', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ welcomeMessage })
//       });
//     } catch (error) {
//       console.error('Error saving welcome message:', error);
//     }
//   };

//   const savePlatformTitle = async () => {
//     try {
//       await fetch('http://localhost:5000/api/homecontent/platformtitle', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ platformTitle })
//       });
//     } catch (error) {
//       console.error('Error saving platform title:', error);
//     }
//   };

//   const saveCtaTitle = async () => {
//     try {
//       await fetch('http://localhost:5000/api/homecontent/ctatitle', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ctaTitle })
//       });
//     } catch (error) {
//       console.error('Error saving CTA title:', error);
//     }
//   };

//   const saveFeature = async (feature) => {
//     try {
//       await fetch('http://localhost:5000/api/homecontent/features', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(feature)
//       });
//     } catch (error) {
//       console.error('Error saving feature:', error);
//     }
//   };

//   const saveCtaSection = async () => {
//     try {
//       await fetch('http://localhost:5000/api/homecontent/cta', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(ctaSection)
//       });
//     } catch (error) {
//       console.error('Error saving CTA section:', error);
//     }
//   };

//   // Add new feature
//   const addFeature = () => {
//     setFeatures([...features, { title: '', description: '' }]);
//   };

//   // Remove feature
//   const removeFeature = (index) => {
//     const updatedFeatures = features.filter((_, i) => i !== index);
//     setFeatures(updatedFeatures);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//           <Link
//               to="/"
//               className="text-sm font-bold text-purple hover:bg-purple-700"
//             >
//             Home
//             </Link>
//       <h1 className="text-3xl font-bold mb-8">Content Management</h1>
//    {/* Platform Title Section (Why Choose Our Platform?) */}
//    <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-4">Why Choose Our Platform?<br/> (Title)</h2>
//         <div className="flex gap-4">
//           <input
//             className="flex-1 p-2 border rounded"
//             value={platformTitle}
//             onChange={(e) => setPlatformTitle(e.target.value)}
//             placeholder="Platform Title"
//           />
//           <button
//             onClick={savePlatformTitle}
//             className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//           >
//             <Save className="h-5 w-5" />
//           </button>
//         </div>
//       </div>
//       {/* Welcome Message Section */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-4">(Welcome Message)</h2>
//         <div className="flex gap-4">
//           <textarea
//             className="flex-1 p-2 border rounded"
//             value={welcomeMessage}
//             onChange={(e) => setWelcomeMessage(e.target.value)}
//             rows="3"
//           />
//           <button
//             onClick={saveWelcomeMessage}
//             className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//           >
//             <Save className="h-5 w-5" />
//           </button>
//         </div>
//       </div>
//   {/* CTA Section */}
//   <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-4">Button</h2>
//         <div className="p-4 border rounded">
//         <h2 className="text-xl font-semibold mb-4">(CTA Text)</h2>
//           <input
//             className="w-full p-2 border rounded mb-2"
//             value={ctaSection.title}
//             onChange={(e) => setCtaSection({ ...ctaSection, title: e.target.value })}
//             placeholder="CTA Title"
//           />
//           <h2 className="text-xl font-semibold mb-4">(CTA Link)</h2>
//           <textarea
//             className="w-full p-2 border rounded mb-2"
//             value={ctaSection.description}
//             onChange={(e) => setCtaSection({ ...ctaSection, description: e.target.value })}
//             placeholder="CTA Description"
//             rows="2"
//           />
//           <button
//             onClick={saveCtaSection}
//             className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//           >
//             Save CTA Section
//           </button>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-4">Features</h2>
//         {features.map((feature, index) => (
//           <div key={index} className="mb-4 p-4 border rounded">
//                   <h2 className="text-xl font-semibold mb-4">(Title)</h2>
//             <input
//               className="w-full p-2 border rounded mb-2"
//               value={feature.title}
//               onChange={(e) => {
//                 const newFeatures = [...features];
//                 newFeatures[index].title = e.target.value;
//                 setFeatures(newFeatures);
//               }}
//               placeholder="Feature Title"
//             />
//                         <h2 className="text-xl font-semibold mb-4">(Description)</h2>
//             <textarea
//               className="w-full p-2 border rounded mb-2"
//               value={feature.description}
//               onChange={(e) => {
//                 const newFeatures = [...features];
//                 newFeatures[index].description = e.target.value;
//                 setFeatures(newFeatures);
//               }}
//               placeholder="Feature Description"
//               rows="2"
//             />
//             <div className="flex gap-4 justify-between">
//               <button
//                 onClick={() => saveFeature(feature)}
//                 className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//               >
//                 Save Feature
//               </button>
//               <button
//                 onClick={() => removeFeature(index)}
//                 className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//               >
//                 <Trash className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         ))}
//         <button
//           onClick={addFeature}
//           className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//         >
//           Add Feature
//         </button>
//       </div>

//       {/* CTA Title Section (Ready to Get Started?) */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-4">Ready to Get Started? <br/>(Title)</h2>
//         <div className="flex gap-4">
//           <input
//             className="flex-1 p-2 border rounded"
//             value={ctaTitle}
//             onChange={(e) => setCtaTitle(e.target.value)}
//             placeholder="Title"
//           />
//           <button
//             onClick={saveCtaTitle}
//             className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//           >
//             <Save className="h-5 w-5" />
//           </button>
//         </div>
//         <h2 className="text-xl font-semibold mb-4">(Desc)</h2>
//         <div className="flex gap-4">
//           <input
//             className="flex-1 p-2 border rounded"
//             value={ctaTitle1}
//             onChange={(e) => setCtaTitle(e.target.value)}
//             placeholder="Description"
//           />
//           <button
//             onClick={saveCtaTitle}
//             className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//           >
//             <Save className="h-5 w-5" />
//           </button>
//         </div>
//       </div>

//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Save, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import "./style.css";
import { BASE_URL } from "./config";

export default function AdminDashboard() {
  // State variables for all content sections
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [platformTitle, setPlatformTitle] = useState("");
  const [heroCtaText, setHeroCtaText] = useState("");
  const [heroCtaLink, setHeroCtaLink] = useState("");
  const [features, setFeatures] = useState([]);
  const [finalCtaTitle, setFinalCtaTitle] = useState("");
  const [finalCtaDescription, setFinalCtaDescription] = useState("");
  const [ctaSection, setCtaSection] = useState({
    title: "",
    description: "",
    buttonText: "",
    buttonLink: "",
  });

  // Fetch content on component mount
  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/homecontent`);
      const data = await response.json();
      setWelcomeMessage(data.welcomeMessage || "");
      setPlatformTitle(data.platformTitle || "");
      setHeroCtaText(data.heroCtaText || "");
      setHeroCtaLink(data.heroCtaLink || "");
      setFeatures(data.features || []);
      setFinalCtaTitle(data.finalCtaTitle || "");
      setFinalCtaDescription(data.finalCtaDescription || "");
      setCtaSection(
        data.ctaSection || {
          title: "",
          description: "",
          buttonText: "",
          buttonLink: "",
        }
      );
    } catch (error) {
      console.error("Error fetching content:", error);
    }
  };

  // Save functions for each section
  const saveWelcomeMessage = async () => {
    try {
      await fetch(`${BASE_URL}/api/homecontent/welcome`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ welcomeMessage }),
      });
    } catch (error) {
      console.error("Error saving welcome message:", error);
    }
  };

  const savePlatformTitle = async () => {
    try {
      await fetch(`${BASE_URL}/api/homecontent/platformtitle`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ platformTitle }),
      });
    } catch (error) {
      console.error("Error saving platform title:", error);
    }
  };

  const saveHeroCta = async () => {
    try {
      await fetch(`${BASE_URL}/api/homecontent/herocta`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ heroCtaText, heroCtaLink }),
      });
    } catch (error) {
      console.error("Error saving hero CTA:", error);
    }
  };

  const saveFeature = async (feature) => {
    try {
      await fetch(`${BASE_URL}/api/homecontent/features`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feature),
      });
    } catch (error) {
      console.error("Error saving feature:", error);
    }
  };

  const saveFinalCta = async () => {
    try {
      await fetch(`${BASE_URL}/api/homecontent/finalcta`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ finalCtaTitle, finalCtaDescription }),
      });
    } catch (error) {
      console.error("Error saving final CTA:", error);
    }
  };

  const saveCtaSection = async () => {
    try {
      await fetch(`${BASE_URL}/api/homecontent/cta`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ctaSection),
      });
    } catch (error) {
      console.error("Error saving CTA section:", error);
    }
  };

  // Add new feature
  const addFeature = () => {
    setFeatures([
      ...features,
      {
        title: "",
        description: "",
        iconName: "",
        iconColor: "",
        isActive: true,
      },
    ]);
  };

  // Remove feature
  const removeFeature = async (index) => {
    const feature = features[index];
    if (feature.id) {
      try {
        await fetch(
          `${BASE_URL}/api/homecontent/features/${feature.id}`,
          {
            method: "DELETE",
          }
        );
      } catch (error) {
        console.error("Error deleting feature:", error);
        return;
      }
    }
    const updatedFeatures = features.filter((_, i) => i !== index);
    setFeatures(updatedFeatures);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link
        to="/"
        className="text-sm font-bold text-purple hover:bg-purple-700"
      >
        Home
      </Link>
      <h1 className="text-3xl font-bold mb-8">Content Management</h1>

      {/* Platform Title Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {" "}
          Welcome to Our Platform? <br />
          (Title)
        </h2>
        <div className="flex gap-4">
          <input
            className="flex-1 p-2 border rounded"
            value={platformTitle}
            onChange={(e) => setPlatformTitle(e.target.value)}
            placeholder="Platform Title"
          />
          <button
            onClick={savePlatformTitle}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            <Save className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Welcome Message Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Welcome Message</h2>
        <div className="flex gap-4">
          <textarea
            className="flex-1 p-2 border rounded"
            value={welcomeMessage}
            onChange={(e) => setWelcomeMessage(e.target.value)}
            rows="3"
          />
          <button
            onClick={saveWelcomeMessage}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            <Save className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Hero CTA Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Hero CTA</h2>
        <div className="p-4 border rounded">
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Button Text</h3>
            <input
              className="w-full p-2 border rounded"
              value={heroCtaText}
              onChange={(e) => setHeroCtaText(e.target.value)}
              placeholder="CTA Button Text"
            />
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Button Link</h3>
            <input
              className="w-full p-2 border rounded"
              value={heroCtaLink}
              onChange={(e) => setHeroCtaLink(e.target.value)}
              placeholder="CTA Button Link"
            />
          </div>
          <button
            onClick={saveHeroCta}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Save Hero CTA
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Features</h2>
        {features.map((feature, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Title</h3>
              <input
                className="w-full p-2 border rounded"
                value={feature.title}
                onChange={(e) => {
                  const newFeatures = [...features];
                  newFeatures[index].title = e.target.value;
                  setFeatures(newFeatures);
                }}
                placeholder="Feature Title"
              />
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Description</h3>
              <textarea
                className="w-full p-2 border rounded"
                value={feature.description}
                onChange={(e) => {
                  const newFeatures = [...features];
                  newFeatures[index].description = e.target.value;
                  setFeatures(newFeatures);
                }}
                placeholder="Feature Description"
                rows="2"
              />
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Icon Name</h3>
              <input
                className="w-full p-2 border rounded"
                value={feature.iconName}
                onChange={(e) => {
                  const newFeatures = [...features];
                  newFeatures[index].iconName = e.target.value;
                  setFeatures(newFeatures);
                }}
                placeholder="Icon Name"
              />
            </div>
            <div className="flex gap-4 justify-between">
              <button
                onClick={() => saveFeature(feature)}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Save Feature
              </button>
              <button
                onClick={() => removeFeature(index)}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                <Trash className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={addFeature}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Add Feature
        </button>
      </div>

      {/* Final CTA Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Ready to Get Started?</h2>
        <div className="p-4 border rounded">
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Title</h3>
            <input
              className="w-full p-2 border rounded"
              value={finalCtaTitle}
              onChange={(e) => setFinalCtaTitle(e.target.value)}
              placeholder="Final CTA Title"
            />
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Description</h3>
            <textarea
              className="w-full p-2 border rounded"
              value={finalCtaDescription}
              onChange={(e) => setFinalCtaDescription(e.target.value)}
              placeholder="Final CTA Description"
              rows="2"
            />
          </div>
          <button
            onClick={saveFinalCta}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
