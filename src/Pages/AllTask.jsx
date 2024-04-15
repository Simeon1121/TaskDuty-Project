import React from "react";
import '../Style/AllTask.css'




const AllTask = () => {
  return (
    <>

    {/* </section> */}

      <section className="container rounded-3 mt-4 p-3">
      <div className="d-flex">
          <h3 className=" col-9"> My Task </h3>
          <h5 className="col-3 text-danger"> + Add New Task</h5>
    </div>

      

{/* Div for frame 1*/}
<div class="container border rounded-3 mt-4 p-3 shadow-lg ">
<div class="row">
    <h3 class="col-9 text-start text-danger">Urgent</h3>
    <div className="col-3 gap-3 d-flex">
    <button className="btn btn-lg btn-success"> 📝 Edit</button>
    <button className="btn btn-lg btn-success"> 🗑 Delete</button>
    </div>
  </div>
  <hr />
  <h2> Fintech Website Update</h2>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod veniam quia laudantium numquam esse doloribus commodi? Harum quam adipisci et.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ullam quia deleniti facilis debitis sint delectus, voluptatibus, accusantium magni consequatur cupiditate unde dicta consectetur necessitatibus quam ducimus aperiam eius mollitia commodi fugit quaerat quidem beatae maxime. Adipisci quae magni beatae?
  </p>
  <br /><br />
</div>

{/* Div for frame 2*/}
<div class="container border rounded-3 mt-4 p-3 shadow-lg ">
<div class="row">
    <h3 class="col-9 text-start text-info">Important</h3>
    <div className="col-3 gap-3 d-flex">
    <button className="btn btn-lg btn-success"> 📝 Edit</button>
    <button className="btn btn-lg btn-success"> 🗑 Delete</button>
    </div>
  </div>
  <hr />
  <h2> Agro Website</h2>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod veniam quia laudantium numquam esse doloribus commodi? Harum quam adipisci et.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ullam quia deleniti facilis debitis sint delectus, voluptatibus, accusantium magni consequatur cupiditate unde dicta consectetur necessitatibus quam ducimus aperiam eius mollitia commodi fugit quaerat quidem beatae maxime. Adipisci quae magni beatae?
  </p>
  <br /><br />
</div>

{/* Div for frame 3*/}
<div class="container border rounded-3 mt-4 p-3 shadow-lg ">
<div class="row">
    <h3 class="col-9 text-start text-danger">Urgent</h3>
    <div className="col-3 gap-3 d-flex">
    <button className="btn btn-lg btn-success"> 📝 Edit</button>
    <button className="btn btn-lg btn-success"> 🗑 Delete</button>
    </div>
  </div>
  <hr />
  <h2> Fintech Website Update</h2>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod veniam quia laudantium numquam esse doloribus commodi? Harum quam adipisci et.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ullam quia deleniti facilis debitis sint delectus, voluptatibus, accusantium magni consequatur cupiditate unde dicta consectetur necessitatibus quam ducimus aperiam eius mollitia commodi fugit quaerat quidem beatae maxime. Adipisci quae magni beatae?
  </p>
  <br /><br />
</div>

{/* Div for frame 2*/}
<div class="container border rounded-3 mt-4 p-3 shadow-lg">
<div class="row">
    <h3 class="col-9 text-start text-info">Important</h3>
    <div className="col-3 gap-3 d-flex">
    <button className="btn btn-lg btn-success"> 📝 Edit</button>
    <button className="btn btn-lg btn-success"> 🗑 Delete</button>
    </div>
  </div>
  <hr />
  <h2> Agro Website</h2>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod veniam quia laudantium numquam esse doloribus commodi? Harum quam adipisci et.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ullam quia deleniti facilis debitis sint delectus, voluptatibus, accusantium magni consequatur cupiditate unde dicta consectetur necessitatibus quam ducimus aperiam eius mollitia commodi fugit quaerat quidem beatae maxime. Adipisci quae magni beatae?
  </p>
  <br /><br />
</div>
<hr />
<div className="d-flex justify-content-center">
   <button type="button" class="btn btn-info align-items-center">Back to Top</button>
</div>

</section>
    </>
  );
};

export default AllTask;