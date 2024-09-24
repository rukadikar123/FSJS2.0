import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState("");
  const [comp, setComp] = useState("");
  const [result, setResult] = useState("Make Your Move ");
  const [userScore, setUserScore]=useState(0)
  const [compScore, setCompScore]=useState(0)
  const [attempt,setAttempt]=useState(0)
  const [gameOver, setGameOver]=useState(false)

  const choice = ["Rock", "Paper", "Scissors"];
  const handleChoose = (item) => {
    let random = choice[Math.floor(Math.random() * 3)];
    setComp(random);
    setUser(item);
    setAttempt(attempt+1)
  };
  useEffect(()=>{
    if(attempt>=10){
      setGameOver(true)
      setUser("")
      setComp("")
      setResult("")
    }
  },[attempt])
  useEffect(() => {
 
    if (user !== "" && comp !== "" && !gameOver) {
      if (user === comp) {
        setResult("Tie");
      } else if (
        (user === "Rock" && comp === "Scissors") ||
        (user === "Scissors" && comp === "Paper") ||
        (user === "Paper" && comp === "Rock")
      ) {
        setResult("You won!");
        setUserScore(userScore +1)
      } else {
        setResult("Computer won!");
        setCompScore(compScore+1)
      }
    
   }
  }, [comp, user, gameOver]);

  return (
    <>
   <div className="h-screen bg-blue-300">
   <p className="text-center text-xl pt-10">User: {user}</p>
    <p className="text-center text-xl">Computer: {comp}</p>
      <h2 className="text-center text-3xl mt-[80px]">{result}</h2>
      <div className="flex items-center gap-10 justify-center mt-[80px]">
        {choice.map((item, i) => (
          <button
            className="text-2xl rounded-lg bg-zinc-300 px-4 py-2"
            key={i}
            onClick={() => handleChoose(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="text-center text-xl pt-10">
        {
          gameOver && <p>Game Over!</p>
        }
      </div>
      <p className="text-center text-xl pt-10">Your score: {userScore}</p>
      <p className="text-center text-xl pt-10">Computer score: {compScore}</p>
   </div>
    </>
  );
}

export default App;
