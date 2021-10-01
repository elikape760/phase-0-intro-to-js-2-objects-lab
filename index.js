// Write your solution in this file!

const employee = {
name: "",
streetAddress: "",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = { ...employee };

    newEmployee[key] = value;

  return newEmployee;
};
const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "sam"
  );

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
};
  

function deleteFromEmployeeByKey() {
    const newEmployee = { ...employee };

    delete newEmployee.name;

  return newEmployee;
};



function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;

    return employee;
};