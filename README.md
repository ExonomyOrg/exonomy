# exonomy
Exonomy app

## Exonomy Host Application

The Exonomy host application is designed to manage the user experience by hosting other economic applications and providing features for communication between the hosted applications. The application is built using Nuxt 3 and Pinia for state management.

### Features

- User interface for creating and signing in with a DID
- DID authentication and management
- DID account selector in the top navbar with a drop-down button to manage multiple DIDs
- Functionality to add new DID accounts to the Exonomy node
- UI mechanism for managing third-party authenticator accounts associated with the currently signed-in DID account
- Swipe-able carousel storefront below the top navbar to host tenant applications
- System to manage the installation and removal of tenant applications
- Communication between the host Exonomy application and the tenant applications
- Features for Exonomists to interact economically via vouchers and cash
- Support for maintaining relationships with third-party authenticators
- User-friendly interface for Exonomists to navigate and use the Exonomy application

### Running the Host Application

To run the Exonomy host application, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/ExonomyOrg/exonomy.git
   cd exonomy/host-app
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`.

### Directory Structure

The `host-app` directory contains the following files and directories:

- `index.js`: Entry point for the host application
- `package.json`: Dependencies and scripts for the host application
- `components/`: Vue components for the host application
- `store/`: Pinia state management files
- `pages/`: Vue pages for the host application
- `plugins/`: Plugins for DID authentication and OrbitDB
- `api/`: API for inter-app communication
