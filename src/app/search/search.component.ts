import { Component, Inject } from '@angular/core';
import { SpeechRecognitionService } from '../../service/speech-recognition.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  speechData: any[];
  isListening: boolean = false;
  constructor(private speechRecognitionService: SpeechRecognitionService) {}

  check() {
    this.isListening = !this.isListening;
    if(this.isListening){
      this.start();
    } else {
      this.stop();
    }
  }

  start() {

    this.speechRecognitionService.record()
      .subscribe(
      //listener
      (value) => {
        this.speechData.push(value);
        console.log(value);
      },
      //errror
      (err) => {
        console.log(err);
      },
      //completion
      () => {
        console.log("--complete--");
      });

  }

  stop() {
    this.speechRecognitionService.DestroySpeechObject();
  }


}