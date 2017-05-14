import { async, TestBed } from '@angular/core/testing';
import { BlogsComponent } from "../blogs/blogs.component";
describe('BlogsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BlogsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BlogsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=E:/developmnet/AngularFirebase/src/app/components/blog/blog.component.spec.js.map