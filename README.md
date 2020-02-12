# API Users

## Overview
It's CRUDS api for managed all users.

### [POST] Create user
Allows the creation of a single user.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : POST → user/create

#### Parameters :
```javascript
{
  'first_name': 'Cyril', // optionnal
  'last_name': 'Vimard', // optionnal
  'email': 'xzen769@gmail.com', // required
  'password': '123456789', // required
  'age': 32, // optionnal
  'gender': 'm', // optionnal,
  'height': 1.90, // optionnal
  'weight': 90, // optionnal
  'city': 'Paris', // optionnal
  'city_code': '75000', // optionnal
  'street_number': 13, // optionnal
  'street_type': 'rue', // optionnal
  'street_name': 'de cambrai', // optionnal
  'phone': '0606060606', // optionnal
  'image_profil': 'https://www.mediacritik.com/wp-content/uploads/2019/04/rs_1024x759-170407142939-1024.Peter-Dinklage-Game-of-Thrones.kg_.040717.jpg' // optionnal
}
```

#### Response :
```javascript
{
  'id': '12483hdhd2838',
  'first_name': 'Cyril',
  'last_name': 'Vimard',
  'email': 'xzen769@gmail.com',
  'password': '123456789',
  'age': 32,
  'gender': 'm',
  'height': 1.90,
  'weight': 90,
  'city': 'Paris',
  'cityCode': '75000',
  'street_number': 13,
  'street_type': 'rue',
  'street_name': 'de cambrai',
  'phone': '0606060606',
  'image_profil': 'https://www.mediacritik.com/wp-content/uploads/2019/04/rs_1024x759-170407142939-1024.Peter-Dinklage-Game-of-Thrones.kg_.040717.jpg'
}
```

























### [GET] Show user
Get an user by id.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : GET → user/show/:id

#### Parameters :
```javascript
```