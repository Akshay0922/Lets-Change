import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./BackBtn.css";

export const BackBtn = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      className="back-btn"
      onClick={handleBack}
    >
      <FaArrowLeft className="back-btn-icon" />
      Back
    </button>
  );
};