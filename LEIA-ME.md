# Agenda da Turma

Site estático (HTML + JavaScript) com login do Firebase. Quem entra vê o calendário; só quem tem perfil de editor altera.
Funciona no Netlify sem build.

## Como o acesso funciona

- **Login:** e-mail e senha do Firebase Authentication. As contas são criadas por quem gerencia o projeto.
- **Perfil:** coleção `roles` no Firestore. Cada documento tem como ID o UID da pessoa e um campo `role`:
  - `viewer`: só vê.
  - `editor`: vê e altera (cadastrar, editar, excluir, cancelar uma data).
- **Sem documento em `roles`, a pessoa entra mas não vê nada.** Isso vale mesmo se alguém criar conta por conta própria.
- **Mudou o `role`?** A página atualiza na hora, sem a pessoa sair e entrar.
- **Tirar o acesso:** apague o documento em `roles` (ou desative o usuário em Authentication).

Escolhi a coleção `roles` em vez de custom claims porque dá para editar direto no Console, sem script nem servidor.

## Passo a passo

### 1. Criar o projeto no Firebase
1. Em https://console.firebase.google.com, crie um projeto.
2. **Authentication > Sign-in method:** ative **E-mail/senha**.
3. **Firestore Database > Criar banco de dados:** modo produção. Região sugerida: `southamerica-east1` (São Paulo).
4. **Firestore > Regras:** cole o conteúdo de `firestore.rules` e publique.
5. **Configurações do projeto > Seus apps > Web (`</>`):** registre um app e copie o objeto de configuração para `firebase-config.js`.

### 2. Criar as contas e os perfis
1. **Authentication > Users > Add user:** informe e-mail e senha. Copie o **UID** da pessoa.
2. **Firestore > Iniciar coleção** `roles` (só na primeira vez):
   - ID do documento: o **UID** copiado.
   - Campo `role` (string): `editor` ou `viewer`.
3. Comece por você, como `editor`. Repita para cada colega.

Dica: os colegas podem usar "Esqueci a senha" na tela de login para criar a própria senha. Crie a conta com uma senha provisória qualquer.

### 3. Publicar no Netlify
1. Preencha o `firebase-config.js`.
2. Abra https://app.netlify.com/drop e arraste a pasta com `index.html` e `firebase-config.js`.
3. Em **Authentication > Settings > Authorized domains**, adicione o endereço que o Netlify gerou (ex.: `minha-turma.netlify.app`).

Para atualizar o site, arraste a pasta de novo (ou conecte um repositório Git).

### Testar no computador
Abrir o `index.html` com duplo clique não funciona (o navegador bloqueia módulos em `file://`). Use um servidor local, por exemplo `npx serve` dentro da pasta.

## Arquivos

| Arquivo | Para quê |
|---|---|
| `index.html` | O site inteiro (visual, calendário e login) |
| `firebase-config.js` | Sua configuração do Firebase (você preenche) |
| `firestore.rules` | Regras de segurança (você cola no Console) |
