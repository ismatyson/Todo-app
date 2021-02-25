import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Form from '../newTaskForm'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newTaskBox: {
     padding: '5px',
  },
  newTaskTitle:{
    padding: '3px',
    margin: '2px',
  },
  paper: {
    backgroundColor: '#ffffff',
    border: '2px solid #ffffff',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '520px'
  },
}));

const NewTask = ({addTask}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  

  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });


  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" className="btn-sm Add-Task-button" onClick={handleOpen}>
        New Task
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Form 
            classes={classes}
            handleClose={handleClose}
            handleOpen={handleOpen}
            handleChange={handleChange}
            open={open}
            addTask={addTask}

          />
        </Fade>
      </Modal>
    </div>
  );
}
export default NewTask;