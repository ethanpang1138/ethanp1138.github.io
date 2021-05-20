import React from "react";

const Education = (props) => {
    return (
        <section class="page-section" id="education">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Education</h2>
                    <h3 class="section-subheading text-muted">
                        University of California, Berkeley<br/><br/>
                        B.A. Computer Science
                    </h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                        <h4 class="my-3">Summer 2020</h4>
                        <p class="text-muted">
                            EECS 16A: : Designing Information Devices & Systems 1
                        </p>
                    </div>
                    <div class="col-md-4">
                        <h4 class="my-3">Fall 2020</h4>
                        <p class="text-muted">
                            CS 61A: The Structure and Interpretation of Computer Programs<br/>
                            EECS 16B: Designing Information Devices & Systems 2
                        </p>
                    </div>
                    <div class="col-md-4">
                        <h4 class="my-3">Spring 2021</h4>
                        <p class="text-muted">
                            CS61B: Data Structures and Algorithms<br/>
                            CS70: Discrete Math and Probability Theory<br/>
                            Data 8: Foundations of Data Science<br/>
                            CS: Introduction to Algorithmic Thinking
                        </p>
                    </div>
                    <div class="col-md-4">
                        <h4 class="my-3">Summer 2021</h4>
                        <p class="text-muted">
                            CS61C: Computer Architecture (Machine Structures)
                        </p>
                    </div>
                    <div class="col-md-4">
                        <h4 class="my-3">Fall 2021</h4>
                        <p class="text-muted">
                            CS170: Efficient Algorithms and Intractable Problems<br/>
                            CS188: Introduction to Artificial Intelligence<br/>
                            Data 140: Probability for Data Science<br/>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education