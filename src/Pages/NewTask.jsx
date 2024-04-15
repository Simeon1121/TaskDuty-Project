import React from 'react'



const NewTask = () => {
  return (
    <>
    <h1 className='container'>
    New Task </h1>

    <div class="container mb-3 mt-5">
      <h4>
  <label for="exampleFormControlInput1" class="form-label">Task Title</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" 
  placeholder="E.g Project Defence,
  Assignment..." />
      </h4>
</div>

<h4>
<div class="container mb-3 rounded-3">
  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"
  placeholder='Briefly describe your task'></textarea>
</div>
</h4>

<h4>
<div class="container mb-3 rounded-3">
  <label for="exampleFormControlTextarea1" class="form-label">Tags</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
  placeholder='Urgent       Important' ></textarea>
</div>
</h4>

<div className='container'>
<button type="button" class="btn btn-info align-items-center w-100 mt-2 p-3">DONE</button>
</div>

<div className='d-flex align-items-center justify-content-center mt-4'>
  <h4>
<a href="http://" target="_blank" rel="noopener noreferrer"> Back To Top </a> 
  </h4>
</div>
  
 

    
    </>
  )
}

export default NewTask