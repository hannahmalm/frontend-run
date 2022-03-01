import React from "react";
import RunsContainer from "../containers/RunsContainer";
import {Route, Link} from 'react-router-dom'
import Header from "./Header";

const Home = () => {
    return(
  <div class="px-4 py-5 my-5 text-center">
      <h1 class="display-5 fw-bold">What is Run Training?</h1>
      <div class="col-lg-6 mx-auto">
      <p class="lead mb-4"> Acheiving a well-rounded running performance background also requires variation;there’s no one workout that’ll help you improve every aspect of your running performance. That’s why there are plenty of workout options to choose from; the key is to make sure that you understand what each type of workout offers and how you can best leverage it for your running training and goals…</p>
      <p class="lead mb-4"><b>To learn more about the beneifts of running click <Link to='/benefits'>here</Link></b></p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      </div>
      </div>



        <div className="card" >
          <iframe width="900" height="500" src="https://www.youtube.com/embed/Z3crT2UBeJE" title="Fartlek Video Overview" center></iframe>
                <div className="card-body">
                    <h2 className="card-title">Fartlek</h2>
                    <p className="card-text">The term is Swedish for “speed play”. Fartleks give you the chance to improve your body’s aerobic endurance without having to adhere to specific timing or pacing. While there’s nothing wrong with giving your workouts some structure (as you’ll read below), many runners could benefit from removing the underlying stress of hitting a specific time or distance. You can instead focus solely on developing aerobic capacity and efficiency without any distraction.</p>
                </div>
        </div>

        <br></br>
        <br></br>

        <div className="card" >
          <iframe width="560" height="315" src="https://www.youtube.com/embed/HFUz5qazxn0" title="Interval Video Overview"></iframe>
                <div className="card-body">
                    <h2 className="card-title">Interval</h2>
                    <p className="card-text">Interval workouts consist of repeated shorter segments of fast running separated by slow jogging or standing recoveries. This format enables a runner to pack more fast running into a single workout than he or she could with a single prolonged fast effort to exhaustion.

</p>
                </div>
        </div>

        <br></br>
        <br></br>

        <div className="card" >
          <iframe width="560" height="315" src="https://www.youtube.com/embed/k5vqiyry2z8" title="Tempo Video Overview"></iframe>
                <div className="card-body">
                    <h2 className="card-title">Tempo</h2>
                    <p className="card-text">A tempo run is a sustained effort at lactate threshold intensity, which is the fastest pace that can be sustained for one hour in highly fit runners and the fastest pace that can be sustained for 20 minutes in less fit runners. Tempo or threshold runs serve to increase the speed you can sustain for a prolonged period of time and to increase the time you can sustain that relatively fast pace. </p>
                </div>
        </div>

        <br></br>
        <br></br>

        <div className="card" >
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jmyLSQ0REmo" title="Long Distance Video Overview"></iframe>
                <div className="card-body">
                    <h2 className="card-title">Long Distance</h2>
                    <p className="card-text">  Generally, a long run is a base run that lasts long enough to leave a runner moderately to severely fatigued. The function of a long run is to increase raw endurance. The distance or duration required to achieve this effect depends, of course, on your current level of endurance. As a general rule, your longest run should be long enough to give you confidence that raw endurance will not limit you in races. </p>
                </div>
        </div>

        <br></br>
        <br></br>

        <div className="card" >
          <iframe width="560" height="315" src="https://www.youtube.com/embed/6OwwCVSeN8o" title="Hill Repeats Video Overview"></iframe>
                <div className="card-body">
                    <h2 className="card-title">Hill Repeats</h2>
                    <p className="card-text"> Uphill intervals’ intensity improves what’s called your lactate threshold. That means your body produces less muscle-burning lactic acid at the same swift paces. </p>
                </div>
        </div>

        <br></br>
        <br></br>

        </div>
    )
}


export default Home;