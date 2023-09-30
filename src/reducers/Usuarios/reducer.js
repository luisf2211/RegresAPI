const reducer = (state, action) => {
    switch (action.type) {
        
        case 'AGREGAR_USUARIOS': 
            return {...state, usuarios: action.data}

        default:
            return  {state};
    }
}

export default reducer;