import gym from "../assets/gym.jpg"
import workoutsformen from "../assets/workoutsformen.jpg"
import workoutsforwomen from "../assets/workoutsforwomen.jpg"
import MuscleBuilding from "../assets/MuscleBuilding.jpg"
import FatLoss from "../assets/FatLoss.jpg"
import IncreaseStrength from "../assets/IncreaseStrength.jpg"
import AbsWorkouts from "../assets/AbsWorkouts.jpg"
import fullbody from "../assets/fullbody.jpg"
import AtHome from "../assets/AtHome.jpg"
import Cardio from "../assets/Cardio.jpg"
import ChestWorkouts from "../assets/ChestWorkouts.jpg"
import LegWorkouts from "../assets/LegWorkouts.jpg"
import BicepWorkouts from "../assets/BicepWorkouts.jpg"
import Navbar from "../components/Navbar"


import "../styles/Home.css"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <>
              <Navbar />
            <div className="container">

                <div className="imageWrapper">
                    <img src={gym} alt="image" className="gymImage" />
                    <h1 className="thoughts">MAKE <span style={{ color: "red" }}>YOUR </span> <br /> DAY SPECIAL <br /> ANYTIME</h1>
                </div>

                <div className="view-container">
                    <div>
                        <h1> 1000+</h1>
                        <p> WORKOUTS </p>
                    </div>
                    <div>
                        <h1> 390M </h1>
                        <p> DOWNLOADS </p>
                    </div>
                    <div>
                        <h1> 120+ </h1>
                        <p> CONTRIBUTORS </p>
                    </div>
                </div>
                <div>
                    <div className="card-content">
                        <h1 >WORKOUT CATEGORIES </h1><br />
                        <p>Choose a category that best suits the workout you're searching for.
                            Once in the category, use the sort <br /> and filter options to find the right
                            workout for your experience and goals.</p>
                    </div>
                    <div className="card">
                        <a href="https://youtu.be/_NhuJDuHNZY?si=oSTYlYi31d-ZzRbt"><img src={workoutsformen} alt="workoutsformen" />
                            <div>
                                <h3> Workouts For Men </h3>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://youtu.be/Oj4hy_kj-C0?si=pZQ7PhUNo25RSdwe"> <img src={workoutsforwomen} alt="workoutsforwomen" />
                            <div>
                                <h3>Workouts For Women </h3>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://youtu.be/hLeWA0atDZE?si=toc90HAYY9WsQUHx"><img src={MuscleBuilding} alt="Muscle Building" />
                            <div>
                                <h3> Muscle Building </h3>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://youtu.be/PeWMZy48-7c?si=fULPLZWtU5Sw5VMX"> <img src={FatLoss} alt="FatLoss" />
                            <div>
                                <h3>Fat Loss </h3>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://youtu.be/T_zU_5SXhiQ?si=mDwp5waDR4eAOvsx"> <img src={IncreaseStrength} alt="IncreaseStrength" />
                            <div>
                                <h3>Increase Strength </h3>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://youtu.be/dxjWy_jJDuY?si=oQgabtRKAc53hZaE"> <img src={AbsWorkouts} alt="AbsWorkouts" />
                            <div>
                                <h3>Abs Workouts </h3>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://youtu.be/ImI63BUUPwU?si=T9AoojC7auhwT13b"> <img src={Cardio} alt="Cardio" />
                            <div>
                                <h3>Cardio</h3>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://youtu.be/Mbtl6QxQFtw?si=deIegWL8KWx4lDM4"> <img src={AtHome} alt="AtHome" />
                            <div>
                                <h3>At Home </h3>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://youtu.be/B12MXF0bSFo?si=WVTW0AY7udxm1Gkn"> <img src={fullbody} alt="fullbody" />
                            <div>
                                <h3>Fullbody </h3>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://youtube.com/shorts/zfHbug6sm4s?si=A_uCdLKP-edg_aZu"> <img src={ChestWorkouts} alt="ChestWorkouts" />
                            <div>
                                <h3>Chest Workouts</h3>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://youtu.be/H6mRkx1x77k?si=1b0cYkCOY0XJy_Aj"> <img src={LegWorkouts} alt="LegWorkouts" />
                            <div>
                                <h3>Leg Workouts</h3>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://youtu.be/i1YgFZB6alI?si=hxqNhw-K-P4ch2UF"> <img src={BicepWorkouts} alt="BicepWorkouts" />
                            <div>
                                <h3>Bicep Workout</h3>
                            </div>
                        </a>
                    </div>
                    <hr /><br />
                    <h1 style={{ color: " #005599", textAlign: "center" }}>WORKOUT TIPS & ADVICE</h1>
                    <div className="desc" >
                        <h1>Workouts F.A.Q.</h1>
                        <h4>1. What is the best routine for the gym?</h4><br />
                        <p>The best routine for the gym is one that is flexible with your schedule and you actually enjoy. These two factors will contribute greatly to your ability to be consistent with your workouts. Consistency with your workouts and progressing as you perform them is what will lead to results.</p>

                        <br /> <p> That being said, there are plenty of great workout program styles one can do to build muscle, lose fat, or build strength. The body composition goals (building muscle and losing fat) will be accomplished through similar style workouts combined with differing nutritional principles, while those looking for strength gains may need to focus on programs that are centered on the idea of specificity.</p>

                        <br /> <p>To sum that statement up, if you want to change your body composition, you’ll want to train with volume. If you want to build strength, you’ll want a program that is strength specific for the lifts you want to improve such as the bench press, squat and deadlift.</p>
                        <br /><h4>2. What body parts to work on what days?</h4>
                        <br /> <p>The answer to this question would assume that the person asking is referring to body part splits. In this case, the way you split your days likely won’t matter too much, as long as you work every body part throughout the week.</p>
                        <br /> <p>There may be some benefit into ensuring you don’t hit chest and shoulders or legs and back on consecutive days, but if you do, it probably won’t be that big of an issue depending on your overall strength levels.</p>
                        <br /> <p>However, if you are looking to optimize your training by incorporating a higher training frequency (hitting each muscle group more often throughout the week), you may want to look into pairing certain muscle groups on certain workout days.</p>
                        <br /><h4>3. What should a beginner do at the gym?</h4>
                        <br /> <p>The best thing a beginner can do at the gym is seek out the help of a trained professional to assist them with learning the proper form of each exercise. Practicing the basics and establishing a solid foundation in terms of form will help a beginner lifter remain injury free throughout their life.</p>
                        <br /> <p>With the exercise recordings, compare your form with examples of proper form. Evaluate how you are moving and progress from there by either working on your form, or after you’ve mastered your form, adding weight.</p>
                        <br /><h4>4. What is the best workout routine for beginners?</h4>
                        <br /><p>The best workout routine for true beginners is rather subjective to what the beginner is comfortable doing and their understanding of how to perform exercises.</p>
                        <br /><p>Generally speaking though, beginners can start off performing anywhere between 2-4 workouts per week. These workouts can be either full body workouts or upper/lower workouts.</p>
                        <br /><p>The workouts should focus on learning ideal movement patterns of fundamental lifts such as horizontal presses, vertical presses, horizontal pulls, vertical pulls, squats, hip hinges, and loaded carries.</p>
                        <br /><h4>5. How do I schedule my workout at the gym?</h4>
                        <br /><p>This all boils down to setting up and selecting workout programs that are both flexible and enjoyable. There is no perfect one way to set up training. It’s very subjective from person to person.</p>
                        <br /><p>If you only have 2 days where you’re able to make it to the gym, a full body workout makes sense. 3 days? Full body makes sense, push/pull/legs can work as well if that is what you enjoy. The more days you have available, the more split and scheduling options you’ll have.</p>
                        <br /> <p>Start off by figuring out how many and what days you can make it to the gym regularly. Then, look to schedule your training on those days. Find a workout that doesn’t require any more than that total training frequency. Then, look for something where if you miss a training day, you’re able to make it up throughout the week or already train that muscle more than once per week.</p><br />
                        <h4>6. What is a good gym routine?</h4> <br />
                        <br /><p>A good gym routine is one that you enjoy, works your muscles with the appropriate frequency and volume for your experience level, and that you can be consistent with.</p>
                        <p>This can look very different from person to person.</p> <br />
                        <p>Exercise selection for a good gym routine will train fundamental movement patterns (push, pull, lunge, hip hinge, squat, and carry) in a way that you are comfortable performing them. There is a pain-free variation for nearly every body type who can healthily perform these movements.</p><br />

                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}