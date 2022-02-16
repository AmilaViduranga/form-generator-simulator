package com.formgenerator.api.controllers;

import com.formgenerator.api.models.CustomForm;
import com.formgenerator.api.models.CustomOptions;
import com.formgenerator.api.models.CustomRegularExpression;
import com.formgenerator.api.models.FormField;
import com.formgenerator.api.repository.CustomFormRepository;
import com.formgenerator.api.repository.CustomOptionRepository;
import com.formgenerator.api.repository.CustomRegularExpressionRepository;
import com.formgenerator.api.repository.FormFieldRepository;
import org.bson.json.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;

@RestController
@RequestMapping(value = "/custom_form")
public class CustomFormController {

  @Autowired
  public CustomFormRepository customFormRepository;

  @Autowired
  public CustomOptionRepository customOptionRepository;

  @Autowired
  public CustomRegularExpressionRepository customRegularExpressionRepository;

  @Autowired
  public FormFieldRepository formFieldRepository;

  @GetMapping(value = "/all", produces = "application/json")
  public ResponseEntity<List<CustomForm>> getAllForms() {
    List<CustomForm> availableForms = this.customFormRepository.findAll();
    return new ResponseEntity<>(availableForms, HttpStatus.OK);
  }

  @PostMapping(value="/create", produces = "application/json")
  public ResponseEntity createForm(@RequestBody CustomForm form) {
    form.getFields().forEach(field -> {
      field.getOptions().forEach(option -> {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        option.setId(timestamp.getTime());
        CustomOptions createdOption = this.customOptionRepository.insert(option);
        option.setId(createdOption.getId());
      });
      field.getRegularExpression().forEach(reg -> {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        reg.setId(timestamp.getTime());
        CustomRegularExpression createdRegularExpression = this.customRegularExpressionRepository.insert(reg);
        reg.setId(createdRegularExpression.getId());
      });
      Timestamp timestamp = new Timestamp(System.currentTimeMillis());
      field.setId(timestamp.getTime());
      FormField createdField = this.formFieldRepository.insert(field);
      field.setId(createdField.getId());
    });
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    form.setId(timestamp.getTime());
    this.customFormRepository.insert(form);
    JsonObject object = new JsonObject("{message:'created successfully'}");
    return new ResponseEntity(object, HttpStatus.OK);
  }
}
