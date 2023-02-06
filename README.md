# Simple Money Tracker: ledgerrapp

This a simple money tracker for users. Money can be tracked in multiple wallets (accounts), for example, if a user has multiple businesses. When a user's profile is pulled up, it should show a overall balance and all their wallets (accounts) and their respective balances. Drilling down into each wallet (account), should show the detailed transactions of that wallet (account).

Technologies used are:
1. Nestjs
2. Mongodb
3. Typescript


## Installation and set-up

To install the application and run it locally:

1. clone the application using the step below:
```bash
git clone git@github.com:Faith-qa/touchinspiration_assignment.git
```

2. navigate to the ledgerapp
```bash
cd ledgerApp
```
3. install dependancies
```bash
npm i
```
4. navigate to the src folder, create a folder called `config`, inside it create a file called `keys.ts` then add your `mongo-uri` variable

```bash
cd src

mkdir config

cd config

touch key.ts

# add mongo-uri string
export default {
    mongoURI:""
}
```

## Usage and endpoints

### Running the application

```bash
#development
$ npm run start

# development on watch mode
$ npm run start: dev

# production mode
npm run start: prod
```
### requests and endpoints
#### create a user [Signup]

**Request**
```bash
POST /users
```

```bash
curl --location --request POST 'http://localhost: 3000/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    
    "name" : {
        "firstname": "nina",
        "lastname": "Atno"
    },

    "email": "lbah@124.com"

}'
```

**Response**
```json
{
    "name": {
        "firstname": "nina",
        "lastname": "Atno"
    },
    "email": "lbah@124.com",
    "Accountbalance": 0,
    "_id": "63e100fdf480a87623b746be",
    "wallets": [],
    "createdAt": "2023-02-06T13:30:37.730Z",
    "updatedAt": "2023-02-06T13:30:37.730Z",
    "__v": 0
}
```

#### Post request for creating a wallet
**request**

```bash
POST wallet/:userid
```

```bash
curl --location --request POST 'http://localhost: 3000/wallets/63e100fdf480a87623b746be' \
--header 'Content-Type: application/json' \
--data-raw '{
    "walletname": "schoolfees"
}'
```

**Response**
```json
{
    "user": "63e100fdf480a87623b746be",
    "walletname": "schoolfees",
    "Total": 0,
    "_id": "63e10847f480a87623b746c1",
    "Debit": [],
    "Credit": [],
    "createdAt": "2023-02-06T14:01:43.150Z",
    "updatedAt": "2023-02-06T14:01:43.150Z",
    "__v": 0
}
```

#### Post request for creating a credit(expense) or debit(response)

**Credit request**
```bash
POST credit/:walletid
```

```bash
curl --location --request POST 'http://localhost: 3000/credit/63e10847f480a87623b746c1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "credit_amount": 10,
    "credit_summary": "times"
}'
```
**credit  response**

```json
{
    "wallet": "63e10847f480a87623b746c1",
    "credit_amount": 10,
    "credit_summary": "schoolfees_pay",
    "_id": "63e10b08f480a87623b746c8",
    "createdAt": "2023-02-06T14:13:28.971Z",
    "updatedAt": "2023-02-06T14:13:28.971Z",
    "__v": 0
}
```
*to `POST` a debit simply change the credit section on the url to debit.*


## Retrieving data
Doing the above post requests, i.e creating a wallet, creating a credit/debit: will update the wallet and the user document when the post method is successful.

The following `get requests` were made after user, wallet, credit and debit creation just to illustrate the point above

**Geta list of updated wallets created by a particular user**

```bash
GET wallet/:userid
```
```bash
curl --location --request GET 'http://localhost: 3000/wallets/63e100fdf480a87623b746be' \
--header 'Content-Type: application/json' \
--data-raw ''
```

**response**
```json
[
    {
        "_id": "63e10847f480a87623b746c1",
        "user": "63e100fdf480a87623b746be",
        "walletname": "schoolfees",
        "Total": -10,
        "Debit": [],
        "Credit": [
            {
                "creditid": "63e10b08f480a87623b746c8",
                "creditAmount": -10,
                "_id": "63e10b09f480a87623b746ca"
            }
        ],
        "createdAt": "2023-02-06T14:01:43.150Z",
        "updatedAt": "2023-02-06T14:13:29.102Z",
        "__v": 1
    }
]
```

**Get updated user with the wallets and Accountbalance updated**

```bash
GET /users/userid
```
```bash
curl --location --request GET 'http://localhost: 3000/users/63e100fdf480a87623b746be' \
--header 'Content-Type: application/json' \
--data-raw ''
```

**Response**
```json
{
    "name": {
        "firstname": "nina",
        "lastname": "Atieno"
    },
    "_id": "63e0dacbd52453d2f6ea62e7",
    "email": "ninah@124.com",
    "Accountbalance": 10,
    "wallets": [
        {
            "walletId": "63e0db21d52453d2f6ea62eb",
            "walletName": "christine",
            "walletTotal": -80,
            "_id": "63e0db21d52453d2f6ea62ed"
        },
        {
            "walletId": "63e0e1ff763395d21ee8ae06",
            "walletName": "priority",
            "walletTotal": 90,
            "_id": "63e0e200763395d21ee8ae08"
        }
    ],
    "createdAt": "2023-02-06T10:47:39.441Z",
    "updatedAt": "2023-02-06T11:30:32.826Z",
    "__v": 0
}
```

**Get all users and their detail**
```bash
GET /users
```

```bash
curl --location --request GET 'http://localhost: 3000/users/' \
--header 'Content-Type: application/json' \
--data-raw ''
```

**Response**
```json 
[
    {
        "name": {
            "firstname": "nina",
            "lastname": "Atieno"
        },
        "_id": "63e0dacbd52453d2f6ea62e7",
        "email": "ninah@124.com",
        "Accountbalance": 10,
        "wallets": [
            {
                "walletId": "63e0db21d52453d2f6ea62eb",
                "walletName": "christine",
                "walletTotal": -80,
                "_id": "63e0db21d52453d2f6ea62ed"
            },
            {
                "walletId": "63e0e1ff763395d21ee8ae06",
                "walletName": "priority",
                "walletTotal": 90,
                "_id": "63e0e200763395d21ee8ae08"
            }
        ],
        "createdAt": "2023-02-06T10:47:39.441Z",
        "updatedAt": "2023-02-06T11:30:32.826Z",
        "__v": 0
    },
    {
        "name": {
            "firstname": "nina",
            "lastname": "Atieno"
        },
        "_id": "63e0fee0f480a87623b746b1",
        "email": "nillah@124.com",
        "Accountbalance": 0,
        "wallets": [],
        "createdAt": "2023-02-06T13:21:36.786Z",
        "updatedAt": "2023-02-06T13:21:36.786Z",
        "__v": 0
    },
    {
        "name": {
            "firstname": "nina",
            "lastname": "Atno"
        },
        "_id": "63e100fdf480a87623b746be",
        "email": "lbah@124.com",
        "Accountbalance": -10,
        "wallets": [
            {
                "walletId": "63e10847f480a87623b746c1",
                "walletName": "schoolfees",
                "walletTotal": -10,
                "_id": "63e10847f480a87623b746c3"
            }
        ],
        "createdAt": "2023-02-06T13:30:37.730Z",
        "updatedAt": "2023-02-06T14:13:29.364Z",
        "__v": 0
    }
]
```




## License
Information on the license under which the API is released.
