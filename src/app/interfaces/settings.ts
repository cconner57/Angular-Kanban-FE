export interface Settings {
  navMenuExpanded: boolean;
  colorTheme: string;
  modal: null | 'AddBoard' | 'AddTask' | 'DeleteBoard' | 'DeleteTask' | 'EditBoard' | 'EditTask' | 'ViewTask';
}
