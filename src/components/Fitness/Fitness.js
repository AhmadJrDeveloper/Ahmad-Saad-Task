import React from 'react'
import './Fitness.css'
import FitnessElements from '../FitnessElements/FitnessElements'
import Fitness1 from '../../assets/fitness1.jpg'
import Fitness2 from '../../assets/fitness2.jpg'
import Fitness3 from '../../assets/fitness3.jpg'


function Fitness() {
    const fitness = [
        {
          imageUrl: Fitness1,
          title: "Barbell Squat",
    description: "Increase leg strength with barbell full squats.\nLearn how to lift weights and get stronger in this training video.",
        },
        {
          imageUrl: Fitness2,
          title: "Kettlebell Pushup",
          description: "This is a great way to build a powerful chest with Kettlebells.These are some of the best, and my favorite, push up varitations.",
        },
        {
          imageUrl: Fitness3,
          title: "Boxing",
          description: "It's time to crush calories with this boxing workout,No muscle is left untouched in this powerful sweat sesh.",
        },
      ];
  return (
    <div className='Fitness-Container'>
    <h2 className='Fitness-Header'>FITNESS VIDEOS</h2>
    <div className="Fitness-Flex">
    {fitness.map((fitness, index) => (
              <FitnessElements
                key={index}
                imageUrl={fitness.imageUrl}
                title={fitness.title}
                description={fitness.description}
              />
            ))}
            </div>
    </div>
  )
}

export default Fitness