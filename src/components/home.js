import React from "react";
import RunsContainer from "../containers/RunsContainer";
import {Route, Link} from 'react-router-dom'
import Header from "./Header";

const Home = () => {
    return(
        <div>
            <Header></Header>

          <h1> What is run training?</h1>
          <p>Acheiving a well-rounded running performance background also requires variation;there’s no one workout that’ll help you improve every aspect of your running performance. That’s why there are plenty of workout options to choose from; the key is to make sure that you understand what each type of workout offers and how you can best leverage it for your running training and goals…</p>
          <br></br>
          <br></br>
        <div className="card" >
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Z3crT2UBeJE" title="Fartlek Video Overview"></iframe>
                <div className="card-body">
                    <h2 className="card-title">Fartlek</h2>
                    <p className="card-text">The term is Swedish for “speed play”. Fartleks give you the chance to improve your body’s aerobic endurance without having to adhere to specific timing or pacing. While there’s nothing wrong with giving your workouts some structure (as you’ll read below), many runners could benefit from removing the underlying stress of hitting a specific time or distance. You can instead focus solely on developing aerobic capacity and efficiency without any distraction.</p>
                </div>
        </div>

        <br></br>
        <br></br>









        </div>
    )
}


export default Home;