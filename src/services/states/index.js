
let currentHymnal = {};

function setCurrentHymnal(hymnal) {
  currentHymnal = hymnal;
}
function getCurrentHymnal() {
  return currentHymnal;
}

function chooseDefaultHymnal () {

}

export default {
  setCurrentHymnal,
  getCurrentHymnal,
};
