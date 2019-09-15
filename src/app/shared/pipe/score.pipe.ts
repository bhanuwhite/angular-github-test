/* Creating score pipe to transform the value into high low medium
 * @author: saurabh (shivam)
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'scorePipe' })
export class ScorePipe implements PipeTransform {
  transform(value: number) {
    /* checking score condition and defining their value*/
    if (value < 20) {
      return 'Low';
    } else if (value < 50) {
      return 'Medium';
    } else {
      return 'High';
    }
  }
}