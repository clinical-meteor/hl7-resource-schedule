##clinical:hl7-resource-schedule

HL7 FHIR Resource - Schedule


===============================
#### Conformance Statement  

The resource in this package implements the FHIR Patient Resource schema provided at  [https://www.hl7.org/fhir/schedule.html](https://www.hl7.org/fhir/schedule.html).  


===============================
#### Installation  

````bash
# to add hl7 resource schemas and rest routes
meteor add clinical:hl7-resource-schedule

# to initialize default data
INITIALIZE=true meteor
````

===============================
#### Example   

```js
var personalSchedule = {}
Schedules.insert(personalSchedule);
```

===============================
#### Extending the Schema

```js
ExtendedScheduleSchema = new SimpleSchema([
  ScheduleSchema,
  {
    "createdAt": {
      "type": Date,
      "optional": true
    }
  }
]);
Schedules.attachSchema( ExtendedScheduleSchema );
```



===============================
#### Utilities  

If you're working with HL7 FHIR Resources, we recommend using [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en).




===============================
#### Licensing  

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
