import React from 'react'
import TotalCount from './dashbordComponent/TotalCount'
import "../../assets/css/dashbord/dashbord.scss"
import { BsFillPeopleFill, BsFillPersonFill, BsFillCartFill, BsBasket2, BsFillLayersFill, BsFillPenFill, BsFillPlayFill, BsFillCollectionPlayFill, BsXDiamondFill, BsImage } from "react-icons/bs";

export default function Dashbord() {
  return (
    <>
      <div className="container-fluid dashbordSummery">
        <div className="row g-3">
          <div className="col-12 col-lg-8">
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <TotalCount
                  countName='Users'
                  countTotal={33}
                  countBg="linear-gradient(to left, #bc4e9c, #f80759)"
                  countBgIcon={<BsFillPeopleFill />}
                  countIcon={<BsFillPersonFill />} />
              </div>
              <div className="col-12 col-sm-6">
                <TotalCount
                  countName='Products'
                  countTotal={120}
                  countBg="linear-gradient(to left,  #36d1dc, #5b86e5)"
                  countBgIcon={<BsFillCartFill />}
                  countIcon={<BsBasket2 />} />
              </div>
              <div className="col-12 col-sm-6">
                <TotalCount
                  countName='Posts'
                  countTotal={222}
                  countBg="linear-gradient(to left, #f2994a, #f2c94c)"
                  countBgIcon={<BsFillPenFill />}
                  countIcon={<BsFillLayersFill />} />
              </div>
              <div className="col-12 col-sm-6">
                <TotalCount
                  countName='Videos'
                  countTotal={222}
                  countBg="linear-gradient(to left, #f2994a, #f2c94c)"
                  countBgIcon={<BsFillCollectionPlayFill />}
                  countIcon={<BsFillPlayFill />} />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 last">
            <TotalCount
              countName='Images'
              countTotal={222}
              countBg="linear-gradient(to left, #dce35b, #45b649)"
              countBgIcon={<BsImage />}
              countIcon={<BsXDiamondFill />} />
          </div>
        </div>
      </div>
    </>
  )
}
