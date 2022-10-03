module.exports = {
  abi: [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "approver",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "hash",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "certNum",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "Approved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "oldAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "ApproverAddressChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "CreditCharged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "issuer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "hash",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "imageHash",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "certNum",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "Issued",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "oldAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "IssuerRegistrationAddressChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "revoker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "hash",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "certNum",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "Revoked",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_hash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_imageHash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_metaHash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_certNum",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_expireDate",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_desc",
          "type": "string"
        }
      ],
      "name": "addCertification",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_hash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_txid",
          "type": "string"
        }
      ],
      "name": "addTransactionId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_hash",
          "type": "string"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "approveInfos",
      "outputs": [
        {
          "internalType": "string",
          "name": "hash",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "isApproved",
          "type": "bool"
        },
        {
          "internalType": "address",
          "name": "approverAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "approvedAt",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "approver",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "certifications",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "certNum",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "hash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "imageHash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "metaHash",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "issuer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "expireDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "createdAt",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "txid",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "credit",
          "type": "uint256"
        }
      ],
      "name": "chargeCredit",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "creditAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "credits",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "hash",
          "type": "string"
        }
      ],
      "name": "getApproveInfo",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "hash",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "isApproved",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "approverAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "approvedAt",
              "type": "uint256"
            }
          ],
          "internalType": "struct UniversityDiploma.ApproveInfo",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "hash",
          "type": "string"
        }
      ],
      "name": "getCertification",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "certNum",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "hash",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "imageHash",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "metaHash",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "issuer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "expireDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "createdAt",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "txid",
              "type": "string"
            }
          ],
          "internalType": "struct UniversityDiploma.Certification",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "certNum",
          "type": "string"
        }
      ],
      "name": "getCertificationByCertNum",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "certNum",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "hash",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "imageHash",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "metaHash",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "issuer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "expireDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "createdAt",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "txid",
              "type": "string"
            }
          ],
          "internalType": "struct UniversityDiploma.Certification",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "getCredit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "issuer",
          "type": "address"
        }
      ],
      "name": "getIssuer",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "regnum",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "category",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "metaDataUrl",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "isActive",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "createdAt",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "updatedAt",
              "type": "uint256"
            }
          ],
          "internalType": "struct SharedStructs.Issuer",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "hash",
          "type": "string"
        }
      ],
      "name": "getRevokeInfo",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "hash",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "isRevoked",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "revokerAddress",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "revokerName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "revokedAt",
              "type": "uint256"
            }
          ],
          "internalType": "struct UniversityDiploma.RevokeInfo",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "id",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "issuerRegistrationAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "mapByCertNum",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "certNum",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "hash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "imageHash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "metaHash",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "issuer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "expireDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "createdAt",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "txid",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "hash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "revokerName",
          "type": "string"
        }
      ],
      "name": "revoke",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "revokeInfos",
      "outputs": [
        {
          "internalType": "string",
          "name": "hash",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "isRevoked",
          "type": "bool"
        },
        {
          "internalType": "address",
          "name": "revokerAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "revokerName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "revokedAt",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_approverAddress",
          "type": "address"
        }
      ],
      "name": "setApproverAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_issuerRegistrationAddress",
          "type": "address"
        }
      ],
      "name": "setIssuerRegistrationAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
}
