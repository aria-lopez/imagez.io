import {
    UPDATE_IMAGES,
    UPDATE_COMPRESSED_IMAGES,
    UPDATE_IMAGE_URLS,
    UPDATE_SELECTED_IMAGE,
} from '../types/imageTypes.js';

export const imagesReducer = (state = [], action) => {
    switch(action.type) {
        case UPDATE_IMAGES:
            return [...action.payload.data]
        default: return state;
    }
}

export const compressedImagesReducer = (state = [], action) => {
    switch(action.type) {
        case UPDATE_COMPRESSED_IMAGES:
            return [...action.payload.data]
        default: return state;
    }
}

export const imageUrlsReducer = (state = [], action) => {
    switch(action.type) {
        case UPDATE_IMAGE_URLS:
            return [...action.payload.data]
        default: return state;
    }
}

export const selectedImageReducer = (state = [], action) => {
    switch(action.type) {
        case UPDATE_SELECTED_IMAGE:
            return [...action.payload.data]
        default: return state;
    }
}
