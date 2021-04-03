export const Api = {
    getAllCustomers : async(handler) => {
        // const response = await fetch('https://localhost:44379/Customers/GetCustomerInfo');
        // const data = await response.json();
        // return data.then(x => {
        //     x.json();
        // });

        //Another Domain
        // fetch('https://localhost:44379/Customers/GetCustomerInfo').then(handler);
        // fetch('https://localhost:44381/GetCustomerInfo').then(handler);

        fetch('/Customers/GetCustomerInfo').then(handler);

    }
}