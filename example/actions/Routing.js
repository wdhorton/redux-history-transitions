import {
  ENTITY_NOT_FOUND,
} from '../constants/ActionTypes';

export default {

  entityNotFound() {
    return {
      type: ENTITY_NOT_FOUND,
    }
  }

}