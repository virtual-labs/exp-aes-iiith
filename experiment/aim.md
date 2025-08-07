A symmetric encryption scheme consists of a set of all possible messages, called the message space **M**, and three algorithms, namely,

(a) **Gen**

(b) **Enc**

(c) **Dec**

The algorithm for key generation **Gen** is used to choose a key **k** at random from the set of all possible secret keys, denoted by the key space **K**.

The algorithm for encryption **Enc** takes as inputs the message **m** and the secret key **k** and outputs the ciphertext **c**.

The algorithm for decryption **Dec** inputs the ciphertext **c** and the key **k** and outputs the message **m**.

In practical cryptography, we often need to encrypt messages that are longer than the block size of our encryption algorithm. Block ciphers like AES operate on fixed-size blocks (128 bits for AES), but real-world data can be of arbitrary length. In cryptography, we learn that modes of operation are essential techniques that define how to repeatedly apply a block cipher to encrypt large amounts of data securely.

**About the experiment:**

In this experiment, we work with the Advanced Encryption Standard (AES) and various modes of operation, demonstrating how to securely encrypt long messages using a block cipher. AES is a modern, secure block cipher that operates on 128-bit blocks, but practical applications require encrypting data of varying lengths. Different modes of operation (such as ECB, CBC, CFB, OFB, and CTR) provide different approaches to handle this challenge, each with distinct security properties and use cases. Your task is to encrypt long messages using various modes of operation. Specifically, given an implementation of AES, you need to understand and apply different modes of operation to see how they transform a block cipher into a practical encryption system for arbitrary-length data.
