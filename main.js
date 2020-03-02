

var vm = new Vue ({
    el: '#llama',
    data: {
        header: '10 facts about llamas',
        items: [
            {facts: 'lamas are vegetarians'},
            {facts: 'llamas do not bite'},
            {facts: 'llamas spit when they are agitated'},
            {facts: 'llamas can live to be 20 years old'},
            {facts: 'a baby llama is called a Cria'},
            {facts: 'a group of llamas is called a herd'},
            {facts: 'llamas kick and neck wrestle each other'},
            {facts: 'if llamas are overloaded they will lay down or refuse to move'},
            {facts: 'llamas are easy to train'},
            {facts: 'llamas can easily navigate rocky terrain'},
    ],
    noFact: false,
    }
})
