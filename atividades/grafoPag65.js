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
        adjacencias += `${atual.vertice} ->`;
        atual =  atual.prox;
      }
      console.log(`Vértice ${i}: ${adjacencias}`);
    }
  }
  
  let numVertices = 4;
  let listaAdj = Array.from({length: numVertices}, () => null);
  
  
  adicionarAresta(listaAdj, 0, 2);
  adicionarAresta(listaAdj, 0, 1);
  adicionarAresta(listaAdj, 0, 5);
  adicionarAresta(listaAdj, 0, 6);
  
  adicionarAresta(listaAdj, 1, 0);
  
  adicionarAresta(listaAdj, 2, 0);

  
  adicionarAresta(listaAdj, 3, 4);
  adicionarAresta(listaAdj, 3, 5);
  
  adicionarAresta(listaAdj, 4, 3);
  adicionarAresta(listaAdj, 4, 5);
  adicionarAresta(listaAdj, 4, 6);
  
  adicionarAresta(listaAdj, 5, 4);
  adicionarAresta(listaAdj, 5, 0);
  adicionarAresta(listaAdj, 5, 3);

  adicionarAresta(listaAdj, 6, 4);
  adicionarAresta(listaAdj, 6, 0);
  
  adicionarAresta(listaAdj, 7, 8);
  
  adicionarAresta(listaAdj, 8, 7);
  
  adicionarAresta(listaAdj, 9, 10);
  adicionarAresta(listaAdj, 9, 11);
  adicionarAresta(listaAdj, 9, 12);
  
  adicionarAresta(listaAdj, 10, 9);
  
  adicionarAresta(listaAdj, 11, 9);
  adicionarAresta(listaAdj, 11, 12);

  adicionarAresta(listaAdj, 12, 11);
  adicionarAresta(listaAdj, 12, 9);
  imprimirListaAdjacencia(listaAdj);