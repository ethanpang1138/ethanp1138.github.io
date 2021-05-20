import React, { useState } from 'react';

const ExperienceModal = (props) => {
    return (
        <div class="experience-modal modal fade" id="afxModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" />
                    </div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <h2 class="text-uppercase">AFX</h2>
                                    <p class="item-intro text-muted">The technology and software behind UC Berkeley's biggest dance organization.</p>
                                    <img class="img-fluid d-block mx-auto" src="assets/img/timeline/afx.png" alt="" />
                                    <p>
                                        Committed time toward learning AFX Tech's three primary projects -
                                        maintaing the website, managing the AFX dancers database, and improving
                                        a cross-platform music app - and the underlying technologies: React, Ruby and React Native.
                                    </p>
                                    <ul class="list-inline">
                                        <li><b>Date: </b>February 2021 - Present</li>
                                    </ul>
                                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                                        <i class="fas fa-times mr-1"></i>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ExperienceModal