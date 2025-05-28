const TabContent = ({ tabName }) => {
  const tabData = {
    experience: "This is experience content.\nIt \nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\nIt\ has multiple lines.\nEach line will be numbered.",
    "hard-skills": "This is hard-skills content.\nAdding line numbers dynamically.",
    "soft-skills": "This is soft-skills content.",
    bio: "This is bio content.",
    interests: "This is interests content.",
    education: "This is education content.",
    "high-school": "This is high school content.",
    university: "This is university content.",
    sports: "This is sports content.",
    "favorite-games": "This is favorite games content.",
    "user@gmail.com": "This is username content.",
    "+3598246359": "This is Number",
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
