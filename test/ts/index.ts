// import {expect} from "chai";
// import "mocha";
import * as angular from "angular";
import * as ng from "angular";
import "angular-ui-router";
import "angular-mocks/angular-mocks";
import {Component, Config, Directive, Inject, Module, Run, State} from "../../src/index";


@Component({
	name: "startPage",
	template: `{{$ctrl.message}}`
})
@State({
	url: "/startPage",
	params: {}
})
class StartPage {
	public message: string = "Hello";

	public constructor(
			@Inject("$http") private _httpService: ng.IHttpService,
			@Inject("$state") private _stateService: ng.ui.IStateService
	) {
	}

	public goToTestPage(messageForTestPage: string) {
		this._stateService.go("test", {message: messageForTestPage});
	}
}

@Module({
	name: 'xxx',
	imports: ['ui-router'],
	declarations: [
		StartPage
	],
	boot: StartPage
})
class XXX {
	@Config()
	config() {
	}

	@Run()
	run() {
	}
}

let t = 0;

@Directive({
	name: 'pupi',
	template: '<div>spanch</div>',
	link: function (scope, el, attr, ctrl) {
		t = 1;
	}
})
class Pupi {
	doSome() {
		return 123;
	}
}


describe('typescript', function () {
	beforeAll(() => {
		angular.mock.module('xxx');

		inject($injector => {
			this['$rootScope'] = $injector.get('$rootScope');
			this['$compile'] = $injector.get('$compile');
			this['$location'] = $injector.get('$location');
			this['$route'] = $injector.get('$route');
			this['$rootScope'] = $injector.get('$rootScope');
			this['$location'] = $injector.get('$location');
			this['$httpBackend'] = $injector.get('$httpBackend');

			this['$httpBackend'].when('GET', 'home.tpl.html').respond('home');
		});
	});

	it('directive from inject', inject((_pupi_) => {
		this['pupi'] = _pupi_;
		expect(this['$location'].path()).toBe('/startPage');
		expect(this['pupi'].doSome()).toBe(123);


		// this['$rootScope'].$apply(function() {
		// 	this['$location'].path('/home');
		// });
		// expect(this['$location'].path()).to.be('/home');
		expect(this['$route'].current.templateUrl).toBe('{{$ctrl.message}}');
		expect(this['$route'].current.controller).toBe('StartPage');
	}));

	it('directive', () => {
		let scope = this['$rootScope'].new();
		let app = this['$compile']('<div ng-app="xxx"><pupi></pupi></div>')(scope);
		scope.$digest();

		// expect(app.innerHTML).toBeTruthy();
		expect(app.html()).toContain('Hello spanch');
	});
});
