import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value): string {
    switch (value) {
      case "0.25":
        return "3 Months"
        break;
      case "0.50":
        return "6 Months"
        break;
      case "0.75":
        return "9 Months"
        break;
      case "1":
        return "1 Year"
        break;
      case "2":
        return "2 Years"
        break;
      case "3":
        return "3 Years"
        break;
      case "4":
        return "4 Years"
        break;
      case "5":
        return "5 Years"
        break;
      case "6":
        return "6 Years"
        break;
      case "7":
        return "7 Years"
        break;
      case "8":
        return "8 Years"
        break;
      case "9":
        return "9 Years"
        break;
      case "10":
        return "10 Years or more"
        break;
      default:
        return "-"
        break;
    }
  }


}
