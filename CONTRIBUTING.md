# Contributing to RJX Template

Thank you for your interest in contributing to RJX Template! We welcome contributions from the community to help improve and expand this project. This document provides guidelines and information to help you get started.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Reporting Issues](#reporting-issues)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the maintainers.

## How to Contribute

There are many ways to contribute to RJX Template:

- **Bug Reports**: Report bugs and issues
- **Feature Requests**: Suggest new features or improvements
- **Code Contributions**: Submit pull requests with fixes or enhancements
- **Documentation**: Improve documentation, tutorials, or examples
- **Testing**: Help test the project and report issues

## Development Setup

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git

### Local Development

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/rjx-template.git
   cd rjx-template
   ```

3. **Install dependencies** for both variants:
   ```bash
   # JavaScript version
   cd js
   npm install
   cd ..

   # TypeScript version
   cd ts
   npm install
   cd ..
   ```

4. **Start development servers** to test changes:
   ```bash
   # JavaScript version
   cd js
   npm run dev

   # TypeScript version (in another terminal)
   cd ts
   npm run dev
   ```

5. **Run tests** to ensure everything works:
   ```bash
   # JavaScript version
   cd js
   npm test

   # TypeScript version
   cd ts
   npm test
   ```

## Project Structure

```
rjx-template/
├── js/                    # JavaScript boilerplate
│   ├── src/              # Source code
│   ├── tests/            # Test files
│   ├── package.json      # Dependencies and scripts
│   └── README.md         # JavaScript-specific docs
├── ts/                    # TypeScript boilerplate
│   ├── src/              # Source code
│   ├── tests/            # Test files
│   ├── package.json      # Dependencies and scripts
│   └── README.md         # TypeScript-specific docs
├── README.md             # Main project documentation
├── CODE_OF_CONDUCT.md    # Code of conduct
├── CONTRIBUTING.md       # This file
└── LICENSE.md            # License information
```

## Coding Standards

### General Guidelines

- Follow the existing code style and conventions
- Write clear, readable, and maintainable code
- Add comments for complex logic
- Use meaningful variable and function names
- Keep functions small and focused on a single responsibility

### JavaScript/TypeScript Specific

- Use ES6+ features and modern syntax
- For TypeScript: Use strict type checking
- Follow the configured ESLint and Prettier rules
- Use async/await for asynchronous operations
- Handle errors appropriately

### Commit Messages

- Use clear and descriptive commit messages
- Start with a verb (e.g., "Add", "Fix", "Update", "Remove")
- Keep the first line under 50 characters
- Add more details in the body if needed

Example:
```
Add user authentication middleware

- Implement JWT token validation
- Add user role checking
- Update error handling for auth failures
```

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run coverage
```

### Writing Tests

- Write tests for new features and bug fixes
- Use descriptive test names
- Cover both positive and negative scenarios
- Test edge cases and error conditions
- Aim for good test coverage (>80%)

### Test Structure

```javascript
// Example test structure
describe('User Authentication', () => {
  describe('POST /login', () => {
    it('should return token for valid credentials', async () => {
      // Test implementation
    });

    it('should return error for invalid credentials', async () => {
      // Test implementation
    });
  });
});
```

## Submitting Changes

### Pull Request Guidelines

1. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and ensure they follow the coding standards

3. **Run tests** and ensure they pass:
   ```bash
   npm test
   npm run lint
   ```

4. **Update documentation** if needed (README, API docs, etc.)

5. **Commit your changes** with clear messages

6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request** on GitHub

### Pull Request Template

When creating a PR, please include:

- **Title**: Clear and descriptive title
- **Description**: Detailed explanation of changes
- **Type of change**: Bug fix, feature, documentation, etc.
- **Testing**: How the changes were tested
- **Breaking changes**: Any breaking changes and migration notes

## Reporting Issues

### Bug Reports

When reporting bugs, please include:

- **Clear title** describing the issue
- **Steps to reproduce** the problem
- **Expected behavior** vs. actual behavior
- **Environment details**: OS, Node.js version, browser, etc.
- **Screenshots** if applicable
- **Error messages** or logs

### Feature Requests

For feature requests, please include:

- **Clear description** of the proposed feature
- **Use case** or problem it solves
- **Proposed implementation** if you have ideas
- **Alternatives considered**

## Pull Request Process

1. **Review**: Maintainers will review your PR
2. **Feedback**: Address any requested changes
3. **Approval**: Once approved, your PR will be merged
4. **Release**: Changes may be included in future releases

## Recognition

Contributors will be recognized in the project's contributor list and release notes. Thank you for helping make RJX Template better!

## Questions?

If you have questions about contributing, feel free to:

- Open an issue on GitHub
- Contact the maintainers
- Check existing documentation and issues

We appreciate your contributions and look forward to working with you!
