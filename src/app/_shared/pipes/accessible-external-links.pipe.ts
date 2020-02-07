import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accessibleExternalLinks'
})
export class AccessibleExternalLinksPipe implements PipeTransform {

  transform(content: string): any {
    return content.replace(
      /(\<a ([^>]+)?)(target\=\"\_blank\"([^>]+)?\>([^<]+)?)\<\/a\>/,
      '$1 title="This link will open in a new window" $3<span class="sr-only"> This link will open in a new window</span></a>');
  }

}
