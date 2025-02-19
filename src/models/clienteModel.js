import { Schema, model } from 'mongoose'; 
import { StringDecoder } from 'string_decoder';


const clienteSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },
 telefone: {
        type: [ Number ],
        required: true
    },
    endereco: {
        type: String,
        required: true
    }
});


export default model('Cliente', clienteSchema);