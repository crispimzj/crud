// Laço de repetição

// let nomes = ["Ana Clara", "Denise Martins", "Rayssa Giovanelly", "Roger Alcantara"];

// nomes.forEach(nome => {
//     console.log(nome);
// });


// Enquanto
// Enquanto a condição for verdadeira, o laço continuará se repetindo

// let nome = prompt("Digite o nome do usuário:");

// while (nome !== "Thiago") {
//     console.log("Insira o nome correto!");
//     nome = prompt("Digite o nome do usuário novamente:");
// }

// let tarefas = ["Estudar", "Lavar a louça", "Ir para a aula"];
// let opcao = -1;

// while (opcao !== 0) {
//     opcao = Number(prompt(
//         "==== MINHA TODO LIST ====\n\n" +
//         "1 - Cadastrar tarefa\n" +
//         "2 - Listar tarefas\n" +
//         "3 - Buscar tarefa\n" +
//         "4 - Atualizar tarefa\n" +
//         "5 - Excluir tarefa\n" +
//         "6 - Filtrar tarefas\n" +
//         "7 - Adicionar tarefa no início\n" +
//         "8 - Remover primeira tarefa\n" +
//         "9 - Remover última tarefa\n" +
//         "0 - Sair\n\n" +
//         "Escolha uma opção:"
//     ));

// }
//   switch (opcao) {
//     case "1":
//          tarefas.push(prompt("Nome da tarefa:"));
//         break;

// case "2":
// if (tarefas.length == 0) {
//     alert("Lista vazia!");
// } else {
// tarefas.forEach((t, i) => alert((i + 1) + " - " + t));
// }
// break;

// case "3": {
// let nome = prompt("Tarefa para buscar:");
// if (tarefas.includes(nome)) {
// alert("Tarefa encontrada!");
// } else {
// alert("Tarefa não encontrada!");
// }
// break;
// }

// case "4": {
//     let nome = prompt("Tarefa atual:");
//     let i = tarefas.indexOf(nome);

//     if (i != -1) {
//     tarefas[i] = prompt("Novo nome:");
//     alert("Tarefa atualizada!");
//     } else {
//     alert("Tarefa não encontrada!");
//     }
//     break;
//     }

//     case "5": {
//     let nome = prompt("Tarefa para excluir:");
//     let i = tarefas.findIndex(t => t == nome);

//     if (i != -1) {
//     tarefas.splice(i, 1);
//     alert("Tarefa excluída!");
//     } else {
//     alert("Tarefa não encontrada!");
//     }
//     break;
//     }

//     case "6": {
//   let palavra = prompt("Digite uma palavra:");
//     let resultado = tarefas.filter(t =>
//  t.toLowerCase().includes(palavra.toLowerCase())
//   );

//  alert(resultado.length > 0 ? resultado.join("\n") : "Nenhuma tarefa encontrada!");
//        break;
//  }

// case "7": {
//  let op = prompt("1 - Adicionar no início\n2 - Remover primeira\n3 - Remover última");

// if (op == "1") {
//          tarefas.unshift(prompt("Nome da tarefa:"));
//  } else if (op == "2") {
//         tarefas.shift();
//   } else if (op == "3") {
//     tarefas.pop();
//  } else {
//  alert("Opção inválida!");
//  }
//    break;
//  }

//   case "0":
//    alert("Programa encerrado!");
//       break;

//     default:
//     alert("Opção inválida!");
//     }

//  while (opcao != "0");

let tarefas = ["Estudar JavaScript","Fazer exercícios","Ler um livro"];
let opcao;

do {
    opcao = prompt(
        "1 - Cadastrar tarefa\n" +
        "2 - Listar tarefas\n" +
        "3 - Buscar tarefas\n" +
        "4 - Atualizar tarefas\n" +
        "5 - Excluir tarefa\n" +
        "6 - Filtrar tarefa\n" +
        "7 - Organizar tarefa\n" +
        "0 - Sair"
        
    );

    switch (opcao) {
case "1":
            let nova = prompt("Nome da tarefa:");
            tarefas.push(nova);
            break;

case "2":
    if (tarefas.length == 0) {
    alert("Lista vazia!");
    } else {
    tarefas.forEach((t, i) => {
    alert((i + 1) + " - " + t);
    });
    }
    break;

case "3": {
    let nome = prompt("Tarefa para buscar:");
    let encontrada = tarefas.find(t => t == nome);

    if (encontrada) {
    alert("Tarefa encontrada: " + encontrada);
    } else {
    alert("Tarefa não encontrada!");
    }
    break;
    }

case "4": {
    let nome = prompt("Tarefa atual:");
    let i = tarefas.indexOf(nome);

    if (i != -1) {
    tarefas[i] = prompt("Novo nome:");
    alert("Tarefa atualizada!");
    } else {
    alert("Tarefa não encontrada!");
    }
    break;
    }

case "5": {
    let nome = prompt("Tarefa para excluir:");
    let i = tarefas.findIndex(t => t == nome);

    if (i != -1) {
    tarefas.splice(i, 1);
    alert("Tarefa excluída!");
    } else {
    alert("Tarefa não encontrada!");
    }
    break;
    }

case "6": {
    let palavra = prompt("Digite uma palavra:");
    let resultado = tarefas.filter(t =>
    t.toLowerCase().includes(palavra.toLowerCase())
     );

    if (resultado.length > 0) {
        alert(resultado.join("\n"));
    } else {
    alert("Nenhuma tarefa encontrada!");
        }
        
break;
        }

case "7": {
            let op = prompt(
                "1 - Adicionar no início\n" +
                "2 - Remover primeira\n" +
                "3 - Remover última"
    );

    if (op == "1") {
    tarefas.unshift(prompt("Nome da tarefa:"));
    } else if (op == "2") {
    if (tarefas.length > 0) {
    tarefas.shift();
    } else {
    alert("Lista vazia!");
    }
    } else if (op == "3") {
    if (tarefas.length > 0) {
    tarefas.pop();
    } else {
    alert("Lista vazia!");
    }
     } else {
     alert("Opção inválida!");
    }
    break;
    }

    case "0":
    alert("Programa encerrado!");
     break;

    default:
    alert("Opção inválida!");
    }

} while (opcao != "0");
