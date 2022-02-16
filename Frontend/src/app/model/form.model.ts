export const fieldTypes = [
    {
        value: 'text',
        label: 'Text'
    },
    {
        value: 'textArea',
        label: 'Text Area'
    },
    {
        value: 'number',
        label: 'Number only'
    },
    {
        value: 'select',
        label: 'Select'
    },
    {
        value: 'radio',
        label: 'Radio'
    },
    {
        value: 'checkBox',
        label: 'Check Box'
    },
    {
        value: 'email',
        label: 'E-Mail'
    },
    {
        value: 'password',
        label: 'Password'
    },
    {
        value: 'date',
        label: 'Date'
    },
    {
        value: 'time',
        label: 'Time'
    },
    {
        value: 'datetime-local',
        label: 'Date-Time'
    },
    {
        value: 'color',
        label: 'Color plate'
    }
];

export class CustomRegularExpression {
    _id?: number;
    expression?: string;
    errorMessage?: string;
}

export class CustomOptions {
    _id?: number;
    optionLabel?: string;
    optionValue?: string;
}

export class FormField {
    _id?: number;
    name?: string;
    options?: Array<CustomOptions> = new Array<CustomOptions>();
    regularExpression?: Array<CustomRegularExpression> = new Array<CustomRegularExpression>();
    elementType?: string;
    placeHolder?: string;
}

export class CustomForm {
    _id?: number;
    name?: string;
    fields?: Array<FormField> = new Array<FormField>();
}
