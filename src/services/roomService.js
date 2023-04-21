const Room = require('../model/room');

exports.getAllRooms = async () => {
    return Room.find();
};

exports.getRoomById = async (roomId) => {
    return  Room.findById(roomId);
};


