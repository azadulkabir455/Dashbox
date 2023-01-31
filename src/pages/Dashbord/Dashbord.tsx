import React, { useState } from 'react'
import TotalCount from './dashbordComponent/TotalCount'
import { BsFillPeopleFill, BsFillPersonFill, BsFillCartFill, BsBasket2, BsFillLayersFill, BsFillPenFill, BsFillPlayFill, BsFillCollectionPlayFill, BsXDiamondFill, BsImage } from "react-icons/bs";
import "../../assets/css/dashbord/dashbord.scss"
import { useSelector } from 'react-redux';
import { UserData } from './dashbordComponent/UserData';
import BarChart from '../../components/diagramChart/BarChart';
import PieChart from '../../components/diagramChart/PieChart';

export default function Dashbord() {
  const [userData, setUserData] = useState<any>({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "User Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: "#36A2EB",
        borderColor: "#ddd",
        borderWidth: 2
      },
      {
        label: "User Lost",
        data: UserData.map((data) => data.userLost),
        backgroundColor: "#FF6384",
        borderColor: "#ddd",
        borderWidth: 2
      },
      {
        label: "User Premier",
        data: UserData.map((data) => data.userPremier),
        backgroundColor: "#9966FF",
        borderColor: "#ddd",
        borderWidth: 2
      }
    ]
  });
  const { users } = useSelector((state: any) => state.user);
  let count = 1;
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
                  countBg="linear-gradient(to left,#f16529, #e44d26)"
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
      <div className="users py-5 px-3">
        <h3 className="text-primary fw-bold text-capitalize">Users:</h3>
        <div className="row">
          <div className="col-12">
            <table className="table table-striped table-bordered" style={{ minWidth: "500px" }}>
              <thead>
                <tr className='table-primary'>
                  <th style={{ width: "60px" }}>No:</th>
                  <th style={{ width: "100px" }}>Picture</th>
                  <th>Name</th>
                  <th style={{ width: "146px" }}>Role</th>
                  <th>Email</th>
                  <th>Phone</th>

                </tr>
              </thead>
              <tbody>
                {
                  users &&
                  users.map((user: any) =>
                    <tr >
                      <td>{count++}</td>
                      <td className='profilePic'>
                        {
                          user.imgUrl &&
                            user.imgUrl ?
                            <img src={user.imgUrl} alt="" /> :
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU" alt="" />
                        }
                      </td>
                      <td className='text-capitalize'>{user.name}</td>
                      <td className="dropdown">
                        <div className="form-group">
                          <select className="form-select">
                            <option>Admin</option>
                            <option>Moderate</option>
                            <option>User</option>
                          </select>
                        </div>
                      </td>
                      <td> {user.email}</td>
                      <td>{user.phone}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="chartContainer px-3">
        <h3 className="text-primary fw-bold text-capitalize">Dashbord Info:</h3>
        <div className="row g-4">
          <div className="col-12 col-md-8">
            <div className="barChart">
              <BarChart chartData={userData} />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="pieChart" >
              <PieChart chartData={userData} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
