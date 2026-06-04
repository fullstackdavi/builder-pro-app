# 🚀 Instruções de Deploy na Vercel — Pack Builder IA ®

Este projeto está otimizado para deploy instantâneo na **Vercel** usando as melhores práticas de entrega de conteúdo (SPAs estáticas), com compressão, imagens e roteador configurados.

---

## ⚡ Passo a Passo para Deploy Simples

### Opção 1: Pela Interface Web da Vercel (Recomendado)

1. Faça o download ou envie o seu código para um repositório no **GitHub**, **GitLab** ou **Bitbucket**.
2. Acesse o painel da [Vercel](https://vercel.com/) e faça login.
3. Clique em **"Add New"** > **"Project"**.
4. Importe o repositório que você criou.
5. Em **Configure Project**, a Vercel detectará automaticamente as configurações devido ao nosso arquivo `vercel.json` pré-configurado:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Clique em **"Deploy"**! 🎉

Seu site estará online em menos de 1 minuto com SSL gratuito e entrega via CDN global de alta performance.

---

## 🛠️ Opção 2: Pela CLI da Vercel (Terminal)

Se você preferir fazer o deploy diretamente do seu terminal, siga estas etapas:

1. Instale a CLI globalmente (se não tiver instalada):
   ```bash
   npm install -g vercel
   ```
2. Na pasta raiz do projeto, execute o comando de login:
   ```bash
   vercel login
   ```
3. Inicie o processo de deploy:
   ```bash
   vercel
   ```
4. Siga as instruções no terminal (pressione Enter para aceitar as configurações recomendadas).
5. Para fazer o deploy definitivo de produção, execute:
   ```bash
   vercel --prod
   ```

---

## 🎯 Por que está Otimizado?

* **Configuração de Roteador (`vercel.json`)**: Configurado para funcionar perfeitamente em Single Page Applications (SPA), evitando problemas de erro 404 ao atualizar páginas.
* **Carregamento Otimizado**: Scripts e dependências estão compilados e empacotados pelo próprio Vite de forma minificada.
* **Estilização com Tailwind v4**: Otimizado para build estático super leve e de alto desempenho, com tempo de carregamento inferior a 0.5s.
