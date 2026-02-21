# Test XSS Vulnerability Project

This project is a demonstration of potential Cross-Site Scripting (XSS) vulnerabilities in a React application, along with a simple FastAPI backend.

## Project Structure

- `packages/api-backend/`: FastAPI backend service.
- `packages/web-app/`: React frontend application.

## API Backend (FastAPI)

Located in `packages/api-backend/main.py`.

### Methods
- `read_root()`: GET `/` - Returns a simple "Hello World" message.
- `read_item(item_id, q)`: GET `/items/{item_id}` - Returns the item ID and an optional query parameter.

## Web App (React)

Located in `packages/web-app/src/`.

### Key Components

#### `App.js`
The main application component that manages user input and passes it to the rendering components.
- `handleChange(event)`: Updates the state with the current value of the textarea.

#### `ContentRenderer.js`
Renders HTML content using React's `dangerouslySetInnerHTML`.
- `createMarkup()`: Returns an object with the `__html` key for `dangerouslySetInnerHTML`.

#### `VulnerableComponent.js`
Renders HTML content by directly manipulating the DOM's `innerHTML` property using a `useRef` and `useEffect`.
- Uses `divRef` to access the DOM element.
- Updates `divRef.current.innerHTML` whenever `htmlContent` changes.

## Security Warning
This project intentionally includes vulnerable patterns for educational purposes. **Do not use these patterns in production applications** as they can expose users to XSS attacks.
