import express from 'express';
import mysql from 'mysql2';

const app = express();
app.use(express.json());

const con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database:'nodejs_learn',
    password: '',
})

con.connect(
    (err)=>{
if(err){'connection failed'}
    console.log('Connected')
    }
);

app.get('/:id', (req, res) => {
    // try {
    //     const id = req.params;
    // console.log('id:', id);
    // res.status(200).json({message: "get request is working", data: id});
    // } catch (error) {
    //     res.status(500).json({error});
    // }
    
});

app.post('/', (req, res) => {
    console.log(req.body);
const {name, lastName, phone, email} = req.body
const q =`INSERT INTO table1 (name, lastName, phone, email) VALUES (?, ?, ?, ?);`
con.query(q, [name, lastName, phone, email], (err, data)=>{
    if(err) {return res.status(500).send("error in execution of the query")}
    return res.status(200).json({message: 'datas inserted into dtabase', data })
})
});

app.put('/', (req, res) => {
    const email = req.body.email;
    const q = `UPDATE table1 SET email = ? WHERE id = 1`;
    con.query(q, [email], (err, data )=>{
if(err) {return res.status(500).send("error executing put")}
{return res.status(200).json({message: 'data inserted', data})}
    })
});
app.delete('/', (req, res) => {
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
