import ExperienceModalData from "../data/ExperienceModalData"
import ExperienceModal from "./ExperienceModal"

const ExperienceModals = (props) => {
    const modals = []
    function createModals() {
        for (let i = 0; i < ExperienceModalData.length; i++) {
            const data = ExperienceModalData[i]
            const modal = <ExperienceModal data={data} />
            modals.push(modal)
        }
    }
    createModals()

    return (
        <>
            {ExperienceModalData.map((data, key) => 
                <ExperienceModal data={data} key={key}/>
            )}
        </>
    )
}

export default ExperienceModals