import TimelineItem from "./TimelineItem"
import TimelineImages from "../data/TimelineData"

const Timeline = (props) => {
    const events = []

    function createTimelineItems() {
        for (let i = TimelineImages.length - 1; i >= 0; i--) {
            let orientation = ""
            if (i % 2 == 1) {
                orientation = "timeline-inverted"
            }
            const data = TimelineImages[i]
            
            const item = <TimelineItem data={data} orientation={orientation}/>
            events.push(item)
        }
    }
    createTimelineItems()

    return (
        <section class="page-section bg-light" id="timeline">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Timeline</h2>
                    <h3 class="section-subheading text-muted">A timeline outlining some of my past experiences</h3>
                </div>
                <ul class="timeline">
                    {events}
                </ul>
            </div>
        </section>
    )
}

export default Timeline