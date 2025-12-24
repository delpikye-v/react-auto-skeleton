### 🦴 react-auto-skeleton-z

- Automatic skeleton UI generation for React components
- Zero-config skeletons inferred directly from your component tree.
- Plugin-first skeleton engine

<a href="https://codesandbox.io/p/sandbox/7mdmyf" target="_blank">LIVE EXAMPLE</a>

---

#### ✨ Features

- 🦴 Auto-generate skeleton UI from real components

- 🧠 Heuristic-based inference (text / box / circle)

- 🔌 Plugin system (createSkeletonPlugin)

- 🎯 Custom skeleton per component

- 🪝 Hook API: useAutoSkeleton

- ⚡ Zero layout shift (layout-aware)

- 🧩 Works with any UI library (Antd / MUI / custom)

---

#### 📦 Installation

```ts
npm install react-auto-skeleton-z
# or
yarn add react-auto-skeleton-z
```

---

#### 🚀 Usage

##### 1️⃣ Basic usage
```ts
// require
import "react-auto-skeleton-z/styles.css"

import { AutoSkeleton } from "react-auto-skeleton-z"

function UserCard({ user }) {
  return (
    <div style={{ width: 300 }}>
      <img src={user.avatar} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button>Follow</button>
    </div>
  )
}

export function App({ loading, user }) {
  return (
    <AutoSkeleton loading={loading}>
      <UserCard user={user} />
    </AutoSkeleton>
  )
}

```

- loading=false → render real UI

- loading=true → render inferred skeleton

##### 2️⃣ Custom skeleton per component
```ts
import {
  SkeletonCircle,
  SkeletonText,
  SkeletonRect,
} from "react-auto-skeleton-z"

function UserCard() {
  return (...)
}

UserCard.skeleton = () => (
  <div style={{ width: 300 }}>
    <SkeletonCircle />
    <SkeletonText />
    <SkeletonText />
    <SkeletonRect />
  </div>
)
```

##### 3️⃣ Plugin system (createSkeletonPlugin)

```ts
import { AutoSkeleton, createSkeletonPlugin } from "react-auto-skeleton-z"

export const AntdPlugin = createSkeletonPlugin({
  name: "antd",

  rules: [
    {
      match: /Avatar/,
      skeleton: "circle",
    },
  ],
})

// import { AutoSkeleton } from "react-auto-skeleton-z"

<AutoSkeleton
  loading
  plugins={[AntdPlugin]}
>
  <Profile />
</AutoSkeleton>
```


##### 4️⃣ Hook API (useAutoSkeleton)

```ts
import { useAutoSkeleton } from "react-auto-skeleton-z"

function Page({ loading }) {
  const content = useAutoSkeleton(
    <Profile />,
    { loading }
  )

  return <>{content}</>
}
```

##### 5️⃣ Custom rules (layout-aware)
```ts
<AutoSkeleton
  loading
  rules={[
    {
      match: (el) => el.props.style?.borderRadius === "50%",
      skeleton: "circle",
    },
  ]}
>
  <Avatar />
</AutoSkeleton>

```

---

#### 🧠 Why use react-auto-skeleton-z?

- No duplicated skeleton components

- No layout mismatch

- No manual wiring

- Component-driven skeletons

- Plugin-friendly architecture

- Perfect for:

  - dashboards

  - lists

  - cards

  - loading-heavy UIs

---

#### 📄 License

MIT