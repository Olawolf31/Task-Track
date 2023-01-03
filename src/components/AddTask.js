import React, { useState } from 'react'




const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)


    const onSubmit =(e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder('')

    }

  return (
    <form className='add.form' onSubmit={onSubmit}>
    <div className="form-control">
        <label>Task</label>
        <input type='text' value= {text} onChange={(event) => setText(event.target.value) } placeholder='Add Task' />
    </div>

    <div className="form-control">
        <label>Day & Time</label>
        <input type='text' value= {day} onChange={(event) => setDay(event.target.value)} placeholder='Add Day & time' />
    </div>

    <div className="form-control-check">
        <label>Set Reminder</label>
        <input type='checkbox' checked={reminder} value= {reminder} onChange={(event) => setReminder(event.currentTarget.checked)} />
    </div>

    <input className='btn btn-block' type='submit' value='Save Task' />
</form>
  )
}

export default AddTask