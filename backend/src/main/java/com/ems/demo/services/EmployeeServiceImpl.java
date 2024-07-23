package com.ems.demo.services;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import com.ems.demo.entity.EmployeeEntity;
import com.ems.demo.model.Employee;
import com.ems.demo.repository.EmployeeRepo;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    
    private EmployeeRepo employeeRepo;
    /**
     * @return EmployeeRepo return the employeeRepo
     */
    public EmployeeRepo getEmployeeRepo() {
        return employeeRepo;
    }

    public EmployeeServiceImpl(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepo.save(employeeEntity);
        return employee;
    }

   

}
