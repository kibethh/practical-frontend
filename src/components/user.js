import { UiModel } from "@durlabh/dframework-ui";

const userModel = new UiModel({
    api: "User",
    columns: [
        {
            field: "Name", type: "string", width: 200, required: true, min: 5, max: 30
        },
        {
            field: "DOB", type: "date", width: 100, disableFuture: true
        },
        { field: "Gender", type: "select", width: 80 },
        { field: "StateId", label: "State", type: "select", width: 80 },
        { field: "Address", type: "string", width: 80 }
    ]
});

export default userModel;