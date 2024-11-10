"use client";

import { MdArrowBack } from "react-icons/md";
import { CVItem } from "../type/types";

interface CVDetailsProps {
  cv: CVItem;
  onBack: () => void;
}

const DetailedCV: React.FC<CVDetailsProps> = ({ cv, onBack }) => {
  return (
    <div className="flex w-full p-4">
      <div className="flex w-full p-4 rounded-lg shadow-lg">
        {/* Left section: CV image */}
        <div className="w-1/2 p-4 flex items-center justify-center">
          <img
            src={`data:image/jpeg;base64,${cv.resume_thumbnail_base64}`}
            alt={cv.full_name}
            className="w-2/3 rounded-lg shadow-md"
          />
        </div>

        {/* Right section: CV details */}
        <div className="w-1/2 p-4">
          <button
            onClick={onBack}
            className="flex items-center text-blue-500 mb-4"
          >
            <MdArrowBack size={24} className="mr-2" /> Quay Lại
          </button>
          <h2 className="text-3xl font-bold mb-2">{cv.full_name}</h2>
          <p className="text-xl text-gray-500 mb-4">{cv.job_title}</p>

          <div className="mb-4">
            <p className="text-sm">
              <strong>Email:</strong> {cv.email}
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> {cv.phone_number}
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Kỹ Năng</h3>
          <div className="flex flex-wrap">
            {cv.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm mr-2 mb-2"
              >
                {skill}
              </span>
            ))}
          </div>

          <br />
          <h3 className="text-xl font-semibold mb-2">Ngoại ngữ</h3>
          <p>Trống</p>

          <br />
          <h3 className="text-xl font-semibold mb-2">Thành tựu</h3>
          <p>Trống</p>

          <br />
          <h3 className="text-xl font-semibold mb-2">Chứng chỉ</h3>
          <p>Trống</p>

          <br />
          <h3 className="text-xl font-semibold mb-2">Liên kết</h3>
          <p>Trống</p>
        </div>
      </div>
    </div>
  );
};

export default DetailedCV;
