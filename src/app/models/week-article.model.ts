import { FieldValue } from '@angular/fire/firestore';

export class WeekArticle {
    title?: string;
    subtitle?: string;
    description?: string;
    image?: string;
    time?: FieldValue;
    order?: number;
}
