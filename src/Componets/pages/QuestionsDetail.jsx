import {
  AccountBox,
  ArrowDropDown,
  ArrowDropUp,
  Bookmark,
  Restore,
} from "@mui/icons-material";
import { ThumbDown, ThumbUp } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../../features/userSclies";
import { BASE_URL } from "../Help/help";

function QuestionsDetail() {
  const [questionData, setQuestionData] = useState();
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);
  const [answerData, setanswerDAta] = useState([]);
  const user = useSelector(selectUser);
  const [ans, setAns] = useState({
    answer: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;

    setAns((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("q");

  const update = () => {
    let a = document.getElementById("point");
    a.addEventListener("click", () => {});
  };

  //This is for sending the answer and retrieving the answer
  //  sending

  const submitAns = async (e) => {
    e.preventDefault();
  
    try {
      if (ans.answer === "") {
        // Display a message to the user on the page
        alert("Fill the empty fields");
      } else {
        const bodyJson = {
          answer: ans.answer,
          user: user,
        };
  
        await axios.post(`${BASE_URL}/api/answer/${id}`, bodyJson);
        
  
        // Reset the form or update the UI as needed
        setAns({ answer: "" });
        // Display a success message to the user on the page
        alert("Answer added successfully");
      }
    } catch (error) {
      console.error(error);
  
      // Display an error message to the user on the page
      alert("Error in adding answer");
    }
  };
  

  //    retriving the data

  //   this is for retriving the data
  useEffect(() => {
    async function GetQuestionDetails() {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/question/${id}`
        );
        setQuestionData(response.data);
        setUpvotes(response.data.upvotes.length);
        setDownvotes(response.data.downvotes.length);
      } catch (err) {
        console.error("Error fetching question details:", err);
      }
    }

    GetQuestionDetails();
  }, [id]);

  //   answer
 

 useEffect(() => {
  async function getAnswers() {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/answer/${id}`
      );

      setanswerDAta(response.data.answers.answers);
      console.log(answerData,"this is answer data ") // Use response.data.answers or set to an empty array if undefined
    } catch (error) {
      console.error('Error fetching answers:', error);
    }
  }

  getAnswers();
}, [id]);
  

  const handleUpvote = async () => {
    try {
      await axios.post(`${BASE_URL}/api/question/${id}/upvote`, {
        user,
      });
      // Update state or UI as needed
    } catch (error) {
      console.error("Error upvoting:", error);
    }
  };

  const handleDownvote = async () => {
    try {
      await axios.post(`${BASE_URL}/api/question/${id}/downvote`, {
        user,
      });
      // Update state or UI as needed
    } catch (error) {
      console.error("Error downvoting:", error);
    }
  };
  let a=questionData?.user?.email;
  return (
    <>
      <h1 className="flex text-center text-3xl  ml-10 justify-center mb-8">
        {questionData?.title}
      </h1>
      <Link
        to="/Askquestions"
        className="sm:hidden  bg-blue-400 p-2 rounded-md text-white hover:bg-blue-600 ml-56  my-6 "
      >
        <button>Ask Question</button>
      </Link>
      <div className="detail flex flex-wrap justify-center mt-3">
        <p>
          Asked <b>{new Date(questionData?.created_at).toLocaleString()} </b>{" "}
          &nbsp;{" "}
        </p>{" "}
      
      </div>

      <div className="Question-detail-cont   ">
        <p className="  text-center mt-9 ml-16 -mb-24">{questionData?.body}</p>

        <div className="votes inline-block ">
          <p>
            <ThumbUp
              className="m-4 hover:text-blue-300 text-blue-500"
              onClick={handleUpvote}
            />
            {upvotes}
          </p>
          <p>
            <ThumbDown
              className="m-4 hover:text-blue-300 text-blue-500"
              onClick={handleDownvote}
            />
            {downvotes}
          </p>
          <div className="imp-ico">
            <Bookmark className="text-slate-400 ml-3 mt-2" />
            <br />
            <Restore className="text-slate-400 ml-3 mt-2" />
          </div>
        </div>

        <div className="float-right mt-3">
          <p>
            Asked <b>{new Date(questionData?.created_at).toLocaleString()}</b>
          </p>
          <p>
            <AccountBox />
            {questionData?.user?.email}
          </p>
        </div>
        <hr />
      </div>
      <br />
      <div className="ask-question mt-20 ">
        <h1 className="text-center">
          Question is edited{" "}
          {new Date(questionData?.created_at).toLocaleString()}{" "}
        </h1>

        <div className="comments mt-5  h-4/5">
          <p className="text-black-500 text-2xl cursor-pointer  ">Add a comment</p>
          <div className="hide flex justify-start" id="comment">
            <textarea
              name="answer"
              onChange={InputEvent}
              placeholder="Add Your Comment here.."
              cols="30"
              rows="10"
              className="w-1/2  border-2 rounded-lg border-black justify-center "
            ></textarea>
          </div>
            <button
              className="bg-blue-500 rounded-xl  p-2 text-white hover:bg-blue-700 cursor-pointer"
              type="submit"
              onClick={submitAns}
            >
              Add Comment
            </button>
        </div>
        <br />
        <hr />
      </div>
      <div className="ans ">
        <h1 className="text-3xl">Answer Are below</h1> <br />
   
   
          {


  answerData.map((answer) => (
    <div key={answer?._id}>
      <div className="ans-content">
        <div className="votes inline-block">
          <div
            onClick={update}
            id="point"
            className="flex p-1 mt-2 bg-slate-200 hover:bg-slate-500 rounded-full inline-block"
          >
            <ArrowDropUp className="rounded-full" style={{ fontSize: "45px" }} />
          </div>
          <div className="rounded-full bg-slate-200 hover:bg-slate-500 flex p-1 mt-2 inline-block">
            <ArrowDropDown className="rounded-full" style={{ fontSize: "45px" }} />
          </div>
        </div>

        <p className="text-left mb-10 -mt-16 ml-20">Answer: {answer?.answer}</p>
        <p>Asked by: {answer.user?.email} user</p>

        <hr />
      </div>
      <p className="float-right">
        <span className="text-slate-500">
          {new Date(answer?.created_at).toLocaleString()}
        </span>
      </p>
    </div>
  ))
}  
      
      {}
    </div>
    </>
  );
}

export default QuestionsDetail;
