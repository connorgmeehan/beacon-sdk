

# P2P Direct Flow (Direct)

## Init

```mermaid
sequenceDiagram
    dApp->>Wallet: Show QR Code (pubkey exchange)
    Wallet->>Wallet: User scans QR code
    Wallet->>dApp: Send own pubkey to dApp, connection established
```

## Permission Request

```mermaid
sequenceDiagram
    dApp->>Wallet: User Prompt (Do you want to pair?)
    Wallet->>Wallet: Grant permissions
    Wallet->>dApp: Return Address & Permissions
```

## Operation Request

```mermaid
sequenceDiagram
    dApp->>Wallet: Request
    opt threshold
        Wallet->>Wallet: Signing Request
        Note left of Wallet: Only spend<br/>No contract calls
    end
    opt no threshold
        Wallet->>Wallet: User confirmation
    end
    Wallet->>dApp: Response
```

## Signing Request

```mermaid
sequenceDiagram
    dApp->>Wallet: Request
    opt threshold
        Wallet->>Wallet: Signing Request
        Note left of Wallet: Only spend<br/>No contract calls
    end
    opt no threshold
        Wallet->>Wallet: User confirmation
    end
    Wallet->>dApp: Response
```

| WARNING: Can threshold be abused to sign contract calls? |
| --- |

## Broadcast Request

```mermaid
sequenceDiagram
    dApp->>Wallet: Request

    Wallet->>Wallet: User confirmation

    Wallet->>dApp: Response
```