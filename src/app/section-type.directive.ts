import { Directive, ViewContainerRef, TemplateRef, Host, OnChanges, Input } from '@angular/core';
import { SectionHeaderComponent } from './section-header/section-header.component';

@Directive({
  selector: '[sectionType]'
})
export class SectionTypeDirective implements OnChanges {
  sectionView: SectionView;
  @Input() sectionType: string;
  constructor(
    viewContainer: ViewContainerRef,
    templateRef: TemplateRef<object>,
    @Host() private sectionHeader: SectionHeaderComponent
  ) {
    this.sectionView = new SectionView(viewContainer, templateRef);
  }

  ngOnChanges() {
    this.sectionView.updateView(this.sectionHeader.section.type === this.sectionType);
  }
}

class SectionView {
  private created = false;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<object>
  ) {}

  create(): void {
    this.created = true;
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }

  destroy(): void {
    this.created = false;
    this.viewContainerRef.clear();
  }

  updateView(created: boolean) {
    if (created && !this.created) {
      this.create();
    } else if (!created && this.created) {
      this.destroy();
    }
  }
}
