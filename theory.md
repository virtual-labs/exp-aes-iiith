For a very brief theory of "Advanced Encryption Standard" and their analysis, click [here](docs/16_AES.pdf)

For a very brief theory of "Modes of Encryption" and their analysis, click [here](docs/Modes%20of%20operation.pdf)

The Advanced Encryption Standard (AES) is a symmetric block cipher adopted by the U.S. government in 2001. It is widely used worldwide and is considered one of the most secure encryption algorithms available today. AES operates on fixed-size blocks of 128 bits and supports key sizes of 128, 192, and 256 bits.

### How AES Works

1. **Block Structure**: AES processes data in 128-bit (16 bytes) blocks
2. **Key Sizes**: Three variants - AES-128, AES-192, and AES-256
3. **Rounds**: Number of encryption rounds depends on key size:
   - AES-128: 10 rounds
   - AES-192: 12 rounds
   - AES-256: 14 rounds

### Mathematical Foundation

AES operations are performed in a finite field GF(2^8), using:

- **SubBytes**: Non-linear substitution using S-boxes
- **ShiftRows**: Cyclically shifts the rows of the state
- **MixColumns**: Linear transformation on columns
- **AddRoundKey**: XOR with round key

### Modes of Operation

Since AES encrypts fixed 128-bit blocks, different modes determine how multiple blocks are processed:

#### Electronic Code Book (ECB)

- Each block is encrypted independently
- **Weakness**: Identical plaintext blocks produce identical ciphertext
- **Use case**: Limited, not recommended for most applications

<img src="images/ecbm.png">

Electronic Code Book(ECB) mode

#### Cipher Block Chaining (CBC)

- Each block is XORed with the previous ciphertext block
- Requires an Initialization Vector (IV) for the first block
- **Strength**: Identical blocks produce different ciphertext
- **Use case**: File encryption, secure communications

<img src="images/cdbm.png">

Cipher Block Chaining(CBC) mode

#### Counter (CTR)

- Converts block cipher into a stream cipher
- Uses a counter value that increments for each block
- **Strength**: Parallelizable, random access possible
- **Use case**: High-performance applications, network protocols

<img src="images/ctr.png">

Counter mode

#### Output Feedback (OFB)

- Creates a keystream that is XORed with plaintext
- IV is encrypted repeatedly to generate the keystream
- **Strength**: Error propagation is limited
- **Use case**: Streaming applications, satellite communications

<img src="images/ofbm.png">

Output FeedBack mode

### Security Analysis

AES provides strong security through:

1. **Large Key Space**:

   - AES-128: 2^128 possible keys
   - AES-192: 2^192 possible keys
   - AES-256: 2^256 possible keys

2. **Resistance to Attacks**:

   - No practical attacks against full AES
   - Resistant to differential and linear cryptanalysis
   - Side-channel attacks require physical access

3. **Mode-Dependent Security**:
   - ECB: Vulnerable to pattern analysis
   - CBC: Secure with proper IV usage
   - CTR: Secure with unique counter values
   - OFB: Secure with proper IV management

### Practical Considerations

#### Padding

- AES requires input to be multiple of 16 bytes
- PKCS#7 padding is commonly used
- Example: "Hello" → "Hello\x0B\x0B\x0B\x0B\x0B\x0B\x0B\x0B\x0B\x0B\x0B"

#### Initialization Vectors (IV)

- Must be unpredictable and unique for each encryption
- Length equals block size (128 bits for AES)
- Different requirements for different modes

#### Key Management

- Keys must be generated using cryptographically secure random number generators
- Key derivation functions (KDF) should be used for password-based encryption
- Keys should be stored securely and rotated regularly
