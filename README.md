# Galegos — Cardápio Digital

Cardápio online da **Gallegos** com pedidos via WhatsApp. Sem pagamento no site — o cliente monta o carrinho e finaliza direto no WhatsApp.

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Como editar o cardápio

Os produtos ficam em [`src/lib/menu.ts`](src/lib/menu.ts). Cada item tem:

- `id` — identificador único
- `name` — nome exibido
- `description` — descrição opcional
- `price` — preço em reais (ex: `32.90`)
- `image` — caminho da foto em `public/images/menu/`
- `category` — `sanduiches`, `picanha`, `trios`, `dogs`, `batatas`, `acai`, `bebidas` ou `opcionais`

Para trocar fotos, coloque as imagens em `public/images/menu/` e atualize o campo `image` de cada produto.

## WhatsApp

O número configurado é **+55 24 99991-4039**. Para alterar, edite [`src/lib/whatsapp.ts`](src/lib/whatsapp.ts).

## Logo

SVGs da marca em `public/logo/`:

| Arquivo | Uso |
|---------|-----|
| `icon.svg` | Favicon e ícone compacto |
| `logo-vertical.svg` | Layout empilhado |
| `logo-horizontal.svg` | Header do site |

Componente React: [`src/components/brand/logo.tsx`](src/components/brand/logo.tsx) — props `variant="vertical" | "horizontal" | "icon"`.

### Paleta de cores

| Token | Hex |
|-------|-----|
| Cream (fundo) | `#F9F4E8` |
| Laranja (marca) | `#E4511E` |
| Marrom (texto) | `#3D2B1F` |
| Amarelo (destaque) | `#F6A01E` |

## Deploy

Recomendado: [Vercel](https://vercel.com/) — conecte o repositório GitHub e faça deploy automático.
