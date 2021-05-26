const Contact = (props) => {
    return (
        <section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Contact</h2>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="team-member">
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="assets/img/square_profile_pic.jpg" alt="" />
                            <h4>Ethan Pang</h4>
                            <a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/ethanpang5/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="https://github.com/ethanpang5" target="_blank"><i class="fab fa-github"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="mailto:ethanp5@berkeley.edu" target="_blank"><i class="fa fa-envelope"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact