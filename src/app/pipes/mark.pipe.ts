import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mark'
})
export class MarkPipe implements PipeTransform {

  transform(value: number, ...args: number[]): string {
    let output = '';
    if(value > args[0]){
      output = `🌟${value}`;
    }else{
      output = `⬆️ ${value}`;
    }
    return output;
  }

}
