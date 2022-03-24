import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swapiLink',
  pure: true,
})
export class SwapiLinkPipe implements PipeTransform {
  transform(url: string): string | undefined {
    console.log('Pipe', url);
    return url.split('/').slice(0, -1).pop();
  }
}
