import React from 'react'

export default function Textform() {
    return (
        <div>
           <h1>{props.heading}</h1>
            <div class="mb-3">
             <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
             <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className='btn btn-primary'>convert to upper case</button>
        </div>
    )
}
