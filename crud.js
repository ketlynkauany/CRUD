class SistemaCRUD {
    constructor() {
      this.items = [];
    }
  
    // Função para exibir o menu
    exibirMenu() {
      console.log("\n// INI DO MENU");
      console.log("          Sistema NOME_DE_SEU_SISTEMA");
      console.log("          ===========================");
      console.log("         1. Criar");
      console.log("         2. Listar");
      console.log("         3. Atualizar");
      console.log("         4. Excluir");
      console.log("         5. Sair");
      console.log("\n         Entre com sua opção:");
    }
  
    // Função para criar um item
    criar() {
      console.log("\nVocê escolheu: Criar");
      const nome = prompt("Digite o nome do item a ser criado: ");
      if (nome) {
        this.items.push(nome);
        console.log(`Item '${nome}' criado com sucesso!`);
      } else {
        console.log("Nome inválido! Item não criado.");
      }
    }
  
    // Função para listar os itens
    listar() {
      console.log("\nVocê escolheu: Listar");
      if (this.items.length > 0) {
        console.log("Itens cadastrados:");
        this.items.forEach((item, index) => {
          console.log(`${index + 1}. ${item}`);
        });
      } else {
        console.log("Nenhum item cadastrado.");
      }
    }
  
    // Função para atualizar um item
    atualizar() {
      console.log("\nVocê escolheu: Atualizar");
      const nomeAntigo = prompt("Digite o nome do item a ser atualizado: ");
      const index = this.items.indexOf(nomeAntigo);
      if (index !== -1) {
        const nomeNovo = prompt("Digite o novo nome: ");
        if (nomeNovo) {
          this.items[index] = nomeNovo;
          console.log(`Item '${nomeAntigo}' atualizado para '${nomeNovo}' com sucesso!`);
        } else {
          console.log("Nome inválido! Atualização cancelada.");
        }
      } else {
        console.log("Item não encontrado.");
      }
    }
  
    // Função para excluir um item
    excluir() {
      console.log("\nVocê escolheu: Excluir");
      const nome = prompt("Digite o nome do item a ser excluído: ");
      const index = this.items.indexOf(nome);
      if (index !== -1) {
        this.items.splice(index, 1);
        console.log(`Item '${nome}' excluído com sucesso!`);
      } else {
        console.log("Item não encontrado.");
      }
    }
  
    // Função principal para controlar o fluxo
    iniciar() {
      let opcao;
  
      do {
        this.exibirMenu();
        opcao = prompt(); // Recebe a opção do usuário
  
        switch (opcao) {
          case '1':
            this.criar();
            break;
          case '2':
            this.listar();
            break;
          case '3':
            this.atualizar();
            break;
          case '4':
            this.excluir();
            break;
          case '5':
            console.log("\nVocê escolheu: Sair");
            console.log("Saindo do sistema...");
            break;
          default:
            console.log("\nOpção inválida! Tente novamente.");
        }
      } while (opcao !== '5');
    }
  }
  
  // Iniciando a aplicação
  const sistema = new SistemaCRUD();
  sistema.iniciar();
  