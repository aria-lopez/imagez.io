import {
    UPDATE_IMAGES,
    UPDATE_COMPRESSED_IMAGES,
    UPDATE_IMAGE_URLS,
    UPDATE_SELECTED_IMAGE,
} from '../actions/imageActions';

export const updateImages = (data) => dispatch => {
    return {
        type: UPDATE_IMAGES,
        payload: {
            data,
        }
    }
};

export const updateCompressedImages = (data) => dispatch => {
    return {
        type: UPDATE_COMPRESSED_IMAGES,
        payload: {
            data,
        }
    }
}

export const updateImageUrls = (data) => dispatch => {
    return {
        type: UPDATE_COMPRESSED_IMAGES,
        payload: {
            data,
        }
    }
}

export const updateSelectedImage = (data) => dispatch => {
    return {
        type: UPDATE_SELECTED_IMAGE,
        payload: {
            data,
        }
    }
}
