import PortfolioItem from "./PortfolioItem"
import PortfolioData from "../data/PortfolioData"

const Portfolio = (props) => {
    const items = []
    function createItems() {
        for (let i = 0; i < PortfolioData.length; i++) {
            const data = PortfolioData[i]

            const item = <PortfolioItem data={data} />
            items.push(item)
        }
    }
    createItems()

    return (
        <section class="page-section" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Portfolio</h2>
                    <h3 class="section-subheading text-muted">An overview of some of my projects</h3>
                </div>
                <div class="row">
                    {PortfolioData.map((data, key) =>
                        <PortfolioItem data={data} key={key} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Portfolio