import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion';

import {styles} from '../style.js'
import {github} from '../assets';
import {SectionWrapper} from '../hoc';
import {projects} from '../constants';
import {fadeIn, textVariant} from '../utils/motion.js'

const ProjectCard = ({index, name, description, tags, image, source_code_link}) =>{
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>
        <div>
          
        </div>
      </Tilt>
    </motion.div>
  )

}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        My proj
      </p>
      <h2 className={styles.sectionHeadText}>
        Projects.
      </h2>
    </motion.div>
    <div className='w-full flex'>
      <motion.p
      variants={fadeIn("","",0.1,1)}
      className='mt-3 text-secondary tex-[17px] max-w-3xl leading-[30px]'
      >
        Following projects showcases my skills Following projects showcases my skills Following projects showcases my skills Following projects showcases my skills Following projects showcases my skills
        Following projects showcases my skills Following projects showcases my skills Following projects showcases my skills Following projects showcases my skills
        Following projects showcases my skills Following projects showcases my skills Following projects showcases my skills Following projects showcases my skills
      </motion.p>

    </div>
    <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project, index) =>(
        <ProjectCard 
        key={`project-${index}`}
        index={index}
        {...project}
        />
      ))}

    </div>
    </>  
    )
}

export default SectionWrapper(Works, "")