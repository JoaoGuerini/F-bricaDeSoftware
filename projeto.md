<img src='/img/logo.png' alt='logo da empresa' width='50px' heidth='50px'/>

# *CHEF VIRTUAL*

# PROJETO DE SOFTWARE

## *Stakeholders*
|NOME|CARGO|E-MAIL|
|:---|:---|:---|
|João Pedro Guerini Pasquali|Gerente de Projeto|guerini.joao@estudante.ifro.edu.br|
|João Pedro Bento de Andrade|Programador|joao.a@estudante.ifro.edu.br|
|João Vitor Lopes Almendra|Designer|wagner.ferreira@ifro.edu.br|
|Ana Isabely R. Belchior|Programador|ana.isabely@estudante.ifro.edu.br|
|Camille P. Pagani Dias|Programador|camille.dias@estudante.ifro.edu.br|
|Júlia Pereira Da Mata|Gestão de Equipe|julia.p@estudante.ifro.edu.br|


# Sumário

* [RESUMO DO PROJETO](#resumo-do-projeto)
* [INTRODUÇÃO](#introdução)
  * [PROPÓSITO DESTE DOCUMENTO](#propósito-deste-documento)
* [DESCRIÇÃO GERAL](#descrição-geral)
  * [USUÁRIOS DO SISTEMA](#usuários-do-sistema)
  * [ABRANGÊNCIA E SISTEMAS SIMILARES](#abrangência-e-sistemas-similares)
  * [SUPOSIÇÕES E DEPENDÊNCIAS](#suposições-e-dependências)
* [METODOLOGIA ADOTADA NO DESENVOLVIMENTO](#metodologia-adotada-no-desenvolvimento)
* [REQUISITOS DO SOFTWARE](#requisitos-do-software)
  * [REQUISITOS FUNCIONAIS](#requisitos-funcionais)
  * [REQUISITOS NÃO FUNCIONAIS](#requisitos-não-funcionais)
* [PROTOTIPAGEM](#prototipagem)
* [DIAGRAMA DE CASOS DE USO](#diagrama-de-casos-de-uso)
* [DIAGRAMA DE CLASSES](#diagrama-de-classes)
* [REFERÊNCIAS](#referências)


# RESUMO DO PROJETO
| ITEM | DESCRIÇÃO|
|:---|:---|
| NOME DO PROJETO | Chef Virtual |
| GERENTE DO PROJETO | João Pedro Guerini Pasquali |
| PRINCIPAL OBJETIVO | Facilitar o compartilhamento de receitas entre usuários na plataforma, promovendo uma comunidade colaborativa de culinária. |
| BENEFÍCIOS ESPERADOS |* Compartilhamento de Conhecimento;<br/>* Economia de Tempo;<br/>* Conexão Cultural;<br/>* Estímulo à Criatividade;<br/>* Conexões Sociais.|
| INÍCIO E TÉRMINO PREVISTOS | 14/03/2024 - 07/12/2024 |

[ [INÍCIO](#fibonacci-management-system) ]

# INTRODUÇÃO

## PROPÓSITO DESTE DOCUMENTO

Este documento destina-se aos clientes, engenheiros, gerentes e demais stakeholders deste projeto. O propósito deste documento é apresentar a descrição dos serviços e funções que o sistema **_Fibonacci Management System_** deve prover, bem como as suas restrições de operação e propriedades gerais, a fim de ilustrar uma descrição detalhada do sistema para um auxílio durante as etapas de análise, projeto e testes. O documento especifica todos os requisitos funcionais e não funcionais do sistema e contém a prototipagem, além de diagramas UML que foram construídos levando-se em conta as funcionalidades identificadas durante a fase de concepção do sistema.

[ [INÍCIO](#fibonacci-management-system) ]

# DESCRIÇÃO GERAL

## Usuários do sistema
|USUÁRIO|DESCRIÇÃO|
|:---|:---|
|**Usuário Padrão:**|Realizam as tarefas comuns a todos os usuários, tal como: logar e enviar mensagens. Todos demais usuários estendem as funcionalidades do UsuárioPadrão|
|**Administrador:**|Responsáveis pelo gerenciamento das entidades pertinentes à instituição e pela alocação de outros administradores|
|**Coordenador:**|Responsáveis pela aprovação de disciplinas, turmas e matrículas realizadas pela secretaria do curso, além de ser responsável pela alocação da secretaria|
|**Secretaria:**|Responsáveis pelo cadastramento de disciplinas e turmas, pela alocação de professores e monitores de um curso e matrículas dos alunos|
|**Professor:**|Responsáveis pela criação do programa da disciplina através de ferramentas de planejamento e criação de atividades|
|**Aluno:**|Seguem o programa da disciplina criada pelo professor, tendo como apoio ferramentas de comunicação, tal como: chat e fórum|


[ [INÍCIO](#fibonacci-management-system) ]

# Metodologia Adotada no Desenvolvimento


[ [INÍCIO](#fibonacci-management-system) ]

# Requisitos do Software

A especificação dos requisitos deste documento deve seguir as recomendações da norma IEEE Std-830-1998, levando em conta as recomentações do documento de [características dos requisitos](caracteristicas_requisitos.md).

## Requisitos Funcionais

A tabela a seguir contém a relação dos Requisitos Funcionais elicitados, com as colunas: identificador, nome, descrição e prioridade:

| IDENTIFICADOR | NOME | DESCRIÇÃO |
:---|:---|:---|
|RNF-001 |Cadrastar Usuario|O usuario deve conseguir se cadastrar no site com email e senha.|
|RNF-002 |Efetuar Login|Após o cadastro, o usuário deve conseguir efetuar login.|
|RNF-003 |Publicar Receitas|Deve existir uma funcionalidade caso um usuário queira publicar uma receita.|
|RNF-004 |Avaliar Receitas|Um usuário deve conseguir avaliar uma receita (opcional).|
|RNF-005 |Modificar Receitas|O usuário deverá conseguir modificar sua receita publicada caso necessário.|
|RNF-006 |Remover Receitas|O usuário poderá excluir suas receitar publicadas caso queira.|
|RNF-007 |Comentar|O software deve permitir que o usuário comente em receitas públicas.|
|RNF-008 |Denunciar Receitas|O software terá a funcionalidade de denunciar receitas, caso sejam inadequadas/impróprias.|
|RNF-009 |Buscar Receitas|O software terá a funcionalidade de buscar receitas.|
|RNF-010 |Favoritar Receitas|O software terá a função de favoritas receitas de seu agrado.|
|RNF-011 |Restringir palavras inadequadas|O sistema deverá possuir uma filtragem para palavras inadequadas.|
|RNF-012 |Criar listas|O usuário poderá criar uma lista e adicionar as receitas de sua preferencia para armazena-las de uma forma organizada. |
|RNF-013 |Classificar dificuldade de receitas|Classificar receitas por seu grau de dificuldade.|
|RNF-014 |Compartilhar receitas|O software deve possuir a funcionalidade de compartilhamento de receitas.|
|RNF-015 |Filtrar receitas|O usuário poderá filtrar as receitas que quer visualizar.|
|RNF-016 |Ocultar Receitas|O usuário poderá ocultar suas receitas públicadas caso queira.|
|RNF-017 |Excluir Receitas|O usuário poderá excluir suas receitas públicadas caso queira.|
|RNF-018 |Atualizar Recomendações|Quando o site é atualizado, ele deve mostrar receitas diferentes na página inicial.|
|RNF-019 |Deslogar Conta|O usuário poderá sair da conta caso queira.|
|RNF-020 |Excluir Conta|O usuário poderá excluir sua conta caso queira.|
|RNF-021 |Manter Login|O software deve continuar com o login efetuado após a saida do site. |
|RNF-022 |Visualizar Histórico|O software deve possuir a funcionalidade de visualizar as receitas que foram visualizadas anteriormente.|    




## Requisitos Não Funcionais
A tabela a seguir contém a relação com os Requisitos Não Funcionais identificados, contendo identificador, nome, descrição e prioridade:

| IDENTIFICADOR | NOME | DESCRIÇÃO |
|:---|:---|:---|
|RNF-001 |Cadrastar Usuario|Descreva aqui as informações sobre o requisito |
|RNF-002 |Efetuar Login|Descreva aqui as informações sobre o segundo requisito |



[ [INÍCIO](#fibonacci-management-system) ]


# Prototipagem

[Protótipo criado no FIGMA em 2022 por estudantes](https://www.figma.com/file/iNC7wyX9zP7Kmn3BhiCFGf/Fals6Hood-(Prot%C3%B3tipo-criado-por-estudantes-em-2022)?node-id=0%3A1&t=B16hgeZP3MSURCCa-1)

![Imagem do Protótipo](/img/home.png)

[ [INÍCIO](#fibonacci-management-system) ]


# Diagrama de Casos de Uso


![Diagrama de Casos de Uso](/img/use_case_placas.png)

[ [INÍCIO](#fibonacci-management-system) ]

# Diagrama de Classes
[ [Imagem do Protótipo](./img/print.jpg) ]

[ [INÍCIO](#fibonacci-management-system) ]


# REFERÊNCIAS

Esta subseção apresenta as referências aos documentos que utilizamos no auxílio à construção deste documento.
* [UML](https://www.omg.org/spec/UML/2.5/About-UML/)
* [Práticas para Especificação de Requisitos IEEE-830](https://ieeexplore.ieee.org/document/720574)
