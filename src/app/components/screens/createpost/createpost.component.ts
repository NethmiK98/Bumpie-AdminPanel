import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, serverTimestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss']
})
export class CreatepostComponent {
  private readonly storage: Storage = inject(Storage);
  firestore: Firestore = inject(Firestore);
  posts$?: Observable<any[]>;
  file?: File;
  selectedImage?: any;
  article: Article = {
    title: '',
    subtitle: '',
    description: '',
    image: '',
    category: '',
    time: serverTimestamp(),
  };

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    const postCollection = collection(this.firestore, 'meditation')
    this.posts$ = collectionData(postCollection);
  }

  async addArticle() {
    await this.uploadImage();

    var postCollection = collection(this.firestore, this.article.category!);

    addDoc(postCollection, this.article).then(() => {
      this.toastr.success('Article submitted!');
      this.article = {
        title: '',
        subtitle: '',
        description: '',
        image: '',
        category: '',
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
    const filePath = `${this.article.category}/${n}`;

    if (file) {
      const storageRef = ref(this.storage, filePath);
      await uploadBytesResumable(storageRef, file).then(async () => {
        this.article.image = await getDownloadURL(storageRef);
      })
    }
  }
}
