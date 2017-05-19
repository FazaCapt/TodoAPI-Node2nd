 MongoDB, Mongoose, and REST APIs (Todo API):

1. Section Intro 1:24
2. Installing MongoDB and Robomongo (Mac, Linux) 9:54
3. Installing MongoDB and Robomongo (Windows) 10:44
4. Building a NoSQL Vocabulary 2:48
5. Connecting to Mongo and Writing Data 18:43
6. The ObjectId 10:05
7. Fetching Data 16:33
8. Setting Up The Repo 3:48
9. Deleting Documents 15:24
10. Updating Data 11:47
11. The Mongoose ORM 1:02
12. Setting Up Mongoose 16:07
13. Validators, Types, and Defaults 13:05
14. Installing Postman 5:18
15. Resource Creation Endpoint - POST /todos 18:08
16. Testing POST /todos 19:50
17. List Resources - GET /todos 7:09
18. Testing GET /todos 6:14
19. Mongoose Queries and ID Validation 16:26
20. Getting an Individual Resource - GET /todos/:id 13:28
21. Testing GET /todos/:id 10:53
22. Deploy API to Heroku 9:57 || buat port baru || buat npm start di package.json || ini harus dilihat lagi kalo mau coba tesitng ke heroku
23. Postman Environments 5:58
24. Delete a Resource - DELETE /todos/:id 14:54
25. Testing DELETE /todos/:id 10:18
26. Updating a Resource - PATCH /todos/:id 14:19
27. Testing PATCH /todos/:id 11:01
28. Creating a Test Database || creat 'export NODE_ENV=test || SET NODE_ENV=test' di package.json

Install:
1. MongoDB 'https://www.mongodb.com/'
2. Robo Mongo 'https://robomongo.org/download'
3. npm init -y
4. npm install mongodb 'https://www.npmjs.com/package/mongodb'
5. npm install mongoose 'https://www.npmjs.com/package/mongoose'
6. npm install express 'https://www.npmjs.com/package/express'
7. npm install body-parser 'https://www.npmjs.com/package/body-parser'
8. npm install expect 'https://www.npmjs.com/package/expect'
9. npm install mocha 'https://www.npmjs.com/package/mocha'
10. npm install supertest 'https://www.npmjs.com/package/supertest'
11. npm install nodemon 'https://www.npmjs.com/package/nodemon'
12. npm install -- save lodash 'https://www.npmjs.com/package/lodash'


Documentation: 
1. node mongo native: 'http://mongodb.github.io/node-mongodb-native/'
2. reference: 'http://mongodb.github.io/node-mongodb-native/2.2/'
3. API: 'http://mongodb.github.io/node-mongodb-native/2.2/api/' (Ini sangat bermanfaat untuk buat database)
4. github: 'https://github.com/mongodb/node-mongodb-native'
5. MongoDB Update Operators: 'https://docs.mongodb.com/manual/reference/operator/update/'
6. mongoose.js: 'http://mongoosejs.com/docs/guide.html'
7. mongoose validators: 'http://mongoosejs.com/docs/validation.html'
8. mongoose schema: 'http://mongoosejs.com/docs/guide.html'
9. http status : 'https://httpstatuses.com/'
10. mongoose queris: 'http://mongoosejs.com/docs/queries.html'
11. lodash: 'https://lodash.com/docs/4.17.4'

Heroku:
1. https://gentle-eyrie-81894.herokuapp.com/
2. heroku logs
3. heroku open
4. API HEROKU BELUM DICOBA SAMA SEKALI!

cara makenya:
1. node server/server.js
2. npm start
3. npm run test-watch
4. npm test

Postman: 
1. https://www.getpostman.com/
2. kalo pake environtmen harus pake {{url}}/todos => contoh.
Penjelasan:
1. noSql mongoDB
    - Collection
    - Document
2. Mongoose.js 'http://mongoosejs.com/'
    - Mari kita hadapi itu, menulis validasi MongoDB, casting dan logika bisnis boilerplate adalah sebuah hambatan. Itu sebabnya kami menulis Mongoose.
    - Mongoose menyediakan solusi berbasis skema lurus ke depan untuk memodelkan data aplikasi Anda. Ini termasuk built-in casting tipe, validasi, membangun query, logika bisnis kait dan banyak lagi, di luar kotak.
3. body-parser
    - Node.js body parsing middleware.
    - Parse badan request masuk dalam middleware sebelum penangan Anda, tersedia di bawah properti req.body.
    - Pelajari tentang anatomi transaksi HTTP di Node.js. 'https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/'
    - Ini tidak menangani tubuh multipart, karena sifatnya yang kompleks dan biasanya besar. Untuk badan multipart, Anda mungkin tertarik dengan modul berikut:
        - Busboy dan connect-busboy 'https://www.npmjs.com/package/busboy#readme' || 'https://www.npmjs.com/package/connect-busboy#readme' || 'https://github.com/mscdex/connect-busboy'
        - Multiparty dan connect-multiparty 'https://www.npmjs.com/package/multiparty#readme' || 'https://www.npmjs.com/package/connect-multiparty#readme'
        - formidable 'https://www.npmjs.com/package/formidable#readme' 
        - Multer 'https://www.npmjs.com/package/multer#readme'
    - Modul ini menyediakan parser berikut:
        - JSON body parser 'https://www.npmjs.com/package/body-parser#bodyparserjsonoptions'
        - Raw body parser 'https://www.npmjs.com/package/body-parser#bodyparserrawoptions'
        - Text body parser 'https://www.npmjs.com/package/body-parser#bodyparsertextoptions'
        - URL-encoded form body parser 'https://www.npmjs.com/package/body-parser#bodyparserurlencodedoptions'
    - Bagian tubuh lain yang mungkin Anda minati:
        - body 'https://www.npmjs.com/package/body#readme'
        - co-body 'https://www.npmjs.com/package/co-body#readme'
4. Lodash 'https://lodash.com/'
    - Perpustakaan utilitas JavaScript modern memberikan modularitas, kinerja & ekstra.
    - Mengapa Lodash?
        - Lodash membuat JavaScript lebih mudah dengan mengambil kerumitan dari bekerja dengan array, angka, objek, string, dll. 
        - Metode modular Lodash sangat bagus untuk:
            - Iterasi array, objek, & string
            - Memanipulasi & nilai pengujian
            - Membuat fungsi komposit

