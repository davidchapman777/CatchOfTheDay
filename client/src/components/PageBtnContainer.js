import { useAppContext } from "../context/appContext"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'



const PageBtnContainer = () => {
    const { numOfPages, page, changePage } = useAppContext()
    const pages = Array.from({ length: numOfPages }, (_, index) => {
        return index +1
    })
    const nextPage = () => {
        let newPage = page + 1;
        if (newPage > numOfPages) {
            newPage=1
        }
        changePage(newPage)
    }
    const prevPage = () => {
        let newPage = page - 1;
        if (newPage < 1) {
            newPage = numOfPages
        }
        changePage(newPage)
    }
  return (
      <div>
          <button onClick={prevPage}><AiOutlineArrowLeft/></button>
          {pages.map((pageNumber) => {
              return <button key={pageNumber} onClick={()=>changePage(pageNumber)}>{pageNumber}</button>
          })}
          <button onClick={nextPage}><AiOutlineArrowRight/></button>
    </div>
  )
}
export default PageBtnContainer