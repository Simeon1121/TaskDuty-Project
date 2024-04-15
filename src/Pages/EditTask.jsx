import React from 'react'
import '../Style/EditTask.css'

const EditTask = () => {
  return (
    <>
    <h1 className='container'>
    Edit Task </h1>

    <h4>
<div class="container mt-4 mb-3 rounded-3">
  <label for="exampleFormControlTextarea1" class="form-label"> Task Title</label>
  <textarea class="form-control Edittitle" id="exampleFormControlTextarea1" rows="1"
  placeholder='Briefly describe your task'> Project Completion </textarea>
</div>
</h4>

<h4>
<div class="container mb-3 rounded-3">
  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
  </div>
</h4>
  
  
  <div className='container'> 
  <textarea class="form-control Edittask" id="exampleFormControlTextarea1" rows="10"
  placeholder='Briefly describe your task'>
    Lorem, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dicta accusantium Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquid sed hic eveniet error deserunt reprehenderit maxime cumque, commodi cupiditate. adipisicing elit. Qui est quod expedita praesentium nisi pariatur saepe architecto debitis, repudiandae officiis sed. Accusantium architecto porro nam tenetur voluptatem aspernatur. Delectus, eos. asperiores iste, maiores rerum?ipsum dolor sit amet consectetur adipisicing elit. Quaerat, saepe? </textarea>
    </div>

<h4>
<div class="container mb-3 rounded-3">
  <label for="exampleFormControlTextarea1" class="form-label">Tags</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
  placeholder='Urgent Important' > </textarea>
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

export default EditTask