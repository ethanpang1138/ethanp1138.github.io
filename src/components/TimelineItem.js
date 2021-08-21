const TimelineItem = ({data, orientation}) => {
    // const {modalName, img, date, heading, description} = data
    const path = "assets/img/timeline/"
    return (
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
    )
}

export default TimelineItem