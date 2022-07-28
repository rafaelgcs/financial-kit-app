import { configureStore } from '@reduxjs/toolkit'
import app_store from '../modules/app/store/app_store'

export default configureStore({
  reducer: {
    app: app_store
  },
})