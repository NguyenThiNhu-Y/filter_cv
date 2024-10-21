import { CiFolderOn } from "react-icons/ci";
import { MdFileDownload } from "react-icons/md";
import { MdFileUpload } from "react-icons/md";
import Filter from "./Filter";

interface MainContentProps {
  selectedFolder: string | null; // nullable string for no folder selected
}

const MainContent: React.FC<MainContentProps> = ({ selectedFolder }) => {
  if (!selectedFolder) {
    return (
      <div className="flex-1 flex flex-col justify-center items-center bg-blue-50 h-screen">
        <img
          src="empty.png" // Placeholder for empty image
          alt="Illustration"
          width={200}
          height={200}
        />
        <p className="mt-4 text-lg text-center">
          Bạn hãy chọn 1 thư mục nào đó!
        </p>
      </div>
    );
  }

  // Dummy CVs based on folder selection
  const cvs = [
    {
      name: "Nguyễn Tiến An",
      title: "Developer",
      thumbnail: "first_page.png",
    },
    {
      name: "Trần Văn An",
      title: "BA",
      thumbnail: "first_page.png",
    },
    {
      name: "Nguyễn Quang Liêm",
      title: "Front-End Intern",
      thumbnail: "first_page.png",
    },
    {
      name: "Phạm Thị Lan",
      title: "Data Analyst",
      thumbnail: "first_page.png",
    },
    {
      name: "Hoàng Minh Quân",
      title: "Full Stack Developer",
      thumbnail: "first_page.png",
    },
    {
      name: "Lê Thị Hương",
      title: "Product Manager",
      thumbnail: "first_page.png",
    },
    {
      name: "Đỗ Văn Tuấn",
      title: "Back-End Developer",
      thumbnail: "first_page.png",
    },
    {
      name: "Vũ Thị Phương",
      title: "UI/UX Designer",
      thumbnail: "first_page.png",
    },
    {
      name: "Trần Minh Tâm",
      title: "Software Tester",
      thumbnail: "first_page.png",
    },
    {
      name: "Ngô Văn Hải",
      title: "DevOps Engineer",
      thumbnail: "first_page.png",
    },
  ];

  return (
    <div className="flex w-[75%]">
      <div className="w-3/4 p-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex">
            <CiFolderOn size={24} className="mr-2" />
            <h6 className="text-xl font-bold">{selectedFolder}</h6>
          </div>
          <div className="flex">
            <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 mr-2 flex items-center">
              Crawl CV
              <MdFileDownload className="ml-2" />{" "}
            </button>
            <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center">
              Tải Lên
              <MdFileUpload className="ml-2" />{" "}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 h-[680px] overflow-y-auto custom-scrollbar">
          {cvs.map((cv, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-2 bg-white border rounded-lg shadow-md"
            >
              <img
                src={cv.thumbnail}
                alt={cv.name}
                className="h-auto rounded-md mb-4 w-[160px] h-[200px]"
              />
              <h3 className="text-lg font-semibold">{cv.name}</h3>
              <p className="text-gray-500">{cv.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Filter />
    </div>
  );
};

export default MainContent;
