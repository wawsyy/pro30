# Setup Instructions

## Important Notes

### FHEVM Utilities

The frontend requires FHEVM utilities from the template. You need to copy the following files from `fhevm-hardhat-template旧/frontend/fhevm/`:

1. `FhevmDecryptionSignature.ts` - Handles FHEVM decryption signatures
2. `internal/fhevm.ts` - Core FHEVM instance creation
3. `internal/fhevmTypes.ts` - Internal FHEVM types
4. `internal/constants.ts` - FHEVM constants
5. `internal/PublicKeyStorage.ts` - Public key storage utilities
6. `internal/RelayerSDKLoader.ts` - Relayer SDK loader
7. `internal/mock/fhevmMock.ts` - Mock FHEVM for testing

Copy these files to `pro30/frontend/fhevm/` maintaining the directory structure.

### Logo and Favicon

The project includes a placeholder SVG logo. For production:
1. Replace `frontend/public/reflection-logo.svg` with your custom logo
2. Create a proper favicon at `frontend/public/reflection-icon.png` (or use .ico format)
3. Update the favicon reference in `frontend/app/layout.tsx` if needed

### Rainbow Wallet Configuration

The Rainbow wallet is configured with a placeholder projectId. For production:
1. Get a projectId from [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Update the `projectId` in `frontend/app/providers.tsx`

### Contract Deployment

After deploying the contract:
1. Update `frontend/abi/EncryptedNightlyReflectionAddresses.ts` with the deployed addresses
2. Or run `npm run genabi` in the frontend directory after deployment

## Quick Start

1. Install dependencies:
```bash
npm install
cd frontend && npm install
```

2. Compile contracts:
```bash
npm run compile
```

3. Deploy to localhost:
```bash
npx hardhat node
# In another terminal:
npx hardhat deploy --network localhost
```

4. Generate ABI:
```bash
cd frontend
npm run genabi
```

5. Start frontend:
```bash
npm run dev
```

## Testing

Run tests:
```bash
npm test
```

Run Sepolia tests (requires deployment):
```bash
npm run test:sepolia
```

