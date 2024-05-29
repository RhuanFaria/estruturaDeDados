class Grafo {
    constructor(vertices) {
      this.vertices = vertices;
      this.lista = new Map();
    }
    novovertice(v) {
      this.lista.set(v, []);
    }
    novaaresta(v, w) {
      this.lista.get(v).push(w);
      this.lista.get(w).push(v);
    }
    Buscaprofunda(noinicial) {
      let visitado = {};
      let Ordemvisita = [];
      this.iniciobusca (noinicial, visitado, Ordemvisita);
      return Ordemvisita;
    }
    iniciobusca(vertice, visitado, Ordemvisita) {
      visitado[vertice] = true;
      Ordemvisita.push(vertice);
      let novovizinhos = this.lista.get(vertice);
      for (let i in novovizinhos) {
        let novovizinho = novovizinhos[i];
        if (!visitado [novovizinho]) {
          this.iniciobusca (novovizinho, visitado, Ordemvisita);
        }
      }
    }
    imprimir() {
      let keys = this.lista.keys();
      for (let i of keys) {
        let valor = this.lista.get(i);
        let c = "";
        for (let j of valor)
        c += j + " ";
        console.log(i + " -> " + c);
      }
    }
  }
  
  let g = new Grafo(6); 
  let vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
  for (let i = 0; i < vertices.length; i++) {
    g.novovertice(vertices[i]);
  }
  
  g.novaaresta('A', 'B');
  g.novaaresta('A', 'F');
  
  g.novaaresta('B', 'C');
  g.novaaresta('B', 'D');
  g.novaaresta('B', 'F');
  
  g.novaaresta('C', 'D');
  g.novaaresta('C', 'F');

  g.novaaresta('D', 'E');
  g.novaaresta('D', 'F');

  g.novaaresta('E', 'F');
  
  console.log("Grafo:");
  
  g.imprimir();
  
  let Buscaorganizada = g.Buscaprofunda('A');
  console.log("\nOrdem da busca em profundidade:");
  console.log(Buscaorganizada);