import React from "react";
import {Link} from 'react-router-dom'
//Stateless - Presentational
import Footer from "./Footer";

const Home = () => {
    return(
  <div class="px-4 py-5 my-5 text-center">
      <h1 class="display-5 fw-bold">What is Run Training?</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4"> Acheiving a well-rounded running performance background also requires variation. There’s no one workout that’ll help you improve every aspect of your running performance. That’s why there are plenty of workout options to choose from. The key is to make sure that you understand what each type of workout offers and how you can best leverage it for your running training and goals…</p>
        <p class="lead mb-4"><b>To learn more about the beneifts of running click <Link to='/benefits'>here</Link></b></p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      </div>
      </div>
      
      <div className="card" >
          <iframe width="900" height="500" src="https://www.youtube.com/embed/l30qAJwP_AA" title="Run Type Video Overview" center></iframe>
                <div className="card-body">
                    <h2 className="card-title">Run Training Types</h2>
                    <p className="lead mb-4">Different types of running exercises can help differentiate your training goals and increase performace. </p>
                    <p className="lead mb-4">This video demonstrates the basics of each run and the differences between the categories.</p>
                </div>
        </div>
{/* 
        <div className="card" >
          <iframe width="900" height="500" src="https://www.youtube.com/embed/Z3crT2UBeJE" title="Fartlek Video Overview" center></iframe>
                <div className="card-body">
                    <h2 className="card-title">Run Training Types</h2>
                    <p className="card-text">The term is Swedish for “speed play”. Fartleks give you the chance to improve your body’s aerobic endurance without having to adhere to specific timing or pacing. While there’s nothing wrong with giving your workouts some structure (as you’ll read below), many runners could benefit from removing the underlying stress of hitting a specific time or distance. You can instead focus solely on developing aerobic capacity and efficiency without any distraction.</p>
                </div>
        </div>

        <br></br>
        <br></br> */}

    

        </div>
    )
}


export default Home;