# Next.js Dashboard Boilerplate

Une boilerplate moderne et typée pour créer rapidement des applications dashboard avec Next.js 15, TypeScript et Shadcn UI.

## 🚀 Fonctionnalités

- ✨ Next.js 15 App Router
- 💎 TypeScript
- 🎨 Tailwind CSS
- 🔐 Authentication avec Clerk
- 🎯 Composants UI avec Shadcn/Radix
- 📱 Design Responsive
- 🔍 SEO optimisé
- 🚦 Gestion d'état avec URL Search Params (nuqs)

## 📦 Prérequis

- Node.js 18+
- pnpm

## 🛠 Installation

1. Clonez le repository

```bash
git clone https://github.com/jos34000/boilerplate.git
```

2. Installez les dépendances

```bash
pnpm install
```

3. Configurez les variables d'environnement

```bash
cp .env.example .env.local
```

4. Lancez le serveur de développement

```bash
pnpm dev
```

## 🔧 Configuration

### Structure des dossiers

```
├── app/
│   ├── dashboard/           # Routes du dashboard
│   │   ├── components/      # Composants spécifiques au dashboard
│   │   ├── [username]/      # Pages dynamiques par utilisateur
│   │   ├── layout.tsx       # Layout du dashboard
│   │   └── page.tsx        # Page qui permet de rediriger vers le /dashboard/[username]
│   └── layout.tsx          # Layout principal de l'application
├── components/             # Composants réutilisables
├── lib/                   # Utilitaires et configurations
└── public/               # Assets statiques
```

### Personnalisation

1. **Navigation**

   - Modifiez `app/dashboard/_components/items.ts` pour personnaliser les éléments de la sidebar
   - Modifiez `.env.local` pour différents aspect de l'application tels que son nom, clés API, etc.

2. **Thème**

   - Personnalisez les couleurs dans `tailwind.config.js`
   - Modifiez les composants Shadcn UI dans `components/ui`

3. **Authentication**
   - Configurez les providers dans votre dashboard Clerk
   - Ajustez les stratégies d'authentification selon vos besoins

## 🔐 Authentication

Le boilerplate utilise Clerk pour l'authentification. Pour configurer :

1. Ajoutez vos clés d'API dans `.env.local`
2. Configurez vos providers dans le dashboard
3. Personnalisez les callbacks d'authentification si nécessaire

## 📱 Responsive Design

Le design est mobile-first avec Tailwind CSS. Les breakpoints principaux :

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## 🚀 Déploiement

1. Construisez l'application

```bash
pnpm build
```

## 📚 Documentation des composants

Chaque composant est documenté avec JSDoc. Exemple :

```tsx
/**
 * @component SidebarBreadcrumb
 * @description Affiche le chemin de navigation dans la sidebar
 */
```

## 🤝 Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 License

MIT
