import { useEffect, useState } from "react";


export default function Form() {
  const [uid,setuid]=useState("");
  const [ref,setref]=useState("");
  let uuid="";
    useEffect(()=>{
        
var dt = new Date().getTime();
  uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function(c) {
var r = (dt + Math.random()*16)%16 | 0;
dt = Math.floor(dt/16);
return (c=='x' ? r :(r&0x3|0x8)).toString(16);


});
setref(uuid);
let data= "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266%26"+"<dno>%26"+uuid
console.log(data)
const link="https://chart.googleapis.com/chart?cht=qr&chl="+data+"&chs=200x200&chld=L|0";
const image = document.getElementById("myimg");
image.src = link;
const url = 'https://sharex-385913.nw.r.appspot.com/transactions/'+uuid;
setuid(url);
console.log(url)  
let timerId = setInterval(function() {
  fetch(url)
      .then(response => response.text())
      .then(data => {
          console.log("pending")
          if (data === 'success') {
            console.log("success")
            document.getElementById("my-form").submit();
            clearInterval(timerId);
          }
      })
      .catch(error => console.error(error));
}, 12000);
setTimeout(() => { clearInterval(timerId); }, 78000);
    },[]);

   
  
   // 20 seconds
    return(<>
 
    <div class="formbold-form-wrapper">
      
     
  
      <form id="my-form" action={`/sub/${uid}`} method="POST">
        <div class="formbold-form-title">
          <h2 class="">Register now</h2>
          <p>
           Scholarship registeration form
          </p>
        </div>
      <h4><b>Application Id:</b>  {ref}</h4>
        
        <div class="formbold-input-flex">
          <div>
            <label for="firstname" class="formbold-form-label" >
              First name
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              class="formbold-form-input" required
            />
          </div>
          <div>
            <label for="lastname" class="formbold-form-label"> Last name </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              class="formbold-form-input" required
            />
          </div>
        </div>
  
        <div class="formbold-input-flex">
          <div>
            <label for="email" class="formbold-form-label"> Email </label>
            <input
              type="email"
              name="email"
              id="email"
              class="formbold-form-input"
            />
          </div>
          <div>
            <label for="phone" class="formbold-form-label"> Phone number </label>
            <input
              type="text"
              name="phone"
              id="phone"
              class="formbold-form-input"
            />
          </div>
        </div>
  
        <div class="formbold-mb-3">
          <label for="address" class="formbold-form-label">
            Street Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            class="formbold-form-input"
          />
        </div>
  
        <div class="formbold-mb-3">
          <label for="address2" class="formbold-form-label">
            Street Address Line 2
          </label>
          <input
            type="text"
            name="address2"
            id="address2"
            class="formbold-form-input"
          />
        </div>
  
        <div class="formbold-input-flex">
          <div>
            <label for="state" class="formbold-form-label"> State/Prvince </label>
            <input
              type="text"
              name="state"
              id="state"
              class="formbold-form-input"
            />
          </div>
          <div>
            <label for="country" class="formbold-form-label"> Country </label>
            <input
              type="text"
              name="country"
              id="country"
              class="formbold-form-input"
            />
          </div>
        </div>
  
        <div class="formbold-input-flex">
          <div>
            <label for="post" class="formbold-form-label"> Post/Zip code </label>
            <input
              type="text"
              name="post"
              id="post"
              class="formbold-form-input"
            />
          </div>
          <div>
            <label for="area" class="formbold-form-label"> Area Code </label>
            <input
              type="text"
              name="area"
              id="area"
              class="formbold-form-input"
            />
          </div>
        </div>
        <h3>Scan to send proof</h3>
        <img   src ="" class = "qr-code img-thumbnail img-responsive" id="myimg" / >
        <div class="formbold-checkbox-wrapper">
          <label for="supportCheckbox" class="formbold-checkbox-label">
            <div class="formbold-relative">
              <input
                type="checkbox"
                id="supportCheckbox"
                class="formbold-input-checkbox"
              />
              <div class="formbold-checkbox-inner">
                <span class="formbold-opacity-0">
                  <svg
                    width="11"
                    height="8"
                    viewBox="0 0 11 8"
                    fill="none"
                    class="formbold-stroke-current"
                  >
                    <path
                      d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                      stroke-width="0.4"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
           Fill form before you scan,form will be submitted automatically once confimation recieved from ShareX on recieving the documents.
            
          </label>
        </div>
  
        {/*<button class="formbold-btn">Register Now</button>"*/}
      </form>
       
    </div>
  </>);
  }