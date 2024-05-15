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
  
  
  adicionarAresta(listaAdj, 0, 4);
  adicionarAresta(listaAdj, 0, 1);
  
  adicionarAresta(listaAdj, 1, 5);
  adicionarAresta(listaAdj, 1, 2);;
  adicionarAresta(listaAdj, 1, 0);
  
  adicionarAresta(listaAdj, 2, 6);
  adicionarAresta(listaAdj, 2, 3);
  adicionarAresta(listaAdj, 2, 1);
  
  adicionarAresta(listaAdj, 3, 7);
  adicionarAresta(listaAdj, 3, 2);
  
  adicionarAresta(listaAdj, 4, 8);
  adicionarAresta(listaAdj, 4, 5);
  adicionarAresta(listaAdj, 4, 0);
  
  adicionarAresta(listaAdj, 5, 9);
  adicionarAresta(listaAdj, 5, 6);
  adicionarAresta(listaAdj, 5, 4);
  adicionarAresta(listaAdj, 5, 1);
  
  adicionarAresta(listaAdj, 6, 10);
  adicionarAresta(listaAdj, 6, 7);
  adicionarAresta(listaAdj, 6, 5);
  adicionarAresta(listaAdj, 6, 2);
  
  adicionarAresta(listaAdj, 7, 11);
  adicionarAresta(listaAdj, 7, 6);
  adicionarAresta(listaAdj, 7, 3);
  
  adicionarAresta(listaAdj, 8, 9);
  adicionarAresta(listaAdj, 8, 4);
  
  adicionarAresta(listaAdj, 9, 10);
  adicionarAresta(listaAdj, 9, 8);
  adicionarAresta(listaAdj, 9, 5);
  
  adicionarAresta(listaAdj, 10, 11);
  adicionarAresta(listaAdj, 10, 9);
  adicionarAresta(listaAdj, 10, 6);
  
  adicionarAresta(listaAdj, 11, 10);
  adicionarAresta(listaAdj, 11, 7);
  imprimirListaAdjacencia(listaAdj);