import { async, TestBed } from '@angular/core/testing';
import { EditBlogComponent } from './edit-blog.component';
describe('EditBlogComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EditBlogComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EditBlogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=E:/developmnet/AngularFirebase/src/app/components/edit-blog/edit-blog.component.spec.js.map