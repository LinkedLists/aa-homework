
const selectLocation = (city, jobs) => {
  return { //return pojo
    type: "SWITCH_LOCATION",
    city,
    jobs,
  }
}


window.selectLocation = selectLocation
export default selectLocation;