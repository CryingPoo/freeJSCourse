const MODAL_STORAGE = "modalVersion"
const MODAL_VER = 1;

// const checkModalData = () => {
//     const loadedVersion = localStorage.getItem(MODAL_STORAGE);
//     console.log(loadedVersion);
//     if(loadedVersion === null){
//         initModalDataSet();
//         checkModalVersion();
//     }else{
//         checkModalVersion();
//     }
// }

// const initModalDataSet = () => {localStorage.setItem(MODAL_STORAGE, 0)}

// const checkModalVersion = () => {
//     const loadedVersion = localStorage.getItem(MODAL_STORAGE);
//     if(parseInt(loadedVersion) !== MODAL_VER){
//         showModal();
//         localStorage.setItem(MODAL_STORAGE, MODAL_VER);
//     }
// }

// const showModal = () => {
//     $(window).on('load',function(){
//         $('#exampleModal').modal('show');
//     });
// }

// const init = () => {
//     checkModalData();
// }

// init();


const showModalIfNotSeen = () => {
    const loadedVersion = localStorage.getItem(MODAL_STORAGE);
    if(loadedVersion === null || parseInt(loadedVersion) !== MODAL_VER){
        localStorage.setItem(MODAL_STORAGE, MODAL_VER);
        showModal();
    }
}

const showModal = () => {
    $(window).on('load',function(){
        $('#exampleModal').modal('show');
    });
}

const init = () => {
    showModalIfNotSeen();
}

init();
