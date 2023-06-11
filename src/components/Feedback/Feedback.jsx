import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
// import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";

const Feedback = () => {
  const feedbackClass = useLoaderData();
  const [text, setText] = useState("");
  const maxWords = 5; // Set your desired word limit here

  //   const { register, handleSubmit } = useForm();

  // console.log(feedbackClass);

  const handleFeedback = (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
    const feedbackText = {
      feedback,
    };
    console.log(feedback);
    fetch(`http://localhost:5000/classFeedback/${feedbackClass._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(feedbackText),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class Updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(data);
      });
  };

  const handleChange = (event) => {
    const { value } = event.target;
    const words = value.trim().split(" ");
    if (words.length <= maxWords) {
      setText(value);
    }
  };
  return (
    <>
      <Helmet>
        <title>MyDraw | Send Feedback</title>
      </Helmet>
      <div>
        <Fade direction="up">
          <SectionTitle
            subTitle="Your desire feedback"
            title="Feedback"
          ></SectionTitle>
        </Fade>
      </div>
      <div className="w-1/3 ">
        <form onSubmit={handleFeedback} action="">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Feedback (maximum 5 word)</span>
            </label>
            <textarea
              value={text}
              name="feedback"
              onChange={handleChange}
              className="textarea textarea-bordered md:h-24"
              placeholder="Your Feedback"
            ></textarea>
            <p>
              {text.trim().split(" ").length}/{maxWords} words
            </p>
          </div>
          <div className="mt-5 ">
            <input
              type="submit"
              value="Send feedback"
              className="main-btn w-full"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Feedback;
