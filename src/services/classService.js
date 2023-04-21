const Class = require('../model/class');

exports.getAllClasses = async () => {
    return Class.find();
};

exports.getClassById = async (classId) => {
    return  Class.findById(classId);
};

exports.createClass = async (classData) => {
    const class_ = new Class(classData);
    await class_.save();
    return class_;
};

exports.updateClass = async (classId, classData) => {
    return Class.findByIdAndUpdate(classId, classData, { new: true });
};

exports.deleteClass = async (classId) => {
    await Class.findByIdAndDelete(classId);
};
