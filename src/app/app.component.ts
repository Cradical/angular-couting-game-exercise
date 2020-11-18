import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  evenEvents = [];
  oddEvents = [];

  onIntervalFired(event) {
    if (event % 2) {
      this.oddEvents.push(event);
    } else {
      this.evenEvents.push(event);
    }
  }
}
