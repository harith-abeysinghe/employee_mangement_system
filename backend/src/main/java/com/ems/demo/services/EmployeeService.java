package com.ems.demo.services;

import com.ems.demo.model.Employee;

public interface EmployeeService {

    default Employee createEmployee(Employee employee) {
        return employee;
        
    }
    
}
