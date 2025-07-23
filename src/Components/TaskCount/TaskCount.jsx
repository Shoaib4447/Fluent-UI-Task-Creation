import React from 'react'
import { useSelector } from 'react-redux'
import {makeStyles} from '@fluentui/react-components';

const useStyles = makeStyles({
        totalTasks: {
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "20px",
        letterSpacing: "0%",
    },
});

const TaskCount = () => {
  const tasks = useSelector((state)=>state.tasks.tasks)
  const styles = useStyles();
  return (
    <div className={styles.totalTasks}>{tasks.length} Tasks</div>
  )
}

export default TaskCount
