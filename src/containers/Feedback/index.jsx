import React, { useState, useEffect } from "react";
import "./styles.scss";
import api from "../../utils.js/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUserCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Myfeedback = () => {
  const [formData, setFormData] = useState({ name: "", email: "", feedback: "" });
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const response = await api.get("/feedbacks");
      setFeedbackList(response.data);
    } catch (error) {
      console.error("Gagal mengambil feedback:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/feedbacks/update", formData);
      toast.success("Feedback berhasil dikirim!", { position: "top-right", autoClose: 3000 });
      setFormData({ name: "", email: "", feedback: "" });
      fetchFeedback();
    } catch (error) {
      toast.error("Gagal mengirim feedback. Coba lagi!", { position: "top-right", autoClose: 3000 });
    }
  };

  return (
      <div className="container">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Share Your Feedback</h2>
          <p>Silakan isi formulir ini untuk saran dan kritik terhadap saya.</p>
        </div>
        <div className="contact-right">
          <form onSubmit={handleSubmit} className="contact-form">
            <table>
              <tbody>
                <tr>
                  <td><label htmlFor="name">Nama:</label></td>
                  <td><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Nama antum" /></td>
                </tr>
                <tr>
                  <td><label htmlFor="email">Email:</label></td>
                  <td><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Emailnya dong ka" /></td>
                </tr>
                <tr>
                  <td><label htmlFor="feedback">Saran/Kritik:</label></td>
                  <td><textarea id="feedback" name="feedback" value={formData.feedback} onChange={handleChange} required placeholder="Kuy isi aja slow.." /></td>
                </tr>
              </tbody>
            </table>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Slider Feedback */}
      <div className="feedback-section">
        <h1>Feedback Terbaru</h1>
        {feedbackList.length === 0 ? (
          <p className="no-feedback">Belum ada feedback.</p>
        ) : (
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="feedback-slider"
          >
            {feedbackList.map((item, index) => (
              <SwiperSlide key={index} className="feedback-card">
                <FaUserCircle className="feedback-icon" />
                <div className="feedback-content">
                  <h3>{item.name}</h3>
                  <p>{item.feedback}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      </div>
  );
};

export default Myfeedback;
