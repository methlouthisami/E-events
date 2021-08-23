import ContactSvg from "../images/contact.svg";
import React from "react";
import "./Contact";
import { SocialIcon } from "react-social-icons";
export default function Contact() {
    return (
        <div>
            <div class="content ">
                <div class="container cont" style={{ marginTop: "80px" }}>
                    <div class="row">
                        <div class="col-md-6">
                            <img
                                src={ContactSvg}
                                alt="EVENT5"
                                class="img-fluid"
                            />
                        </div>
                        <div class="col-md-6 contents">
                            <div class="row justify-content-center">
                                <div class="col-md-8">
                                    <div class="mb-4">
                                        <h3>Sign Up</h3>
                                        <p class="mb-4">
                                            Lorem ipsum dolor sit amet elit.
                                            Sapiente sit aut eos consectetur
                                            adipisicing.
                                        </p>
                                    </div>
                                    <form action="#" method="post">
                                        <div class="form-group first">
                                            <label for="fullname">
                                                Full name
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="fullname"
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <input
                                                type="email"
                                                class="form-control"
                                                id="email"
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label for="password">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                class="form-control"
                                                id="password"
                                            />
                                        </div>
                                        <div class="form-group last mb-4">
                                            <label for="re-password">
                                                Re-type Password
                                            </label>
                                            <input
                                                type="password"
                                                class="form-control"
                                                id="re-password"
                                            />
                                        </div>

                                        <div class="d-flex mb-5 align-items-center">
                                            <label class="control control--checkbox mb-0">
                                                <span class="caption">
                                                    Creating an account means
                                                    you're okay with our{" "}
                                                    <a href="#terms-and-conditions">
                                                        Terms and Conditions
                                                    </a>{" "}
                                                    and our{" "}
                                                    <a href="#privacy-policy">
                                                        Privacy Policy
                                                    </a>
                                                    .
                                                </span>
                                                <input
                                                    type="checkbox"
                                                    checked="checked"
                                                />
                                                <div class="control__indicator"></div>
                                            </label>
                                        </div>

                                        <input
                                            type="submit"
                                            value="Register"
                                            class="btn btn-block btn-primary"
                                        />

                                        <span class="d-block text-left my-4 text-muted">
                                            &mdash; or register with &mdash;
                                        </span>

                                        <div class="social-login">
                                            <SocialIcon url="https://github.com/methlouthisami" />
                                            <SocialIcon url="https://www.facebook.com/" />
                                            <SocialIcon url="https://github.com/methlouthisami" />
                                            <SocialIcon url="https://github.com/methlouthisami" />
                                            <SocialIcon url="https://www.facebook.com/" />
                                            <SocialIcon url="https://www.facebook.com/" />
                                            <a href="#google" class="google">
                                                <span class="icon-google mr-3"></span>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
