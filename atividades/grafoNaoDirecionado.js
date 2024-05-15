
class Grafo {
    constructor(numVertices) {
      this.numVertices = numVertices;
      this.matrizAdj = Array.from({ length: numVertices }, () => Array(numVertices).fill(0));
    }
    
    adicionarAresta(origem, destino) {
      if (origem >= 0 && origem < this.numVertices && destino >= 0 
      && destino < this.numVertices) {
        this.matrizAdj[origem][destino] = 1;
        //this.matrizAdj[destino][origem] = 1; // para não direcionado
      }
    }
    
    imprimirGrafo() {
      for(let i = 0; i < this.numVertices; i++) {
        let linha = "";
        for (let j = 0; j < this.numVertices; j++) {
          linha += this.matrizAdj[i][j] + " ";
        }
        console.log(linha);
      }
    }
  }
  
  let grafo = new Grafo(4)
  
  //Aqui está sendo Assumido A = 0, B = 1, C = 2 e D = 4
  grafo.adicionarAresta(0, 3);
  grafo.adicionarAresta(0, 2);
  grafo.adicionarAresta(0, 1);
  
  
  grafo.adicionarAresta(1, 3);
  grafo.adicionarAresta(1, 2);
  grafo.adicionarAresta(1, 1);
  grafo.adicionarAresta(1, 0);
  
  
  grafo.adicionarAresta(2, 3);
  grafo.adicionarAresta(2, 1);
  grafo.adicionarAresta(2, 0);
  
  grafo.adicionarAresta(3, 2);
  grafo.adicionarAresta(3, 1);
  grafo.adicionarAresta(3, 0);
  
  grafo.imprimirGrafo();