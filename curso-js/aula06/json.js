const todos = [
    {
      id: 1,
      description: "Estudar programação",
      isCompleted: false,
    },
    {
      id: 2,
      description: "Ler",
      isCompleted: true,
    },
    {
      id: 3,
      description: "Treinar",
      isCompleted: true,
    },
  ];
  
  const todosJSON = JSON.stringify(todos); // lista para json
  const todosList = JSON.parse(todosJSON); //json para lista
  
  console.log(todosList);