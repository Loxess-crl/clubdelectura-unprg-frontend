import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugify',
  standalone: true,
})
export class SlugifyPipe implements PipeTransform {
  transform(name: string): string {
    return name.toLowerCase().replace(/\s/g, '_');
  }
}
