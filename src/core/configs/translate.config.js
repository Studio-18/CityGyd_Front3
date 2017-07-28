(function (module) {
  configTranslate.$inject = ['$translateProvider','CHINESE','ENGLISH', 'FRENCH', 'SPANISH', 'KOREAN', 'JAPANESE'];

  function configTranslate($translateProvider, CHINESE, ENGLISH, FRENCH, SPANISH, KOREAN, JAPANESE) {
    
    $translateProvider.translations('en', ENGLISH);
    $translateProvider.translations('fr', FRENCH);
    $translateProvider.translations('es', SPANISH);
    $translateProvider.translations('ko', KOREAN);
    $translateProvider.translations('jp', JAPANESE);
    $translateProvider.translations('zh', CHINESE);

    $translateProvider.preferredLanguage('en');
  }

}(angular.module('Citygyd.Configs')));
