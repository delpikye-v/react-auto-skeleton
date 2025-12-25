
# 🦴 react-auto-skeleton-z

[![NPM](https://img.shields.io/npm/v/react-auto-skeleton-z.svg)](https://www.npmjs.com/package/react-auto-skeleton-z)
![Downloads](https://img.shields.io/npm/dt/react-auto-skeleton-z.svg)

---

Automatic skeleton UI generation for React components.  
Plugin-first, component-driven, layout-aware skeletons — no wrapper required.  

[Live Example](https://codesandbox.io/s/react-auto-skeleton-example-7mdmyf)

---

### ✨ Features

- Auto-generate skeletons from real components  
- Component-driven (`Component.skeleton`) or plugin-driven
- Layout-aware → zero layout shift  
- Async / lazy component support  
- Works with any UI library (Antd / MUI / custom)  
- Hook API: `useAutoSkeleton`  

---

### 📦 Installation

```bash
npm install react-auto-skeleton-z
# or
yarn add react-auto-skeleton-z
```

- Import global CSS for animation:

```ts
import "react-auto-skeleton-z/styles.css"
```

---

### 🚀 Examples

#### 1️⃣ Basic usage (component `.skeleton` property)

```tsx
import React from "react"
import ReactDOM from "react-dom"
import { AutoSkeleton, SkeletonCircle, SkeletonText, SkeletonRect } from "react-auto-skeleton-z"
import "react-auto-skeleton-z/styles.css"

// Real component
function UserCard({ user }) {
  return (
    <div style={{ width: 300, padding: 16, border: "1px solid #ccc", borderRadius: 8 }}>
      <img src={user.avatar} style={{ width: 64, height: 64, borderRadius: "50%" }} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button>Follow</button>
    </div>
  )
}

// Define skeleton directly on component
UserCard.skeleton = () => (
  <div style={{ width: 300, padding: 16, border: "1px solid #ccc", borderRadius: 8 }}>
    <SkeletonCircle style={{ width: 64, height: 64 }} />
    <SkeletonText />
    <SkeletonText />
    <SkeletonRect style={{ width: "100%", height: 32, marginTop: 8 }} />
  </div>
)

const fakeUser = { avatar: "https://i.pravatar.cc/64", name: "John Doe", email: "john@example.com" }

function App({ loading }) {
  return (
    <AutoSkeleton loading={loading}>
      <UserCard user={fakeUser} />
    </AutoSkeleton>
  )
}

ReactDOM.render(<App loading={true} />, document.getElementById("root"))
```

✅ Skeleton appears automatically when `loading=true`  
✅ Real UI renders when `loading=false`


```ts
// Profile.tsx => Next example
import React from "react"
import { SkeletonCircle, SkeletonText } from "react-auto-skeleton-z"

export default function Profile({ user }) {
  return (
    <div>
      <img src={user.avatar} />
      <h3>{user.name}</h3>
    </div>
  )
}

// Add skeleton for AutoSkeleton
Profile.skeleton = () => (
  <div>
    <SkeletonCircle />
    <SkeletonText />
  </div>
)


// lazy profile
const LazyProfile = lazy(() => import("./Profile"))
```

---

#### 2️⃣ Plugin system

```ts
import { createSkeletonPlugin, AutoSkeleton } from "react-auto-skeleton-z"

const ProfilePlugin = createSkeletonPlugin({
  name: "profile",
  rules: [
    {
      match: (el) => el.type?.name === "Profile", 
      skeleton: "circle"
    }
  ],
})

<AutoSkeleton loading plugins={[ProfilePlugin]}>
  <Suspense fallback={<div>Loading...</div>}>
    <LazyProfile />
  </Suspense>
</AutoSkeleton>
```

- Plugin allows **automatic detection** without defining `.skeleton` for every component.  

---

#### 3️⃣ useAutoSkeleton hook

```ts
import React, { lazy, Suspense } from "react"
import { useAutoSkeleton } from "react-auto-skeleton-z"

const LazyProfile = lazy(() => import("./Profile"))

function Page({ loading }) {
  const content = useAutoSkeleton(
    <Suspense fallback={<div>Loading...</div>}>
      <LazyProfile />
    </Suspense>,
    { loading }
  )

  return <>{content}</>
}

export default Page
```

- Returns a tree with skeletons automatically injected.  

---

#### 4️⃣ Async / Lazy components

```ts
import React, { lazy, Suspense } from "react"
import { AutoSkeleton } from "react-auto-skeleton-z"

const LazyProfile = lazy(() => import("./Profile"))

<AutoSkeleton loading>
  <Suspense fallback={<div>Loading...</div>}>
    <LazyProfile />
  </Suspense>
</AutoSkeleton>
```

- Lazy components automatically show skeleton until loaded.

---

#### 5️⃣ Custom rules (layout-aware)

```ts
<AutoSkeleton
  loading
  rules={[
    {
      match: (el) => el.props?.style?.borderRadius === "50%",
      skeleton: "circle",
    },
    {
      match: (el) => el.type === "button",
      skeleton: "rect",
    },
  ]}
>
  <UserCard />
</AutoSkeleton>
```

- Rules let you match elements dynamically based on props, type, or other heuristics.  

---

### 🧠 Why use react-auto-skeleton-z?

- Zero manual wiring  
- Layout-aware → no layout shift  
- Component-driven → easy maintenance  
- Plugin-friendly → reusable rules  
- Perfect for dashboards, lists, cards, or heavy-loading UIs  

---

### 📄 License

MIT
