import {Component} from '@angular/core';
import {TranslateService} from "ng2-translate";
import {ItemsService} from "../../shared/services/items.service";

@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.component.html'
})

export class PreferencesPage {

  private translateService: TranslateService;

  constructor(translateService: TranslateService,
              private itemsService: ItemsService) {
    this.translateService = translateService;
  }

  setLanguage(language: string): void {
    this.translateService.use(language);
  }

  resetDB(): void {
    this.itemsService.removeAll();
  }

}
