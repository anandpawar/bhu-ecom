import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(value): string {
    switch (value) {
      case "12":
        return "Expert"
        break;
      case "11":
        return "Very Good"
        break;
      case "9":
        return "Good"
        break;
      case "7":
        return "Competent"
        break;
      case "5":
        return "Modest"
        break;
      case "4":
        return "Limited"
        break;
      case "0":
        return "Not at All"
        break;
      default:
        return "-"
        break;
    }
  }

}
