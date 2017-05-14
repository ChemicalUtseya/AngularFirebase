import { async, TestBed } from '@angular/core/testing';
import { AddBlogComponent } from './add-blog.component';
describe('AddListingComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddBlogComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddBlogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=E:/developmnet/AngularFirebase/src/app/components/add-blog/add-blog.component.spec.js.map