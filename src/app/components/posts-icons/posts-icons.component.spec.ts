import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsIconsComponent } from './posts-icons.component';

describe('PostsIconsComponent', () => {
  let component: PostsIconsComponent;
  let fixture: ComponentFixture<PostsIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
