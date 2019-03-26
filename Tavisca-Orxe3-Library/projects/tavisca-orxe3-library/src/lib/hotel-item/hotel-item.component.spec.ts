import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelItemComponent } from './hotel-item.component';

describe('TaviscaInputComponent', () => {
  let component: HotelItemComponent;
  let fixture: ComponentFixture<HotelItemComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelItemComponent);
    component = fixture.componentInstance;
    component.hotelDetails = {"id":"86479","name":"Novotel Paris Rueil Malmaison","displayFare":{"currency":"USD","totalFare":127.72,"breakup":{"baseFare":122.11,"taxes":[{"desc":"TotalTax","amount":5.61}],"fees":[],"discounts":[],"markups":[]},"commissions":[]},"purchaseOption":{"totalPurchaseUnits":1,"cashCurrency":"USD","pointsCurrency":"Points","rewards":[{"id":"5259|5","name":"ORXeC Demo Hotel Reward $100 Dollars Off","rank":1,"type":"Dollars_Off","recommendation":{"maxQuantity":1,"cash":91.002,"points":212338},"isEligible":true,"ruleSet":{"minimumPoints":10000,"maximumPoints":212338,"pointToCashFactor":{"value":0,"operator":"Multiply"},"cashRoundingOff":100,"pointStepSize":1,"roundingType":"None"},"strikeoutValue":{"cash":0,"points":304340},"actualValue":{"cash":0,"points":303340},"stateBag":[{"key":"RequiresBinValidation","value":"False"},{"key":"RequiresOrderHistoryValidation","value":"False"},{"key":"DiscountAmount","value":"0"},{"key":"DiscountType","value":"None"},{"key":"FareQuoteAdjustmentAmount","value":"0"},{"key":"UnitSupplierFee","value":"0"},{"key":"UnitTax","value":"9.17"},{"key":"ClientPrice","value":"100.0000"},{"key":"CrossOffFareQuote","value":"240.92"}]},{"id":"5262|1","name":"ORXeC Demo Variable Hotel 3.0 PCM 1000","rank":2,"type":"Variable_TieredVariable_LAPF_HybridFTP","recommendation":{"maxQuantity":1,"cash":91.002,"points":212338},"isEligible":false,"ruleSet":{"minimumPoints":1000,"maximumPoints":212338,"pointToCashFactor":{"value":0.01,"operator":"Multiply"},"cashRoundingOff":0,"pointStepSize":1,"roundingType":"Up"},"strikeoutValue":{"cash":200,"points":304340},"actualValue":{"cash":0,"points":303340},"stateBag":[{"key":"RequiresBinValidation","value":"False"},{"key":"RequiresOrderHistoryValidation","value":"False"},{"key":"DiscountAmount","value":"0"},{"key":"DiscountType","value":"None"},{"key":"FareQuoteAdjustmentAmount","value":"0"},{"key":"UnitSupplierFee","value":"0"},{"key":"UnitTax","value":"9.17"},{"key":"CrossOffFareQuote","value":"240.92"}]},{"id":"5256|5","name":"ORXeC Demo Hotel Reward $100 Dollars Off","rank":1,"type":"Dollars_Off_Incremental","recommendation":{"maxQuantity":1,"cash":91.002,"points":212338},"isEligible":true,"ruleSet":{"minimumPoints":10000,"maximumPoints":212338,"pointToCashFactor":{"value":0,"operator":"Multiply"},"cashRoundingOff":100,"pointStepSize":1,"roundingType":"None"},"strikeoutValue":{"cash":0,"points":304340},"actualValue":{"cash":0,"points":303340},"stateBag":[{"key":"RequiresBinValidation","value":"False"},{"key":"RequiresOrderHistoryValidation","value":"False"},{"key":"DiscountAmount","value":"0"},{"key":"DiscountType","value":"None"},{"key":"FareQuoteAdjustmentAmount","value":"0"},{"key":"UnitSupplierFee","value":"0"},{"key":"UnitTax","value":"9.17"},{"key":"ClientPrice","value":"100.0000"},{"key":"CrossOffFareQuote","value":"240.92"}]},{"id":"23|124","name":"Pay in Cash","rank":100,"type":"Purchase","recommendation":{"maxQuantity":1,"cash":303.34,"points":0},"isEligible":true,"ruleSet":{"minimumPoints":0,"maximumPoints":0,"pointToCashFactor":{"value":0,"operator":"Multiply"},"cashRoundingOff":0,"pointStepSize":0,"roundingType":"Up"},"strikeoutValue":{"cash":313.34,"points":0},"actualValue":{"cash":303.34,"points":0},"stateBag":[{"key":"RequiresBinValidation","value":"False"},{"key":"RequiresOrderHistoryValidation","value":"False"},{"key":"DiscountAmount","value":"0"},{"key":"DiscountType","value":"None"},{"key":"FareQuoteAdjustmentAmount","value":"0"},{"key":"UnitSupplierFee","value":"0"},{"key":"UnitTax","value":"0"},{"key":"CrossOffFareQuote","value":"0"}]}]},"content":{"rating":4,"geocode":{"lat":48.888345,"long":2.168415},"contact":{"phones":[],"address":{"city":{"code":"","name":"Rueil-Malmaison"},"line1":"21 Avenue Edouard Belin","line2":"","state":{"code":"","name":""},"countryCode":"FR","postalCode":"92566"}},"descriptions":[],"activities":[],"areaAttractions":[],"policies":[],"amenities":[],"hotelChain":{"name":"Novotel"},"thumbnails":[],"images":[]},"distanceKm":30.85,"supplierId":"2qir9x6t6gw","refundability":"Unknown"};
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});