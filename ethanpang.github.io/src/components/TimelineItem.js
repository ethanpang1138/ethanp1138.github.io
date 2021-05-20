const TimelineItem = ({data, orientation}) => {
    // const {modalName, img, date, heading, description} = data
    console.log(data.img)
    const path = "assets/img/timeline/"
    return (
        <>
        <li class={orientation}>
            <div class="timeline-image" data-toggle="modal" href={"#"+data.modalName}>
                <img class="rounded-circle img-fluid" src={path+data.img} alt="" />
            </div>
            <div class="timeline-panel">
                <div class="timeline-heading">
                    <h4 class="text-muted">{data.date}</h4>
                    <h4 class="subheading">{data.heading}</h4>
                </div>
                <div class="timeline-body"><p class="text-muted">{data.description}</p>
                </div>
            </div>
        </li>
        <div class="experience-modal modal fade" id={data.modalName} tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal"/></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <h2 class="text-uppercase">{data.modalTitle}</h2>
                                    <p class="item-intro text-muted">{data.modalHeading}</p>
                                    <img class="img-fluid d-block mx-auto" src={path+data.modalImg} alt="" />
                                    <p>{data.modalDescription}</p>
                                    <ul class="list-inline">
                                        <li><b>Date: </b>{data.modalDate}</li>
                                        {data.linkTitle ? <li><a href={data.link} target="_blank">{data.linkTitle}</a></li> : null}
                                        {data.github ? <li><a href={data.github} target="_blank">Github</a></li> : null}
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
        </>
    )
}

export default TimelineItem