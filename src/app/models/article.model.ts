import { FieldValue } from '@angular/fire/firestore';

export class Article {
    title?: string;
    subtitle?: string;
    description?: string;
    image?: string;
    category?: string;
    time?: FieldValue;
}
