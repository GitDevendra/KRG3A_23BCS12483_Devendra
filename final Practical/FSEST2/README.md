# Protected React Route with Authentication

A React application demonstrating a protected route (`/dashboard`) with authentication using React Router and Context API.

## Features

✓ **Protected Route** - `/dashboard` route is protected and requires authentication
✓ **Authentication Context** - Centralized authentication state management using React Context API
✓ **Redirect Behavior** - Unauthorized users are automatically redirected to `/login` using React Router's `Navigate` component
✓ **Toggle Authentication** - Login/Logout button on the Login page to test redirect behavior
✓ **Auto-redirect** - Authenticated users are automatically redirected to dashboard from login page
✓ **Responsive Design** - Works seamlessly on desktop and mobile devices

## Project Structure

```
src/
├── App.jsx                    # Main app component with routing setup
├── App.css                    # Global styles
├── main.jsx                   # React entry point
├── context/
│   └── AuthContext.jsx        # Authentication state management
├── components/
│   └── ProtectedRoute.jsx     # Protected route wrapper component
├── pages/
│   ├── Login.jsx              # Login page with toggle button
│   └── Dashboard.jsx          # Protected dashboard page
└── styles/
    ├── Auth.css               # Login page styles
    └── Dashboard.css          # Dashboard page styles
```

## How It Works

### 1. **AuthContext** (`src/context/AuthContext.jsx`)
- Manages `isAuthenticated` state (boolean)
- Provides `toggleAuthentication` function to switch between authenticated/not authenticated
- Uses React Context API to make these values available throughout the app

### 2. **ProtectedRoute** (`src/components/ProtectedRoute.jsx`)
- Custom component that wraps protected routes
- Checks if user is authenticated via `AuthContext`
- If not authenticated, redirects to `/login` using `Navigate` component
- If authenticated, renders the protected component

### 3. **Login Page** (`src/pages/Login.jsx`)
- Displays authentication status
- Login/Logout toggle button to test redirect behavior
- Auto-redirects to `/dashboard` when authenticated

### 4. **Dashboard Page** (`src/pages/Dashboard.jsx`)
- Protected route - only accessible when authenticated
- Shows information about the protection mechanism
- Logout button that redirects back to login

### 5. **App Router** (`src/App.jsx`)
- Defines all routes
- Wraps dashboard route with `ProtectedRoute` component
- Default route redirects to `/login`

## Installation & Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser - it will automatically open at `http://localhost:3000`

## Testing the Protected Route

1. **Initial State**: You'll start on the Login page with "Not Authenticated" status
2. **Access Dashboard**: Try to navigate directly to `/dashboard` - you'll be redirected to login
3. **Login**: Click the "Login" button to authenticate
4. **Auto Redirect**: You'll automatically be redirected to `/dashboard`
5. **Test Protection**: Click "Logout" on the dashboard - you'll be redirected back to login
6. **Try Again**: Try accessing `/dashboard` while logged out - redirect works

## Key Technologies

- **React 18** - UI library
- **React Router v6** - Routing with `Navigate` component for redirects
- **Context API** - State management for authentication
- **Vite** - Build tool for fast development

## Redirect Behavior

The `ProtectedRoute` component uses React Router's `Navigate` component:
- If not authenticated → redirects to `/login`
- Uses `replace: true` to prevent back-button issues
- Seamless redirect without page reload

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Customization

- **Add More Protected Routes**: Wrap any route with `<ProtectedRoute>` to protect it
- **Persistent Authentication**: Add localStorage to save authentication state
- **User Management**: Extend AuthContext to include user data
- **Role-based Access**: Modify ProtectedRoute to check user roles
