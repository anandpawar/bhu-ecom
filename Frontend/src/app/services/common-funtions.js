export function convertToTypes(fields, formValues){
    for (const key in formValues) {
        const element = formValues[key];
        if(fields[key] == "boolean"){
            formValues[key] = element == "true" ? true : false;
        }else if(fields[key] == "number"){
            formValues[key] = +element;
        }
    }
}