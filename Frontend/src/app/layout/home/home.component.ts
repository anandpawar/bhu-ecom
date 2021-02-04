import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  images = [
    {
      src:
        "https://images5.alphacoders.com/518/thumb-1920-518957.jpg",
      captionPlace: "Niagara Falls, CANADA",
    },
    {
      src:
        "https://lp-cms-production.imgix.net/2019-06/27860479.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4",
      captionPlace: "Vancouver, Canada",
    },
    {
      src:
        "https://s3.amazonaws.com/btoimage/prism-thumbnails/articles/20202003-EmptyStreets-49.jpg-resize_then_crop-_frame_bg_color_FFF-h_1365-gravity_center-q_70-preserve_ratio_true-w_2048_.webp",
      captionPlace: "Toronto, Canada",
    },
    {
      src:
        "https://www.goodfreephotos.com/albums/canada/alberta/jasper-national-park/sky-tram-at-jasper-national-park-alberta-canada.jpg",
      captionPlace: "Jasper National Park, Canada",
    },
    {
      src:
        "https://cdn.betakit.com/wp-content/uploads/2020/03/QB-parliament.jpg",
      captionPlace: "New Brunswick, Canada",
    },
    {
      src:
        "https://i.pinimg.com/originals/10/3a/65/103a65d492523f99be5ab386f320e751.jpg",
      captionPlace: "Abraham Lake, Canada",
    },
    {
      src:
        "https://peakvisor.com/img/news/banff-national-park.jpg",
      captionPlace: "Banff National Park, Canada",
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
