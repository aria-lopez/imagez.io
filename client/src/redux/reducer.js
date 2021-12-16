import { combineReducers } from 'redux';
import {
    imagesReducer,
    compressedImagesReducer,
    imageUrlsReducer,
    selectedImageReducer
} from './reducers/imageReducers.js';

export default combineReducers({
    imagesReducer,
    compressedImagesReducer,
    imageUrlsReducer,
    selectedImageReducer
});
