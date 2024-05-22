function bfs(grafo, noInicial) {
    let visitados = {};
  
    let fila = [];
  
    fila.push(noInicial);
  
    visitados[noInicial] = true;
  
    while (fila.length > 0) {
      let noAtual = fila.shift();
  
      console.log(noAtual);
  
      let nosAdjacentes = grafo[noAtual];
  
      for (let i = 0; i < nosAdjacentes.length; i++) {
        let noAdjacente = nosAdjacentes[i];
  
        if (!visitados[noAdjacente]) {
          visitados[noAdjacente] = true;
  
          fila.push(noAdjacente);
        }
      }
    }
  }
  
  //Exemplo de grafo representado como um objeto
  
  let grafo = {
    0: [1, 2, 5],
  
    1: [0, 2],
  
    2: [0, 1, 3, 4],
  
    3: [2, 4, 5],
  
    4: [2, 3],
  
    5: [0, 3],
  };
  
bfs(grafo, 0); // Começa a busca a partir do nó '0'
  
  
  