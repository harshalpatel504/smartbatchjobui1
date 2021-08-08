import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-batch-job-data',
  templateUrl: './create-batch-job-data.component.html',
  styleUrls: ['./create-batch-job-data.component.css']
})
export class CreateBatchJobDataComponent implements OnInit {

  gridApi: any;
  columnApi: any;
  column = [
    { "headerName": "ParameterName",        "field": "parameterName" },
    { "headerName": "ParameterDescription", "field": "parameterDescription" },
    { "headerName": "ParameterType",        "field": "parameterType"    },
    { "headerName": "parameterFormat",      "field": "parameterFormat"    },
    { "headerName": "mandatoryFlag",        "field": "mandatoryFlag"    },
    { "headerName": "visibleFlag",          "field": "visibleFlag"    },
    { "headerName": "defaultValue",         "field": "defaultValue"    },
    { "headerName": "regexforValidation",   "field": "regexforValidation"  }
  ];

  rowData = [
  ];

  onGridReady(params:any) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;   
    params.api.sizeColumnsToFit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}