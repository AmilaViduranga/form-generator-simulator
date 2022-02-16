package com.formgenerator.api.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "CustomForm")
public class CustomForm {

  @Id
  private long id;
  private String name;
  private List<FormField> fields;

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public List<FormField> getFields() {
    return fields;
  }

  public void setFields(List<FormField> fields) {
    this.fields = fields;
  }
}
