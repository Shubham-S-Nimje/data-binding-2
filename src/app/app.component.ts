import { Component } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'data-binding-2';
  // data: string = '';
  // name: string = '';

  isDisable = true;
  imgUrl: string = 'meme (1).jpg';
  iniName1: string = '';
  iniName2: string = '';
  name1: string = 'When you trying to look at the code you wrote a month ago';
  name2: string = "IT'S SOME KIND OF ELVISH I CAN'T READ IT";
  imgUrl1: string = 'meme (1).jpg';

  handleSubmit() {
    this.imgUrl1 = this.imgUrl;
    this.name1 = this.iniName1;
    this.name2 = this.iniName2;
    this.isDisable = false;
  }

  handleImgClick(url: string) {
    this.imgUrl1 = url;
    this.imgUrl = url;
  }

  handleClrClick() {
    this.imgUrl = 'meme (1).jpg';
    this.iniName1 = '';
    this.iniName2 = '';
    this.name1 = 'When you trying to look at the code you wrote a month ago';
    this.name2 = "IT'S SOME KIND OF ELVISH I CAN'T READ IT";
    this.imgUrl1 = 'meme (1).jpg';
    this.isDisable = true;
  }

  downloadMeme() {
    const memeElement = document.getElementById('meme');
    if (memeElement) {
      html2canvas(memeElement).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'meme.png';
        link.click();
      });
    }
  }
}
