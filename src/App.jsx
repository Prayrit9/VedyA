import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, TextInput } from '@mantine/core'
import { Container } from '@mantine/core'
import FadeInSection from './fade'
import Fade from 'react-reveal/Fade';
import Demo from './animation'
import video from '/Users/prayrit/hack-o-octo/src/assets/bgvid1.mp4'
import SearchBar from './SearchBar';
import axios from 'axios'
import { MultiSelect } from '@mantine/core'

function App() {
  const [selection, setSelection] = useState([]);
  const [count, setCount] = useState(0)

  return (
    <>
    <video className='videoTag fixed h-screen ' autoPlay loop muted>
    <source src={video} autoPlay loop  type='video/mp4' />
</video>
    <div className='main'>
    
   <nav className='bg-slate-950 text-white py-[10px] w-full backdrop-blur-lg fixed bg-opacity-30 top-0 left-0 z-50'>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class="flex ">
        <img src="src/vedyalogo.png" class="h-10 -mt-1 mr-3 -ml-4" alt="Project Manager" />
    </a>
    
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-blue-700 rounded md:p-0 hover:text-white font-roboto font-bold" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 font-roboto font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-pink-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 font-roboto font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 font-roboto font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="/login" class="block py-2 pl-3 pr-4 text-gray-900 font-roboto font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    
    <div className='flex justify-evenly'>
    <div className="container items-center font-roboto font-bold py-[130px] mx-auto  ">
      
    <Fade bottom>
    <h1 className=' container font-bold text-[250px] text-right text-transparent mt-[40px] bg-clip-text bg-gradient-to-r from-blue-200 to-slate-500'>VedyA</h1>
      
    <div className='flex -mt-8'>
    <MultiSelect
      radius={15}
      className="text-right opacity-70 rounded-3xl w-[600px] mt-4 ml-[640px]"
      placeholder="choose your symtoms"
      data={['itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 'chills', 'joint_pain', 'stomach_pain', 'acidity', 'ulcers_on_tongue', 'muscle_wasting', 'vomiting', 'burning_micturition', 'spotting_ urination', 'fatigue', 'weight_gain', 'anxiety', 'cold_hands_and_feets', 'mood_swings', 'weight_loss', 'restlessness', 'lethargy', 'patches_in_throat', 'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes', 'breathlessness', 'sweating', 'dehydration', 'indigestion', 'headache', 'yellowish_skin', 'dark_urine', 'nausea', 'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain', 'constipation', 'abdominal_pain', 'diarrhoea', 'mild_fever', 'yellow_urine', 'yellowing_of_eyes', 'acute_liver_failure', 'fluid_overload', 'swelling_of_stomach', 'swelled_lymph_nodes', 'malaise', 'blurred_and_distorted_vision', 'phlegm', 'throat_irritation', 'redness_of_eyes', 'sinus_pressure', 'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs', 'fast_heart_rate', 'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus', 'neck_pain', 'dizziness', 'cramps', 'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels', 'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails', 'swollen_extremeties', 'excessive_hunger', 'extra_marital_contacts', 'drying_and_tingling_lips', 'slurred_speech', 'knee_pain', 'hip_joint_pain', 'muscle_weakness', 'stiff_neck', 'swelling_joints', 'movement_stiffness', 'spinning_movements', 'loss_of_balance', 'unsteadiness', 'weakness_of_one_body_side', 'loss_of_smell', 'bladder_discomfort', 'foul_smell_of urine', 'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)', 'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body', 'belly_pain', 'abnormal_menstruation', 'dischromic _patches', 'watering_from_eyes', 'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum', 'rusty_sputum', 'lack_of_concentration', 'visual_disturbances', 'receiving_blood_transfusion', 'receiving_unsterile_injections', 'coma', 'stomach_bleeding', 'distention_of_abdomen', 'history_of_alcohol_consumption', 'fluid_overload.1', 'blood_in_sputum', 'prominent_veins_on_calf', 'palpitations', 'painful_walking', 'pus_filled_pimples', 'blackheads', 'scurring', 'skin_peeling', 'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 'blister', 'red_sore_around_nose', 'yellow_crust_ooze']}
      onChange={(e) => setSelection(e)}
      searchable
      nothingFoundMessage="Please select from the given sympto"
    />
    <Button radius="lg" variant='white' onClick={()=>{
      axios.post("https://vedya.nemoam7.repl.co/multisel",{"data":selection}).then(res=>{
        const data = res.data;
        console.log(data);
        localStorage.setItem("doctor", JSON.stringify(data))
        window.location.href="/result"
      })
    }} className=' opacity-70 mt-4 ml-[10px]'>Search</Button>
    </div>
    </Fade>
    </div>
    </div>
    <div className='pt-[69px]' >
    <div className='mx-auto w-full bg-gradient-to-b bg-black mt-7'>
    <Fade bottom>
      <div className='bg-slate-950 h-[400px]'>
    <div className='container mx-auto mt-12'>
    <h1 className='font-roboto pt-12 font-bold text-5xl text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-slate-900 '>What is VedyA?</h1>
    <p className='text-xl font-roboto text-left text-white mt-4 '>VedyA is a cutting-edge web application designed to revolutionize the way people access essential medical information.
     It simplifies the search for doctors, hospitals, and available beds, making it user-friendly and accessible. VedyA features doctor profiles, hospital information, and real-time bed 
     availability updates, benefiting patients, doctors, and hospitals alike. With the potential to save lives during health crises, VedyA represents a transformative healthcare solution 
     with far-reaching impact. </p>
        
    <p className='text-xl text-left font-roboto text-white mt-4'>
    VedyA Beds is a vital healthcare database designed to manage and communicate real-time hospital bed availability. In an era where timely access to healthcare resources is paramount,
    this project bridges the gap between patients and healthcare providers. It allows hospitals to update bed statuses, ensuring accurate data, and enables patients to quickly find available beds.
    Security and compliance are integral to protect patient information.
        </p>
        </div>
        </div>
        <div className='bg-slate-950 h-[310px]'>
        <div className='container mx-auto'>
        <h1 className='font-bold pt-12 font-roboto text-5xl text-left text-transparent mt-12 bg-clip-text bg-gradient-to-r from-blue-100 to-slate-900  '>What do we offer?</h1>
        <p className='text-xl text-left font-roboto text-white mt-4 '>Revolutionary app connecting patients with suitable doctors<br/>
    AI-powered symptom analysis for accurate diagnosis suggestions<br/>
    Vibrant community forums for patient queries and expert doctor responses<br/>
    Verified network of expert doctors committed to providing top-notch care<br/>
    Primary focus on facilitating perfect patient-doctor matches for personalized healthcare experiences</p>
        </div>
        </div>
        </Fade>
        <div className='flex justify-evenly'>
    <div className=' w-1/3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl py-12 h-auto mt-12 z-40'>
        <h1 className='font-bold text-6xl text-slate-800 text-center'>Free</h1>
        <ul className='marker:text-slate-800 text-left list-disc pl-10 '>
        <li className=' font-semibold text-blue-950  mt-12'>Find Doctors according to your need</li>
        <li className=' font-semibold text-blue-950  mt-4'>Find Hospitals according to your Budget</li>
        <li className=' font-semibold text-blue-950  mt-4'>See availablity of beds </li>
        <li className=' font-semibold text-blue-950  mt-4'>Community Forum</li>
        </ul>
        <div className='text-center mt-[100px]'><Button className='text-center'>Continue</Button></div>
    </div>
    <div className=' w-1/3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl py-12 mt-12 z-40'>
        <h1 className='font-bold text-6xl font- text-slate-800 text-center'>Premium</h1>
        <ul className='marker:text-slate-800 text-left list-disc pl-10 '>
        <li className=' font-semibold text-blue-950  mt-12'>Real Time Updates</li>
        <li className=' font-semibold text-blue-950  mt-4'>Priority Support</li>
        <li className=' font-semibold text-blue-950  mt-4'>Advanced Search</li>
        <li className=' font-semibold text-blue-950  mt-4'>Comprehensive Hospital Profiles</li>
        <li className=' font-semibold text-blue-950  mt-4'>User Profile Customization</li>
        <li className=' font-semibold text-blue-950  mt-4'>Concierge Services</li>
        </ul>
        <div className='text-center mt-6'><Button className='text-center'>Rs.99/month</Button></div>
    </div>
    </div>
    </div>  
    </div>
    </>
  )
}

export default App
