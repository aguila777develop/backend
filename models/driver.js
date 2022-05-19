/*

const { Schema, model } = require("mongoose");



const DriverSchema = Schema({

    nombre:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    online:{
        type: Boolean,
        default: false
    },
    status1:{
        type: Boolean,
        default: false
    },
    // esto para las fecha anque mongo ya tiene las fechas
    fecha:{
        type: Date,
        default: new Date()
    }



});

//extraemos la informacion que necesitamos
DriverSchema.method('toJSON', function(){
    const { __v, _id, password, ...object} = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Driver', DriverSchema);
*/