import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  number = 1;
  @Output() intervalFired = new EventEmitter<number>();
  interval;

  constructor() {}

  ngOnInit(): void {}

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.number);
      this.number++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
