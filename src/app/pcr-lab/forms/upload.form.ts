import { FormlyFieldConfig } from "@ngx-formly/core"

const tenants = [
    {label: 'TESTTERMIN', value: 'TESTTERMIN'},
    {label: 'TESTKALENDER', value: 'TESTKALENDER'},
    {label: 'WIRTESTENUNS', value: 'WIRTESTENUNS'},
    {label: 'ANMELDUNGTESTZENTRUM', value: 'ANMELDUNGTESTZENTRUM'},
    {label: 'TESTTERMIN24', value: 'TESTTERMIN24'},
    {label: 'LOCALHOST', value: 'LOCALHOST'},
    {label: 'TESTTERMINCH', value: 'TESTTERMINCH'},
    {label: 'CLINIGO ', value: 'CLINIGO '},
  ]
  
const results = [
    {label: '0', value: '0'},
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: 'INV', value: 'INV'},
    {label: 'NEG', value: 'NEG'},
    {label: 'POS', value: 'POS'},
]

export const uploadForm: FormlyFieldConfig[] = [
    {
        className: 'section-label',
        template: '<h5>Upload your Result now!</h5>',
    },
    {
        fieldGroupClassName: 'row',
        fieldGroup: [
            {
                key: 'token',
                type: 'input',
                className: 'col-6',
                templateOptions: {
                  label: 'Bearer Token',
                  placeholder: 'Enter your token here...',
                  required: true,
                }
              }, 
              {
                key: 'pcr_lab_id',
                type: 'select',
                className: 'col-6',
                templateOptions: {
                  label: 'PCR-Lab ID',
                  required: true,
                  options: [
                    {label: '1', value: 1},
                    {label: '2', value: 2},
                  ]
                }
              },
              {
                key: 'tenant',
                type: 'select',
                className: 'col-6',
                templateOptions: {
                  label: 'Tenant',
                  required: true,
                  options: tenants
                }
              },
              {
                key: 'result',
                type: 'select',
                className: 'col-6',
                templateOptions: {
                  label: 'Result',
                  required: true,
                  options: results
                }
              },
              {
                key: 'tubeId',
                type: 'input',
                className: 'col-6',
                templateOptions: {
                  label: 'Tube ID',
                  required: true,
                }
              },
              {
                key: 'resultTime',
                type: 'input',
                className: 'col-6',
                templateOptions: {
                  label: 'Result Time',
                  required: true,
                  type: 'date',
                }
              },
        ]
    },
    {
        fieldGroupClassName: 'row',
        fieldGroup: [
            {
                key: 'ctValue',
                type: 'input',
                className: 'col-6',
                templateOptions: {
                  label: 'CT Value',
                }
              },
              {
                key: 'virusN1',
                type: 'input',
                className: 'col-6',
                templateOptions: {
                  label: 'virusN1',
                }
              },
              {
                key: 'virusN2',
                type: 'input',
                className: 'col-6',
                templateOptions: {
                  label: 'virusN2',
                }
              },
              {
                key: 'rNaseP',
                type: 'input',
                className: 'col-6',
                templateOptions: {
                  label: 'rNaseP',
                }
              },
              {
                key: 'cwaGuId',
                type: 'input',
                className: 'col-6',
                templateOptions: {
                  label: 'CwaGu ID',
                }
              }
        ]
    }
]