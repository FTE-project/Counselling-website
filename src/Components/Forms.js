export const ContactForm = () => {
    return (
      <section className="section">
        <div className="form-bg w-md-50 m-auto">
          <div className="row top m-0 w-50  m-auto ">
            <h5 className="form-header text-center mt-3">Let's Talk</h5>
            <form>
              <div className="mb-3">
                <label for="fullname" className="form-label">
                  FullName
                </label>
                <input type="text" className="form-control p-2" />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control p-2" />
              </div>
              <label for="floatingTextarea2">Message</label>
              <div class="form-floating">
                <textarea
                  class="form-control "
                  placeholder="Leave a Message here"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export const UserSignUp = () => {
    return (
      <section className="section">
        <div className="form-bg w-md-50  m-auto ">
          <div className="row top m-0 w-50 m-auto ">
            <h5 className="form-header text-center mt-3">SIGNUP ON MINDAFRIK</h5>
            <form>
              <div className="mb-3">
                <label for="fname" className="form-label">
                  FirstName
                </label>
                <input type="text" className="form-control p-2" />
              </div>
              <div className="mb-3">
                <label for="lname" className="form-label">
                  LastName
                </label>
                <input type="text" className="form-control p-2" />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control p-2" />
              </div>
              <div className="mb-3">
                <label for="num" className="form-label">
                  PhoneNumber
                </label>
                <input type="number" className="form-control p-2" />
              </div>
              <div className="mb-3">
                <label for="pword" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control p-2" />
              </div>
              <div className="mb-3">
                <label for="confirmpword" className="form-label">
                  Confirm Password
                </label>
                <input type="password" className="form-control  p-2" />
              </div>
            </form>
            <p className="text-center">
              Already have an account? <a href="#">LogIn</a>
            </p>
          </div>
        </div>
      </section>
    );
  };
  export const UserSignIn = () => {
    return (
      <section className="section">
        <div className="form-bg w-md-50 m-auto">
          <div className="row top m-0 w-50  m-auto ">
            <h5 className="form-header text-center mt-3">SIGNIN TO MINDAFRIK</h5>
            <form>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control p-2" />
              </div>
              <div className="mb-3">
                <label for="pword" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control p-2" />
              </div>
            </form>
            <p className="text-center">
              Not a member? <a href="#">LogIn</a>
            </p>
            <a className="text-center forgot" href="">
              Forgot password?
            </a>
          </div>
        </div>
      </section>
    );
  };
  export const ResetPassword = () => {
    return (
      <section className="section">
        <div className="form-bg w-md-50 m-auto">
          <div className="row top m-0 w-50  m-auto ">
            <p className="text-center">Enter your Email to Reset Password</p>
  
            <form>
              <div className="mb-3">
                <label for="email" className="form-label text-center">
                  Email
                </label>
                <input type="email" className="form-control p-2" />
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };
  export const QuestionForm = () => {
    return (
      <section className="section">
        <div className="form-bg w-md-50 m-auto">
          <div className="row top m-0 w-50  m-auto ">
            <h5 className="form-header text-center mt-3">QUESTIONAIRE</h5>
            <form>
              <div className="mb-3">
                <label for="job" className="form-label">
                  Job Status
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option value="1">Employed</option>
                  <option value="2">Unemployed</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="job" className="form-label">
                  Type of Session
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option value="1">Family</option>
                  <option value="2">Couple</option>
                  <option value="2">Individual</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="job" className="form-label">
                  Have you had a Previous Counselling Session?
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="job" className="form-label">
                  What do you hope to accomplish in this session?
                </label>
                <div class="form-floating">
                  <textarea
                    class="form-control "
                    placeholder="Leave a Message here"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };
  export const RegisterCounsel = () => {
    return (
      <section className="section">
        <div className="form-bg w-md-50  m-auto ">
          <div className="row top m-0 w-50 m-auto ">
            <h5 className="form-header text-center mt-3">
              REGISTER AS A COUNSELLOR
            </h5>
            <form>
              <div className="mb-3">
                <label for="fname" className="form-label">
                  FirstName
                </label>
                <input type="text" className="form-control p-2" />
              </div>
              <div className="mb-3">
                <label for="lname" className="form-label">
                  LastName
                </label>
                <input type="text" className="form-control p-2" />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control p-2" />
              </div>
              <div className="mb-3">
                <label for="lname" className="form-label">
                  Nationality
                </label>
                <input type="text" className="form-control p-2" />
              </div>
              <div className="mb-3">
                <label for="lname" className="form-label">
                  State of origin
                </label>
                <input type="text" className="form-control p-2" />
              </div>
              <div className="mb-3">
                <label for="num" className="form-label">
                  PhoneNumber
                </label>
                <input type="number" className="form-control p-2" />
              </div>
              <div className="mb-3">
                <label for="area" className="form-label">
                  Area of Specialization
                </label>
                <input type="text" className="form-control p-2" />
              </div>
              <div className="mb-3">
                <label for="tline" className="form-label">
                  Tagline
                </label>
                <input type="text" className="form-control p-2" />
              </div>
              <label for="floatingTextarea2">BIO</label>
              <div class="form-floating">
                <textarea class="form-control "></textarea>
              </div>
              <div className="mb-3">
                <label for="day" className="form-label">
                  Availability
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option value="1">Monday</option>
                  <option value="2">Tuesday</option>
                  <option value="3">Wednesday</option>
                  <option value="4">Thursday</option>
                  <option value="5">Friday</option>
                  <option value="6">Saturday</option>
                  <option value="7">Sunday</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="day" className="form-label">
                  Availability(Time)
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option value="1">24hrs</option>
                  <option value="2">12hrs</option>
                </select>
              </div>
  
              <div className="mb-3">
                <label for="docs" className="form-label">
                  Upload documents
                </label>
                <div class="input-group mb-3">
                  <input type="file" class="form-control" id="inputGroupFile02" />
                  <label class="input-group-text" for="inputGroupFile02">
                    Upload
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label for="pword" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control p-2" />
              </div>
              <div className="mb-3">
                <label for="confirmpword" className="form-label">
                  Verify Password
                </label>
                <input type="password" className="form-control  p-2" />
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };
  export const LoginCounsel = () =>{
      return (
          <section className="section">
            <div className="form-bg w-md-50 m-auto">
              <div className="row top m-0 w-50  m-auto ">
                <h5 className="form-header text-center mt-3">WELCOME</h5>
                <form>
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      Email
                    </label>
                    <input type="email" className="form-control p-2" />
                  </div>
                  <div className="mb-3">
                    <label for="pword" className="form-label">
                      Password
                    </label>
                    <input type="password" className="form-control p-2" />
                  </div>
                </form>
                <a className="text-center forgot" href="">
                  Forgot password?
                </a>
                <p className="text-center">
                  Don't have an account? <a href="#">Register</a>
                </p>
              </div>
            </div>
          </section>
        );
  }