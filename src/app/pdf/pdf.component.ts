import {Component, OnInit} from '@angular/core';
import jsPDF from 'jspdf';
import * as html2canvas from "html2canvas";

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss'],
})
export class PdfComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
  openPdf() {
    let CV = document.getElementById('data');
    // @ts-ignore
    html2canvas(CV).then((canvas: HTMLCanvasElement) => {

      console.log(canvas);
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      console.log(FILEURI);
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      console.log(PDF);
      PDF.save('angular-demo.pdf');
    });
  }
}
