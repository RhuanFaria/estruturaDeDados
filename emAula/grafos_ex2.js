class Adjacencia {
    constructor(vertice, peso) {
      this.vertice = vertice;
      this.peso = peso;
      this.prox = null;
    }
  }
  
  function adicionarAresta(listaAdj, origem, destino, peso) {
    let novaAdjacencia = new Adjacencia(destino, peso);
    novaAdjacencia.prox = listaAdj[origem];
    listaAdj[origem] = novaAdjacencia;
  }
  
  function imprimirListaAdjacencia(listaAdj) {
    for (let i = 0; i < listaAdj.length; i++) {
      let atual = listaAdj[i];
      let adjacencias = "";
      while (atual) {
        adjacencias += `${atual.vertice}(${atual.peso}) ->`;
        atual =  atual.prox;
      }
      console.log(`Vértice ${i}: ${adjacencias}`);
    }
  }
  
  let numVertices = 6;
  let listaAdj = Array.from({length: numVertices}, () => null);
  
  adicionarAresta(listaAdj, 1, 2, 20);
  adicionarAresta(listaAdj, 1, 3, 4);
  adicionarAresta(listaAdj, 1, 5, 23);

  adicionarAresta(listaAdj, 2, 1, 20);
  adicionarAresta(listaAdj, 2, 3, 17);
  adicionarAresta(listaAdj, 2, 4, 58);

  adicionarAresta(listaAdj, 3, 1, 23);
  adicionarAresta(listaAdj, 3, 5, 15);
 
  adicionarAresta(listaAdj, 4, 2, 58);
  adicionarAresta(listaAdj, 4, 3, 3);

  adicionarAresta(listaAdj, 5, 1, 23);
  adicionarAresta(listaAdj, 5, 3, 15);

  imprimirListaAdjacencia(listaAdj);