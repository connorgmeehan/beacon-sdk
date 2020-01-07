import * as sodium from 'libsodium-wrappers'

/* eslint-disable prefer-arrow/prefer-arrow-functions */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toHex(value: any): string {
  return Buffer.from(value).toString('hex')
}

export function getHexHash(key: string | Buffer | Uint8Array): string {
  return toHex(sodium.crypto_generichash(32, key))
}

export function getKeypairFromSeed(seed: string): sodium.KeyPair {
  return sodium.crypto_sign_seed_keypair(sodium.crypto_generichash(32, sodium.from_string(seed)))
}

export function encryptCryptoboxPayload(message: string, sharedKey: Uint8Array): string {
  const nonce = Buffer.from(sodium.randombytes_buf(sodium.crypto_secretbox_NONCEBYTES))
  const combinedPayload = Buffer.concat([
    nonce,
    Buffer.from(sodium.crypto_secretbox_easy(Buffer.from(message, 'utf8'), nonce, sharedKey))
  ])

  return toHex(combinedPayload)
}

export function decryptCryptoboxPayload(payload: Uint8Array, sharedKey: Uint8Array): string {
  const nonce = payload.slice(0, sodium.crypto_secretbox_NONCEBYTES)
  const ciphertext = payload.slice(sodium.crypto_secretbox_NONCEBYTES)

  return Buffer.from(sodium.crypto_secretbox_open_easy(ciphertext, nonce, sharedKey)).toString(
    'utf8'
  )
}

export function sealCryptobox(payload: string | Buffer, publicKey: Uint8Array): string {
  const kxSelfPublicKey = sodium.crypto_sign_ed25519_pk_to_curve25519(Buffer.from(publicKey)) // Secret bytes to scalar bytes
  const encryptedMessage = sodium.crypto_box_seal(payload, kxSelfPublicKey)

  return toHex(encryptedMessage)
}

export function openCryptobox(
  encryptedPayload: string | Buffer,
  publicKey: Uint8Array,
  privateKey: Uint8Array
): string {
  const kxSelfPrivateKey = sodium.crypto_sign_ed25519_sk_to_curve25519(Buffer.from(privateKey)) // Secret bytes to scalar bytes
  const kxSelfPublicKey = sodium.crypto_sign_ed25519_pk_to_curve25519(Buffer.from(publicKey)) // Secret bytes to scalar bytes

  const decryptedMessage = sodium.crypto_box_seal_open(
    encryptedPayload,
    kxSelfPublicKey,
    kxSelfPrivateKey
  )

  return Buffer.from(decryptedMessage).toString()
}

export function recipientString(recipientHash: string, relayServer: string): string {
  return `@${recipientHash}:${relayServer}`
}

/* eslint-enable prefer-arrow/prefer-arrow-functions */