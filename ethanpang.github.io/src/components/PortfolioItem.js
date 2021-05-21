const PortfolioItem = ({data}) => {
    const path = "assets/img/portfolio/"
    return (
        <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
            <div class="experience-item">
                <a class="experience-link" data-toggle="modal" href={"#"+data.modalName}>
                    <div class="experience-hover">
                        <img class="img-fluid" src={path+data.img} alt="" />
                    </div>

                </a>
                <div class="experience-caption">
                    <div class="experience-caption-heading">{data.heading}</div>
                    <div class="experience-caption-subheading text-muted">{data.description}</div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem