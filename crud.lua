
function exibirMenu()
    print("\n--- Gerenciador de Tarefas ---")
    print("1. Adicionar tarefa")
    print("2. Listar tarefas")
    print("3. Remover tarefa")
    print("4. Sair")
    print("-----------------------------")
    print("Escolha uma opção: ")
end


function adicionarTarefa(tarefas)
    print("Digite a descrição da tarefa: ")
    local tarefa = io.read()
    table.insert(tarefas, tarefa)
    print("Tarefa adicionada com sucesso!")
end


function listarTarefas(tarefas)
    if #tarefas == 0 then
        print("Não há tarefas na lista.")
    else
        print("\n--- Lista de Tarefas ---")
        for i, tarefa in ipairs(tarefas) do
            print(i .. ". " .. tarefa)
        end
    end
end


function removerTarefa(tarefas)
    if #tarefas == 0 then
        print("Não há tarefas para remover.")
    else
        print("Digite o número da tarefa que deseja remover: ")
        listarTarefas(tarefas)
        local numero = tonumber(io.read())
        
        if numero and numero >= 1 and numero <= #tarefas then
            table.remove(tarefas, numero)
            print("Tarefa removida com sucesso!")
        else
            print("Número inválido.")
        end
    end
end


function main()
    local tarefas = {}
    local sair = false
    
    while not sair do
        exibirMenu()
        local opcao = tonumber(io.read())
        
        if opcao == 1 then
            adicionarTarefa(tarefas)
        elseif opcao == 2 then
            listarTarefas(tarefas)
        elseif opcao == 3 then
            removerTarefa(tarefas)
        elseif opcao == 4 then
            print("Saindo... Até logo!")
            sair = true
        else
            print("Opção inválida! Tente novamente.")
        end
    end
end


main()
