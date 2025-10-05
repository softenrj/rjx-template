<div align="center">

# 🚀 RJX Template

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue.svg)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express.js-5.x-lightgrey.svg)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vitest](https://img.shields.io/badge/Tested%20with-Vitest-6E9F18.svg)](https://vitest.dev/)
[![Swagger](https://img.shields.io/badge/API%20Docs-Swagger-green.svg)](http://localhost:3000/docs)

### 🛠️ Production-ready Node.js + Express boilerplate templates for JavaScript and TypeScript with enterprise-grade features

> ⚡ **Zero-config setup** | 🛡️ **Security-first** | 📊 **Fully tested** | 🎯 **Type-safe options** | 🚀 **ES Modules**

</div>

---

## ✨ What's Inside

| Feature | Description | Status |
|---------|-------------|--------|
| 🎯 **JavaScript & TypeScript** | Modern JS with ES Modules & TS 5.9 | ✅ |
| 🛡️ **Security Suite** | Helmet, CORS, Rate Limiting | ✅ |
| 📊 **Testing** | Vitest + Supertest + Coverage | ✅ |
| 📝 **API Documentation** | Swagger/OpenAPI 3.0 | ✅ |
| 🎨 **Code Quality** | ESLint + Prettier + Husky | ✅ |
<!-- | 🗄️ **Database Ready** | MongoDB + Mongoose | ✅ | -->
| 🚀 **Dev Experience** | Hot reload, linting, formatting | ✅ |
| 📦 **Production Ready** | Build optimization, error handling | ✅ |

---
Production-ready Node.js + Express boilerplate templates for JavaScript and TypeScript, 
Generated using [**create-rjx**](https://www.npmjs.com/package/create-rjx) ⚡
---

## 📁 Project Structure

This template provides two variants:

### JavaScript Version (`js/`)

```
js/
├── 📄 app.js              # Express app configuration
├── 📄 server.js           # Server entry point
├── 📁 config/             # Configuration modules
│   ├── corsConfig.js      # CORS configuration
│   ├── env.js            # Environment variables
│   ├── halmetConfig.js    # Security headers
│   ├── loggerConfig.js    # Winston logger setup
│   └── rateLimitConfig.js # Rate limiting
├── 📁 docs/               # API documentation
│   └── swagger.yaml      # OpenAPI 3.0 spec
├── 📁 middleware/        # Custom middleware
│   └── errorHandler.js   # Global error handler
├── 📁 tests/             # Test suites
│   └── health.test.js    # Health check tests
└── 📄 router.js          # Route definitions
```

### TypeScript Version (`ts/`)

```
ts/
├── 📄 app.ts              # Express app configuration
├── 📄 server.ts           # Server entry point
├── 📁 config/             # Configuration modules
│   ├── corsConfig.ts      # CORS configuration
│   ├── env.ts            # Environment variables
│   ├── halmetConfig.ts    # Security headers
│   ├── loggerConfig.ts    # Winston logger setup
│   └── rateLimitConfig.ts # Rate limiting
├── 📁 docs/               # API documentation
│   └── swagger.yaml      # OpenAPI 3.0 spec
├── 📁 middleware/        # Custom middleware
│   └── errorHandler.ts   # Global error handler
├── 📁 tests/             # Test suites
│   └── health.test.ts    # Health check tests
└── 📄 router.ts          # Route definitions
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/rjx-template.git
   cd rjx-template
   ```

2. **Choose your variant:**
   - For JavaScript: `cd js`
   - For TypeScript: `cd ts`

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Access the application:**
   - API: http://localhost:3000
   - Docs: http://localhost:3000/docs

---

## 🛠️ Available Scripts

| Script | Description | Command |
|--------|-------------|---------|
| `dev` | Start development server | `npm run dev` |
| `dev:hot` | Hot reload + linting | `npm run dev:hot` |
| `build` | Build for production | `npm run build` |
| `start` | Start production server | `npm start` |
| `test` | Run tests | `npm test` |
| `test:watch` | Watch mode testing | `npm run test:watch` |
| `coverage` | Generate coverage report | `npm run coverage` |
| `lint` | Lint code | `npm run lint` |
| `clean` | Clean build artifacts | `npm run clean` |

---

## 🎯 API Documentation

### 📊 Swagger UI
Access interactive API documentation at: [http://localhost:3000/docs](http://localhost:3000/docs)

### 🔍 Health Check Endpoint
```http
GET /health
```

**Response:**
```json
{
  "status": "ok",
  "uptime": 12.345,
  "timestamp": 1690000000000
}
```

---

## 🛡️ Security Features

### 🔒 Helmet
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- And more security headers

### 🌐 CORS
- Configurable CORS policies
- Environment-based settings

### ⚡ Rate Limiting
- Global rate limiting
- Configurable per environment
- IP-based tracking

---

## 🧪 Testing Strategy

### ✅ Test Coverage
- **Unit Tests**: Vitest for fast execution
- **Integration Tests**: Supertest for API testing
- **Coverage Reports**: Built-in coverage analysis

### 🎯 Test Commands
```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run coverage
```

<!-- ---

## 🗄️ Database Support

### MongoDB (Included)
- Mongoose ODM configured
- Connection pooling
- Environment-based configuration

### Ready for Extensions
- PostgreSQL support ready
- Prisma ORM support
- SQL database connectors

--- -->

## 🌍 Environment Configuration

### Environment Files
```bash
.env.dev     # Development environment
.env.prod    # Production environment
.env.test    # Test environment
```

### Environment Variables
```bash
# Server
PORT=3000
NODE_ENV=development

# # Database
# MONGODB_URI=mongodb://localhost:27017/myapp

# # Security
# RATE_LIMIT_WINDOW=15
# RATE_LIMIT_MAX=100
```

---

## 🎨 Code Quality Tools

### ESLint Configuration
- Language-specific rules (JS/TS)
- Import sorting
- Unused imports detection
- Prettier integration

### Prettier Setup
- Consistent code formatting
- JavaScript/TypeScript support
- JSON/CSS/Markdown formatting

### Git Hooks
- Pre-commit linting
- Pre-commit formatting
- Commit message validation

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

<!-- ### Docker Ready
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist/ ./dist/
EXPOSE 3000
CMD ["node", "dist/server.js"]
``` -->

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Raj (Softenrj)**

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/softenrj)
[![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/create-rjx)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/raj-sharma-23447527b)

</div>

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

</div>
