import { Module } from '@nuxt/types'
import trackSrrPageLoad from './hooks/trackSrrPageLoad'

const serverSideTracking: Module = async function (options) {
  console.log('ovo je init ************************')
  this.nuxt.hook('render:routeDone', trackSrrPageLoad)
}

export default serverSideTracking
