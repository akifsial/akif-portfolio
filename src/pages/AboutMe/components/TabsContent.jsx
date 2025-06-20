const TabContent = ({ tabName }) => {
  const tabData = {
    experience: "Developed a role-based system with Super Admin, Company Admin,\n Sales Manager, and Sales Rep roles using React.js, TypeScript, Tailwind CSS.\nImplemented real-time chat, permission controls, and dynamic dashboards.\nDesigned a car wash service platform with multi-role access\n (Admin, Franchise, Detailer) featuring responsive UI and seamless API integrations.\nBuilt a hospital management system using React.js, TypeScript, and Context API,\n optimized with memoization and code-splitting for performance.\n",
    "hard-skills": "HTML5, CSS3, JavaScript\React.js, TypeScript\n Tailwind CSS\n RESTful API Integration\n TanStack Query (React Query)\n Context API\n Component-Driven Architecture\n Git & GitHub\n Figma to Code Conversion\n Performance Optimization (Memoization, Code-splitting)\n Responsive UI Design\n",
    "soft-skills": "Problem Solving\n Communication\n Attention to Detail\n Time Management\n Team Collaboration\n Adaptability\n Client Communication & Feedback Handling\n Self-Learning & Growth Mindset\n",
    bio: "This is bio content.",
    interests: "This is interests content.",
    education: "This is education content.",
    "high-school": "This is high school content.",
    university: "This is university content.",
    sports: "This is sports content.",
    "favorite-games": "This is favorite games content.",
    "user@gmail.com": "contact.akifsial@gmail.com",
    "Contact": "03019050165",
  };

  const content = tabData[tabName];
  const lines = content.split("\n");

  return (
    <div
    className="text-section w-[100%] lg:py-[16px] lg:pl-[16px] lg:pr-[8px] py-[16px] pl-[0px] pr-[8px] "
      style={{
        color: "white",
        display: "flex",
        maxHeight: "100vh",
        overflowY: "auto",
        height:"100%",
      }}
    >
        <div className="text-gray-500 text-right pr-4">
          {lines.map((key, index) => (
            <p key={index}>{index + 1}</p>
          ))}
        </div>

        <div className="text-gray-300">
          {lines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
  );
};

export default TabContent;
