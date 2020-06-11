import { ActionTypes } from "./Types";
import { data as phData } from "./placeholderData";

export const loadData = (dataType) => ({
    type: ActionTypes.DATA_LOAD,
    playload: {
        dataType: dataType,
        data: phData[dataType]
    }
});