class Grafo {
    constructor(numVertices) {
      this.numVertices = numVertices;
      this.matrizAdj = Array.from({ length: numVertices }, () => Array(numVertices).fill(0));
    }
  
    adicionarAresta(origem, destino) {
      this.matrizAdj[origem][destino] = 1;
      //this.matrizAdj[destino][origem] = 1; // para grafos não direcionados
    }
  
    imprimirGrafo() {
      for (let i = 0; i < this.numVertices; i++) {
        let linha = "";
        for (let j = 0; j < this.numVertices; j++) {
          linha += this.matrizAdj[i][j] + " ";
        }
        console.log(linha);
      }
    }
  }
  
  // Exemplo de uso
  let grafo = new Grafo(5);
  
  grafo.adicionarAresta(0, 1);
  grafo.adicionarAresta(0, 2);
  grafo.adicionarAresta(1, 2);
  grafo.adicionarAresta(2, 3);
  grafo.adicionarAresta(0, 4);
  
  grafo.imprimirGrafo();