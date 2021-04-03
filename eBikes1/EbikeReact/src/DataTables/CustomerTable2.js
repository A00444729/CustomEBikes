import React, {useEffect} from "react";
import {ApiUtils} from "../../config/config";
// import {BaseContext} from "../../pages/context/GlobalContext";
// import Moment from "moment";
// import {Loader} from "semantic-ui-react";
import DataTable from "react-data-table-component";
// import customStyles from "./Config";
import {Api} from "../configuration/config";

const columns = [
    {
        name: "id",
        selector: "id",
        sortable: true,

    },
    {
        name: "firstName",
        selector: "firstName",
        // width:'10%',
    },
    {
        name: "lastName",
        selector: "lastName",
        sortable: true,

    },
    {
        name: "address",
        selector: "address",
        // width:'10%',
    },
    {
        name: "city",
        selector: "city",
        sortable: true,

    },
    {
        name: "province",
        selector: "province",
        // width:'10%',
    },
    {
        name: "country",
        selector: "country",
        sortable: true,

    },
    {
        name: "postal",
        selector: "postal",
        // width:'10%',
    },
    {
        name: "phone",
        selector: "phone",
        sortable: true,

    },
    {
        name: "email",
        selector: "email",
        // width:'10%',
    },
];

export default function CustomerTableReact({MasterAccountCode}) {

    const [apiData, setapiData] = React.useState([]);

    useEffect(() => {
        let data = Api.getAllCustomers();
        setapiData(data);
        // ApiUtils.bookmark(MasterAccountCode, (data) => {
        //         if(data.data.Message === "No Records Found!") {        }
        //         else{
        //             setapiData(data.data)
        //         }
        //     }
        // );

        // const response = await fetch('weatherforecast');
        // const data = await response.json();
        // this.setState({ forecasts: data, loading: false });

    }, []);

    const populateWeatherData = async() => {

    }

    return (
        <DataTable
            highlightOnHover
            columns={columns}
            data={apiData}
            // customStyles={customStyles}
            // onRowClicked={rowClicked}
            // style={{minHeight : '35vh'}}

            // fixedHeader
            // fixedHeaderScrollHeight="35vh"
            // progressComponent={<div  className="mt-2"><Loader active inline='centered'/></div>}
            // progressPending={loading}
            // responsive={true}
            // striped={true}
            // selectableRows
            // selectableRowsHighlight
            // progressPending={pending}
            // overflowY={true}
        />
    );
}
