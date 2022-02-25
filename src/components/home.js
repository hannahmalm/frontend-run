import React from "react";
import RunsContainer from "../containers/RunsContainer";
import {Route, Link} from 'react-router-dom'
import Header from "./Header";

const Home = () => {
    return(
        <div>

<Link to='/runs'>All Run Logs</Link>
        {/* <h2><Route exact path='/runs' component={RunsContainer}/></h2> */}
          <h2> What is run training?</h2>
          <p>achieving a well-rounded running performance background also requires variation;there’s no one workout that’ll help you improve every aspect of your running performance. That’s why there are plenty of workout options to choose from; the key is to make sure that you understand what each type of workout offers and how you can best leverage it for your running training and goals…</p>
          <br></br>
        <h1>Fartlek</h1>
        <p>The term is Swedish for “speed play”. Fartleks give you the chance to improve your body’s aerobic endurance without having to adhere to specific timing or pacing. While there’s nothing wrong with giving your workouts some structure (as you’ll read below), many runners could benefit from removing the underlying stress of hitting a specific time or distance. You can instead focus solely on developing aerobic capacity and efficiency without any distraction.</p>
        <br></br>
        <h1>Intervals</h1>
        <p>Running at higher intensities and faster speeds gives your body more opportunity to train its anaerobic system, which is ultimately what supplies energy to your muscles when your aerobic system can’t supply oxygen to your body at a fast enough rate… but running anaerobically can get to be too much if you have to keep up that pace for long.</p>
        <br></br>
        <h1>Tempo Runs</h1>
        <p> Tempo runs were specifically designed for clearing the excess lactate from your bloodstream; they essentially push you to run fast enough for your body to produce and utilize lactate at a consistent rate, thus keeping your lactate levels steady throughout your workout.</p>
        <br></br>
        <h1>Long Distance</h1>
        <p></p>
        <br></br>


        </div>
    )
}


export default Home;