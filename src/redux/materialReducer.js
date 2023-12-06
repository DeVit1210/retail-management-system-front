import {materialApi} from "../api/api";

const SET_MATERIAL_LIST = "SET_MATERIAL_LIST"
const ADD_MATERIAL = "ADD_MATERIAL"

const initialState = {
    materials: []
}

const materialReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MATERIAL_LIST: {
            return {
                ...state,
                ...action.payload
            }
        }
        case ADD_MATERIAL: {
            return {
                ...state,
                materials: [...state.materials, action.payload.material]
            }
        }
        default: return state;
    }
}

export const getAllMaterials = () => async (dispatch) => {
    const materials = await materialApi.getAllMaterials();
    console.log(materials.response)
    dispatch(getAllMaterialsActionCreator(materials.response))
}

export const addMaterial = (formData) => async (dispatch) => {
    const material = await materialApi.addMaterial(formData.name, formData.weight, formData.purchaseCost);
    dispatch(addMaterialActionCreator(material))
}

export const getAllMaterialsActionCreator = (materials) => {
    return {
        type: SET_MATERIAL_LIST,
        payload: {materials}
    }
}

export const addMaterialActionCreator = (material) => {
    return {
        type: ADD_MATERIAL,
        payload: {material}
    }
}

export default materialReducer

