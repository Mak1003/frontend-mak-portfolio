import React from 'react';
import { motion } from 'framer-motion';

const ProjectsList = ({ projects }) => {
  const list = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.ul variants={list} initial="hidden" animate="visible">
      {projects.map(project => (
        <motion.li key={project._id} variants={item}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default ProjectsList;
