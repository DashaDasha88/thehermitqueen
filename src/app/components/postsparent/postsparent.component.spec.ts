import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsparentComponent } from './postsparent.component';

describe('PostsparentComponent', () => {
  let component: PostsparentComponent;
  let fixture: ComponentFixture<PostsparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
