import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import { Header } from "./Header";
import { Main } from "./Main";
import { get } from "./actions";
import { SET_PARAMS } from "./constants/actionTypes";
import { connect } from "react-redux";

function App(props) {
  const handleSortChange = (sort) => {
    console.log('sotr in app', sort)
    props.onParamsSet({ order: sort });
    props.onReLoad(props.params);
  };
  const handleFilterChange = (filter) => {
    console.log("filter in app", filter);
    props.onParamsSet({ sort: filter });
    props.onReLoad(props.params);
  };
  return (
    <>
      <Header
        onReload={() => {
          props.onReLoad(props.params);
        }}
      ></Header>
      <Main
        isLoading={props.isLoading}
        params={props.params}
        data={props.data}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      ></Main>
    </>
  );
}

const mapStateToProps = ({ space }) => ({
  data: space.data,
  params: space.params,
  isLoading: space.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  onReLoad: (params) => dispatch(get(params)),
  onParamsSet: (params) => dispatch({ type: SET_PARAMS, params }),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
