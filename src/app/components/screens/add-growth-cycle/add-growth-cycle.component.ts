import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, serverTimestamp, query, orderBy, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { WeekArticle } from 'src/app/models/week-article.model';
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-growth-cycle',
  templateUrl: './add-growth-cycle.component.html',
  styleUrls: ['./add-growth-cycle.component.scss']
})
export class AddGrowthCycleComponent {
  private readonly storage: Storage = inject(Storage);
  firestore: Firestore = inject(Firestore);
  posts$?: Observable<any[]>;
  file?: File;
  selectedImage?: any;
  article: WeekArticle = {
    title: '',
    subtitle: '',
    description: '',
    image: '',
    time: serverTimestamp(),
    order: 0,
  };
  weeks$?: Observable<any[]>;
  selectedWeek: any;

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    const postCollection = collection(this.firestore, 'meditation')
    this.posts$ = collectionData(postCollection);


    const ref = collection(this.firestore, 'growth-cycle');
    const q = query(ref, orderBy('week', 'asc'));
    this.weeks$ = collectionData(q, { idField: 'id' });
  }

  async addArticle() {
    await this.uploadImage();

    var postCollection = collection(this.firestore, `growth-cycle/${this.selectedWeek}/articles`);


    const docs = await getDocs(postCollection);
    this.article.order = docs.docs.length + 1;

    addDoc(postCollection, this.article).then(() => {
      this.toastr.success('Article submitted!');
      this.article = {
        title: '',
        subtitle: '',
        description: '',
        image: '',
        order: 0,
        time: serverTimestamp(),
      };
      this.selectedImage = undefined;
      this.file = undefined;
    });
  }

  addImage(e: any) {
    this.file = e[0];
  }

  async uploadImage() {
    var n = Date.now();
    const file = this.file;
    const filePath = `week-articles/${n}`;

    if (file) {
      const storageRef = ref(this.storage, filePath);
      await uploadBytesResumable(storageRef, file).then(async () => {
        this.article.image = await getDownloadURL(storageRef);
      })
    }
  }
}
