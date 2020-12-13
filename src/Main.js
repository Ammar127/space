import React , {useState} from 'react';
import sortImg from "./assets/icon/sort.png";
import launch from './assets/img/launch-home.png';
import moment from 'moment';
import Loader from "react-loader-spinner";
export const Main = (props) => {
  const data = props.data;
  const sort = props.params.order;
  const filterValue = props.sort;
  const isLoading = props.isLoading;
  const onClickSort = () => {
    
    console.log('sort', sort)
    props.onSortChange(sort === 'desc' ? 'asc' : 'desc');
  }
    return (
      <main>
        <div className="container-fluid">
          <div className="row mt-md-5 mt-4">
            <div className="col-md-12 pr-md-5">
              <div className="row">
                <div className="col-12 text-right">
                  <div className="d-md-flex d-none align-items-center justify-content-end mb-3">
                    <select
                      value={filterValue}
                      name=""
                      id=""
                      onChange={({ target }) => {
                        props.onFilterChange(target.value);
                      }}
                    >
                      <option value="launch_year">Filter by Launch Year</option>
                      <option value="flight_number">
                        Filter by Flight Number
                      </option>
                      <option value="rocket_type">Filter by Rocket Type</option>
                      <option value="rocket_name">Filter by Rocket Name</option>
                    </select>
                    <a
                      className="btn btn-solid"
                      href="javascript:void(0)"
                      onClick={onClickSort}
                    >
                      Sort {sort === "desc" ? "Desc" : "Asc"}ending &nbsp;&nbsp;
                      <img height="15" src={sortImg} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 pl-md-4">
              <div className="space-img">
                <img src={launch} width="100%" alt="" />
              </div>
            </div>
            <div className="col-md-7 pr-md-5">
              <div className="d-flex d-md-none align-items-center justify-content-end mb-3">
                <select
                  value={filterValue}
                  name=""
                  id=""
                  onChange={({ target }) => {
                    props.onFilterChange(target.value);
                  }}
                >
                  <option value="launch_year">Filter by Launch Year</option>
                  <option value="flight_number">Filter by Flight Number</option>
                  <option value="rocket_type">Filter by Rocket Type</option>
                  <option value="rocket_name">Filter by Rocket Name</option>
                </select>
                <a
                  className="btn btn-solid"
                  href="javascript:void(0)"
                  onClick={onClickSort}
                >
                  Sort {sort === "desc" ? "Desc" : "Asc"}ending &nbsp;&nbsp;
                  <img height="13" src={sortImg} alt="" />
                </a>
              </div>
              {isLoading && (
                <Loader
                  className="loader"
                  type="Puff"
                  color="#00BFFF"
                  height={100}
                  width={100}
                />
              )}
              {!isLoading &&
                data &&
                data.map((e, i) => (
                  <div key={i} className="card">
                    <div className="row align-items-center">
                      <div className="col-md-2 col-3">
                        <h3 className="pl-md-2">#{e.flight_number}</h3>
                      </div>
                      <div className="col-md-7 col-5">
                        <h4>{e.mission_name}</h4>
                      </div>
                      <div className="col-md-3 col-4 text-right">
                        <div className="date">
                          {moment(e.launch_date_local).format("Do MMMM YYYY")}
                        </div>
                        <h6 className="font-weight-semibold">
                          {e.rocket.rocket_name}
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    );
}
