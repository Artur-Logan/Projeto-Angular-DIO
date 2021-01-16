import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'repleace'
})
export class ReplacePipe implements PipeTransform{
    
    transform(value: string, char: string, valueToRepleace: string){
        return value.replace(char, valueToRepleace)
    }
}