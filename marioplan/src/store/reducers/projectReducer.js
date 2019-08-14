const initState = {
    projects: [
        {id: '1', title: 'Courage need not be remembered', content: 'Kill Gannon'},
        {id: '2', title: 'Spartans Never die', content: 'They just go MIA'},
        {id: '3', title: 'This is Amazing', content: 'How to get gold medals'},
        {id: '4', title: 'Uldren Sov', content: 'is mine'}
    ]
}
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_FAIL':
            console.log('create project error:', action.err) //err passed in from action
            return state;
        default: 
            return state;
    }
}

export default projectReducer;