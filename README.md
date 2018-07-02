If you want quickly write angular.1 code - just use it and be happy.

# How to start
`npm i angular.1-decorators @types/node @types/angular @types/angular-ui-router `

# How to write (examples)
1. main

	```typescript
    import * as angular from "angular";
    import * as ng from "angular";
    import "angular-ui-router/index";
    import "angular-mocks/angular-mocks";
    import {Component, Config, Directive, Inject, Module, Run, State} from "angular.1-decorators";
  
    @Module({
      name: "xxx",
      imports: ["ui.router"],
      declarations: [
          LoginPage
      ],
      boot: LoginPage
    })
    class XXX {
      @Config()
      config(){
      }
      
      @Run()
      run(){
      }
    }
	```

2. component

	```typescript
    import * as angular from "angular";
    import * as ng from "angular";
    import "angular-ui-router/index";
    import "angular-mocks/angular-mocks";
    import {Component, Config, Directive, Inject, Module, Run, State} from "angular.1-decorators"; 

    class DataModel {
      field1: String;
      id: Number;
    }
    
    @Component({
    name: 'myCmp'
    })
    class MyCmp {
      dataSet;
     
      constructor(){
         this.dataSet = new DataModel();
      }
      $onInit(){}
      $onChanges(changes) {}
    }
	```

3. State - you wanna create page?

	```typescript
    import * as angular from "angular";
    import * as ng from "angular";
    import "angular-ui-router/index";
    import "angular-mocks/angular-mocks";
    import {Component, Config, Directive, Inject, Module, Run, State} from "angular.1-decorators";

    @Component({
        name: "home",
        template: `{{$ctrl.message}}`
    })
    @State({
        url: "/",
        params: {}
    })
    export class LoginPage {
        public message: string = "Hello world!";
        
        public constructor(
            @Inject("$http") private _httpService: ng.IHttpService,
            @Inject("$state") private _stateService: ng.ui.IStateService
        ) {
        }
         public goToTestPage(messageForTestPage: string) {
            this._stateService.go("test", { message: messageForTestPage });
        }
    }
	```

Do you like more? - follow to issues and ask eme about.
