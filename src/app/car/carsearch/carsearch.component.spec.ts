
import { CarsearchComponent } from './carsearch.component';

import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CarsearchService } from './carsearch.service';
import { CarcommonService } from '../carcommon.service';
// import { SearchService } from './search.service';
// import { CarcommonService } from '../Carcommon.service';

describe('CarTabComponent', () => {
  let CarTabComponent: CarsearchComponent;
  let fixture: ComponentFixture<CarsearchComponent>;
 let service:jasmine.SpyObj<CarsearchService> = jasmine.createSpyObj("SearchService",["searchinit","searchstatus","searchresult"]);
 let parentservice:jasmine.SpyObj<CarcommonService>


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsearchComponent ],
      imports : [
          HttpClientTestingModule,
          ReactiveFormsModule,
          FormsModule],
      providers : [
        CarsearchService
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarsearchComponent);
    CarTabComponent = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(CarTabComponent).toBeTruthy();
  });

  it('should call the search-init and save the response',() =>{
  
   let response:any ={}; 
   response = {
    "sessionId": "723c3073-e233-4462-b626-2d38a4d90ba6-HLNXT$1371"
    };

  service.searchinit.and.callFake(()=>{
   return of(response);
  });

  spyOn(CarTabComponent, 'searchstatus'); 
  CarTabComponent.searchinit();
  fixture.detectChanges();
    expect(CarTabComponent.searchinit).toBe(response);
   // expect(parentservice.globalsessionid).toBe(response.sessionId)
  });
  


  it('sholud call the search-status function and check if status completed',() =>{

    

   let response = {
    "status": "Completed",
    "resultsCount": 153,
    "errors": []
}

  // const spy = spyOn(CarTabComponent,'searchStatus');
   
   service.searchstatus.and.callFake(()=>{
     return of(response);
   });
   
   spyOn(CarTabComponent,'searchresult');
   CarTabComponent.searchstatus();
   fixture.detectChanges();
   expect(response.status).toBe("Completed");
   //expect(spy).toHaveBeenCalled();
  });


  
  it('should call the search-result function and get the result-array',()=>{
   

   let response = {
    "carRentals": [
        {
            "id": "YTYyNWY5NTEtNjkyZS00MzJjLTliOTktMDg1NGQ2MzAxYjJlLjM2JGQyNjM0M2ZhLWQ2ZTUtNGY3YS1hMDY1LTE4YWZjMGJkNzQ5Yi1DTE5YVHwxMzcx",
            "pickUpLocationId": "37210ca057df9739bef48dd55a608ddc",
            "dropOffLocationId": "da292b506f453c747fd6f44fcca6789e",
            "vehicleRefId": "ea6ea591-f6a8-478c-851a-88d38798c96b",
            "vendorCode": "ZD",
            "supplierId": "2oav04dq03k",
            "inventoryType": "Prepaid",
            "displayFare": {
                "type": "Negotiated",
                "guaranteeRequired": false,
                "depositRequired": false,
                "currency": "USD",
                "totalFare": 175.74,
                "breakup": {
                    "baseFare": 153.99,
                    "fees": [
                        {
                            "source": "vendorFee",
                            "desc": "VEH. LICENSE FEE",
                            "amount": 6.50
                        }
                    ],
                    "taxes": [
                        {
                            "source": "Supplier",
                            "code": "7",
                            "desc": "Local Tax",
                            "amount": 15.25
                        }
                    ],
                    "charges": [],
                    "equipments": [],
                    "coverages": [],
                    "markups": [],
                    "discounts": []
                },
                "commissions": [],
                "usdEquivalentExchangeRate": 1.0
            },
            "optionalCharges": {
                "fees": [],
                "taxes": [],
                "charges": [
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$10.00    EXTENSION FEE MAY APPLY",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "FUEL POLICY IS FULL TO FULL",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$20.00    LATE FEE MAY APPLY",
                        "amount": 0.0
                    }
                ],
                "coverages": [],
                "equipments": []
            },
            "purchaseOption": {
                "totalPurchaseUnits": 1,
                "cashCurrency": "USD",
                "pointsCurrency": "Points",
                "rewards": [
                    {
                        "id": "1116|1",
                        "name": "Car Reward - BaseR",
                        "rank": 1,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 17574.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1.0,
                            "maximumPoints": 17574.0,
                            "pointToCashFactor": {
                                "value": 0.0100000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 17574.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "175.74"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0100000"
                            }
                        ],
                        "redemption": {
                            "id": "1116|1",
                            "name": "Car Reward - BaseR",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 17574.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1.0,
                                "maximumPoints": 17574.0,
                                "pointToCashFactor": {
                                    "value": 0.0100000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 17574.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "175.74"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0100000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "4912|1",
                        "name": "Car Redemption",
                        "rank": 2,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1500.0,
                            "maximumPoints": 15000.0,
                            "pointToCashFactor": {
                                "value": 0.0130000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1500.0000,
                            "roundingType": "Up"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "175.74"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "15"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0130000"
                            }
                        ],
                        "redemption": {
                            "id": "4912|1",
                            "name": "Car Redemption",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1500.0,
                                "maximumPoints": 15000.0,
                                "pointToCashFactor": {
                                    "value": 0.0130000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1500.0000,
                                "roundingType": "Up"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "175.74"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "15"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0130000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "511|7",
                        "name": "Pay in Cash",
                        "rank": 200,
                        "type": "Purchase",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 175.74,
                            "points": 0.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 0.0,
                            "maximumPoints": 0.0,
                            "pointToCashFactor": {
                                "value": 0.0,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 175.74,
                            "points": 0.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "175.74"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0"
                            }
                        ],
                        "redemption": {
                            "id": "511|7",
                            "name": "Pay in Cash",
                            "type": "Purchase",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 175.74,
                                "points": 0.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 0.0,
                                "maximumPoints": 0.0,
                                "pointToCashFactor": {
                                    "value": 0.0,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 175.74,
                                "points": 0.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "175.74"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0"
                                }
                            ]
                        }
                    }
                ]
            },
            "policies": [
                {
                    "type": "General",
                    "text": "Smoke Free|4 Doors|5 Seats|Automatic|Air Conditioning|Holds 1 large, 2 small suitcases|24 mpg|Bluetooth/SYNC|image=2021-kia-soul-s-5door-hatchback-white.png|thumb=2021-kia-soul-s-5door-hatchback-white.png|cargroup=B|category=Compact"
                }
            ],
            "cancellationPolicy": {
                "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
                "penaltyRules": [
                    {
                        "value": 1.0,
                        "valueType": "Day",
                        "estimatedValue": 35.15,
                        "window": {
                            "start": "2022-09-30T10:30:00",
                            "end": "2022-10-03T10:30:00"
                        }
                    }
                ]
            },
            "mileage": {
                "isUnlimited": true,
                "allowed": []
            },
            "freeCancellationEndDate": "2022-09-30T10:29:59",
            "recommendationScore": 152
        },
        {
            "id": "ZTNkNzFkZjktNzE3NC00NTM0LWJkN2QtZjcwZWMyZWVlYzkyLjM4JGQyNjM0M2ZhLWQ2ZTUtNGY3YS1hMDY1LTE4YWZjMGJkNzQ5Yi1DTE5YVHwxMzcx",
            "pickUpLocationId": "18b9f1af2813c6852fb72c2d4603a189",
            "dropOffLocationId": "e76b42a5d80c41642cd800e57b35538b",
            "vehicleRefId": "6e46221a-cee1-4a83-8232-f8c0b57a8d79",
            "vendorCode": "ZD",
            "supplierId": "2oav04dq03k",
            "inventoryType": "Prepaid",
            "displayFare": {
                "type": "Negotiated",
                "guaranteeRequired": false,
                "depositRequired": false,
                "currency": "USD",
                "totalFare": 175.74,
                "breakup": {
                    "baseFare": 153.99,
                    "fees": [
                        {
                            "source": "vendorFee",
                            "desc": "VEH. LICENSE FEE",
                            "amount": 6.50
                        }
                    ],
                    "taxes": [
                        {
                            "source": "Supplier",
                            "code": "7",
                            "desc": "Local Tax",
                            "amount": 15.25
                        }
                    ],
                    "charges": [],
                    "equipments": [],
                    "coverages": [],
                    "markups": [],
                    "discounts": []
                },
                "commissions": [],
                "usdEquivalentExchangeRate": 1.0
            },
            "optionalCharges": {
                "fees": [],
                "taxes": [],
                "charges": [
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$10.00    EXTENSION FEE MAY APPLY",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "FUEL POLICY IS FULL TO FULL",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$20.00    LATE FEE MAY APPLY",
                        "amount": 0.0
                    }
                ],
                "coverages": [],
                "equipments": []
            },
            "purchaseOption": {
                "totalPurchaseUnits": 1,
                "cashCurrency": "USD",
                "pointsCurrency": "Points",
                "rewards": [
                    {
                        "id": "1116|1",
                        "name": "Car Reward - BaseR",
                        "rank": 1,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 17574.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1.0,
                            "maximumPoints": 17574.0,
                            "pointToCashFactor": {
                                "value": 0.0100000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 17574.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "175.74"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0100000"
                            }
                        ],
                        "redemption": {
                            "id": "1116|1",
                            "name": "Car Reward - BaseR",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 17574.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1.0,
                                "maximumPoints": 17574.0,
                                "pointToCashFactor": {
                                    "value": 0.0100000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 17574.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "175.74"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0100000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "4912|1",
                        "name": "Car Redemption",
                        "rank": 2,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1500.0,
                            "maximumPoints": 15000.0,
                            "pointToCashFactor": {
                                "value": 0.0130000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1500.0000,
                            "roundingType": "Up"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "175.74"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "15"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0130000"
                            }
                        ],
                        "redemption": {
                            "id": "4912|1",
                            "name": "Car Redemption",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1500.0,
                                "maximumPoints": 15000.0,
                                "pointToCashFactor": {
                                    "value": 0.0130000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1500.0000,
                                "roundingType": "Up"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "175.74"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "15"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0130000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "511|7",
                        "name": "Pay in Cash",
                        "rank": 200,
                        "type": "Purchase",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 175.74,
                            "points": 0.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 0.0,
                            "maximumPoints": 0.0,
                            "pointToCashFactor": {
                                "value": 0.0,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 175.74,
                            "points": 0.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "175.74"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0"
                            }
                        ],
                        "redemption": {
                            "id": "511|7",
                            "name": "Pay in Cash",
                            "type": "Purchase",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 175.74,
                                "points": 0.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 0.0,
                                "maximumPoints": 0.0,
                                "pointToCashFactor": {
                                    "value": 0.0,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 175.74,
                                "points": 0.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "175.74"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0"
                                }
                            ]
                        }
                    }
                ]
            },
            "policies": [
                {
                    "type": "General",
                    "text": "Smoke Free|4 Doors|5 Seats|Automatic|Air Conditioning|Holds 1 large, 2 small suitcases|24 mpg|Bluetooth/SYNC|image=2021-kia-soul-s-5door-hatchback-white.png|thumb=2021-kia-soul-s-5door-hatchback-white.png|cargroup=B|category=Compact"
                }
            ],
            "cancellationPolicy": {
                "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
                "penaltyRules": [
                    {
                        "value": 1.0,
                        "valueType": "Day",
                        "estimatedValue": 35.15,
                        "window": {
                            "start": "2022-09-30T10:30:00",
                            "end": "2022-10-03T10:30:00"
                        }
                    }
                ]
            },
            "mileage": {
                "isUnlimited": true,
                "allowed": []
            },
            "freeCancellationEndDate": "2022-09-30T10:29:59",
            "recommendationScore": 149
        },
        {
            "id": "OWIyMTdkODUtYzhjZS00MWFjLWIxYzktYzc3Nzg2Mjc0YTZhLjMzJGQyNjM0M2ZhLWQ2ZTUtNGY3YS1hMDY1LTE4YWZjMGJkNzQ5Yi1DTE5YVHwxMzcx",
            "pickUpLocationId": "37210ca057df9739bef48dd55a608ddc",
            "dropOffLocationId": "e76b42a5d80c41642cd800e57b35538b",
            "vehicleRefId": "1aff34e4-e879-4811-bcb4-8801e0608d7b",
            "vendorCode": "ZD",
            "supplierId": "2oav04dq03k",
            "inventoryType": "Prepaid",
            "displayFare": {
                "type": "Negotiated",
                "guaranteeRequired": false,
                "depositRequired": false,
                "currency": "USD",
                "totalFare": 175.74,
                "breakup": {
                    "baseFare": 153.99,
                    "fees": [
                        {
                            "source": "vendorFee",
                            "desc": "VEH. LICENSE FEE",
                            "amount": 6.50
                        }
                    ],
                    "taxes": [
                        {
                            "source": "Supplier",
                            "code": "7",
                            "desc": "Local Tax",
                            "amount": 15.25
                        }
                    ],
                    "charges": [],
                    "equipments": [],
                    "coverages": [],
                    "markups": [],
                    "discounts": []
                },
                "commissions": [],
                "usdEquivalentExchangeRate": 1.0
            },
            "optionalCharges": {
                "fees": [],
                "taxes": [],
                "charges": [
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$10.00    EXTENSION FEE MAY APPLY",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "FUEL POLICY IS FULL TO FULL",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$20.00    LATE FEE MAY APPLY",
                        "amount": 0.0
                    }
                ],
                "coverages": [],
                "equipments": []
            },
            "purchaseOption": {
                "totalPurchaseUnits": 1,
                "cashCurrency": "USD",
                "pointsCurrency": "Points",
                "rewards": [
                    {
                        "id": "1116|1",
                        "name": "Car Reward - BaseR",
                        "rank": 1,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 17574.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1.0,
                            "maximumPoints": 17574.0,
                            "pointToCashFactor": {
                                "value": 0.0100000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 17574.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "175.74"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0100000"
                            }
                        ],
                        "redemption": {
                            "id": "1116|1",
                            "name": "Car Reward - BaseR",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 17574.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1.0,
                                "maximumPoints": 17574.0,
                                "pointToCashFactor": {
                                    "value": 0.0100000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 17574.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "175.74"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0100000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "4912|1",
                        "name": "Car Redemption",
                        "rank": 2,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1500.0,
                            "maximumPoints": 15000.0,
                            "pointToCashFactor": {
                                "value": 0.0130000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1500.0000,
                            "roundingType": "Up"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "175.74"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "15"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0130000"
                            }
                        ],
                        "redemption": {
                            "id": "4912|1",
                            "name": "Car Redemption",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1500.0,
                                "maximumPoints": 15000.0,
                                "pointToCashFactor": {
                                    "value": 0.0130000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1500.0000,
                                "roundingType": "Up"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "175.74"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "15"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0130000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "511|7",
                        "name": "Pay in Cash",
                        "rank": 200,
                        "type": "Purchase",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 175.74,
                            "points": 0.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 0.0,
                            "maximumPoints": 0.0,
                            "pointToCashFactor": {
                                "value": 0.0,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 175.74,
                            "points": 0.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "175.74"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0"
                            }
                        ],
                        "redemption": {
                            "id": "511|7",
                            "name": "Pay in Cash",
                            "type": "Purchase",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 175.74,
                                "points": 0.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 0.0,
                                "maximumPoints": 0.0,
                                "pointToCashFactor": {
                                    "value": 0.0,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 175.74,
                                "points": 0.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "175.74"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0"
                                }
                            ]
                        }
                    }
                ]
            },
            "policies": [
                {
                    "type": "General",
                    "text": "Smoke Free|4 Doors|5 Seats|Automatic|Air Conditioning|Holds 1 large, 2 small suitcases|24 mpg|Bluetooth/SYNC|image=2021-kia-soul-s-5door-hatchback-white.png|thumb=2021-kia-soul-s-5door-hatchback-white.png|cargroup=B|category=Compact"
                }
            ],
            "cancellationPolicy": {
                "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
                "penaltyRules": [
                    {
                        "value": 1.0,
                        "valueType": "Day",
                        "estimatedValue": 35.15,
                        "window": {
                            "start": "2022-09-30T10:30:00",
                            "end": "2022-10-03T10:30:00"
                        }
                    }
                ]
            },
            "mileage": {
                "isUnlimited": true,
                "allowed": []
            },
            "freeCancellationEndDate": "2022-09-30T10:29:59",
            "recommendationScore": 147
        },
        {
            "id": "N2Y5MzQ4YWYtOGFlNC00MTQxLWE1ZGItZjY5YWU2OTM4MDlkLjMzJGQyNjM0M2ZhLWQ2ZTUtNGY3YS1hMDY1LTE4YWZjMGJkNzQ5Yi1DTE5YVHwxMzcx",
            "pickUpLocationId": "37210ca057df9739bef48dd55a608ddc",
            "dropOffLocationId": "e76b42a5d80c41642cd800e57b35538b",
            "vehicleRefId": "c35a6cc2-c1fb-4c80-aaed-3342f8fefffb",
            "vendorCode": "ZD",
            "supplierId": "2oav04dq03k",
            "inventoryType": "Prepaid",
            "displayFare": {
                "type": "Negotiated",
                "guaranteeRequired": false,
                "depositRequired": false,
                "currency": "USD",
                "totalFare": 175.74,
                "breakup": {
                    "baseFare": 153.99,
                    "fees": [
                        {
                            "source": "vendorFee",
                            "desc": "VEH. LICENSE FEE",
                            "amount": 6.50
                        }
                    ],
                    "taxes": [
                        {
                            "source": "Supplier",
                            "code": "7",
                            "desc": "Local Tax",
                            "amount": 15.25
                        }
                    ],
                    "charges": [],
                    "equipments": [],
                    "coverages": [],
                    "markups": [],
                    "discounts": []
                },
                "commissions": [],
                "usdEquivalentExchangeRate": 1.0
            },
            "optionalCharges": {
                "fees": [],
                "taxes": [],
                "charges": [
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$10.00    EXTENSION FEE MAY APPLY",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "FUEL POLICY IS FULL TO FULL",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$20.00    LATE FEE MAY APPLY",
                        "amount": 0.0
                    }
                ],
                "coverages": [],
                "equipments": []
            },
            "purchaseOption": {
                "totalPurchaseUnits": 1,
                "cashCurrency": "USD",
                "pointsCurrency": "Points",
                "rewards": [
                    {
                        "id": "1116|1",
                        "name": "Car Reward - BaseR",
                        "rank": 1,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 17574.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1.0,
                            "maximumPoints": 17574.0,
                            "pointToCashFactor": {
                                "value": 0.0100000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 17574.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "175.74"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0100000"
                            }
                        ],
                        "redemption": {
                            "id": "1116|1",
                            "name": "Car Reward - BaseR",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 17574.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1.0,
                                "maximumPoints": 17574.0,
                                "pointToCashFactor": {
                                    "value": 0.0100000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 17574.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "175.74"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0100000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "4912|1",
                        "name": "Car Redemption",
                        "rank": 2,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1500.0,
                            "maximumPoints": 15000.0,
                            "pointToCashFactor": {
                                "value": 0.0130000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1500.0000,
                            "roundingType": "Up"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "175.74"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "15"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0130000"
                            }
                        ],
                        "redemption": {
                            "id": "4912|1",
                            "name": "Car Redemption",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1500.0,
                                "maximumPoints": 15000.0,
                                "pointToCashFactor": {
                                    "value": 0.0130000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1500.0000,
                                "roundingType": "Up"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "175.74"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "15"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0130000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "511|7",
                        "name": "Pay in Cash",
                        "rank": 200,
                        "type": "Purchase",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 175.74,
                            "points": 0.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 0.0,
                            "maximumPoints": 0.0,
                            "pointToCashFactor": {
                                "value": 0.0,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 175.74,
                            "points": 0.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "175.74"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0"
                            }
                        ],
                        "redemption": {
                            "id": "511|7",
                            "name": "Pay in Cash",
                            "type": "Purchase",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 175.74,
                                "points": 0.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 0.0,
                                "maximumPoints": 0.0,
                                "pointToCashFactor": {
                                    "value": 0.0,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 175.74,
                                "points": 0.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "175.74"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0"
                                }
                            ]
                        }
                    }
                ]
            },
            "policies": [
                {
                    "type": "General",
                    "text": "Smoke Free|4 Doors|5 Seats|Automatic|Air Conditioning|Holds 1 large, 1 small suitcases|27 mpg|Bluetooth/SYNC|Back-up Camera|image=2020-kia-rio-s-sedan-silver.png|thumb=2020-kia-rio-s-sedan-silver.png|cargroup=A|category=Economy"
                }
            ],
            "cancellationPolicy": {
                "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
                "penaltyRules": [
                    {
                        "value": 1.0,
                        "valueType": "Day",
                        "estimatedValue": 35.15,
                        "window": {
                            "start": "2022-09-30T10:30:00",
                            "end": "2022-10-03T10:30:00"
                        }
                    }
                ]
            },
            "mileage": {
                "isUnlimited": true,
                "allowed": []
            },
            "freeCancellationEndDate": "2022-09-30T10:29:59",
            "recommendationScore": 146
        },
        {
            "id": "M2I0ZmFkMTktZjYwZi00ODAwLTk1ODQtMzVhNWM5YmRhMjEyLjM2JGQyNjM0M2ZhLWQ2ZTUtNGY3YS1hMDY1LTE4YWZjMGJkNzQ5Yi1DTE5YVHwxMzcx",
            "pickUpLocationId": "37210ca057df9739bef48dd55a608ddc",
            "dropOffLocationId": "da292b506f453c747fd6f44fcca6789e",
            "vehicleRefId": "bc417574-c5dd-4684-8a57-1b5aaf9785af",
            "vendorCode": "ZD",
            "supplierId": "2oav04dq03k",
            "inventoryType": "Prepaid",
            "displayFare": {
                "type": "Negotiated",
                "guaranteeRequired": false,
                "depositRequired": false,
                "currency": "USD",
                "totalFare": 175.74,
                "breakup": {
                    "baseFare": 153.99,
                    "fees": [
                        {
                            "source": "vendorFee",
                            "desc": "VEH. LICENSE FEE",
                            "amount": 6.50
                        }
                    ],
                    "taxes": [
                        {
                            "source": "Supplier",
                            "code": "7",
                            "desc": "Local Tax",
                            "amount": 15.25
                        }
                    ],
                    "charges": [],
                    "equipments": [],
                    "coverages": [],
                    "markups": [],
                    "discounts": []
                },
                "commissions": [],
                "usdEquivalentExchangeRate": 1.0
            },
            "optionalCharges": {
                "fees": [],
                "taxes": [],
                "charges": [
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$10.00    EXTENSION FEE MAY APPLY",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "FUEL POLICY IS FULL TO FULL",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$20.00    LATE FEE MAY APPLY",
                        "amount": 0.0
                    }
                ],
                "coverages": [],
                "equipments": []
            },
            "purchaseOption": {
                "totalPurchaseUnits": 1,
                "cashCurrency": "USD",
                "pointsCurrency": "Points",
                "rewards": [
                    {
                        "id": "1116|1",
                        "name": "Car Reward - BaseR",
                        "rank": 1,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 17574.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1.0,
                            "maximumPoints": 17574.0,
                            "pointToCashFactor": {
                                "value": 0.0100000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 17574.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "175.74"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0100000"
                            }
                        ],
                        "redemption": {
                            "id": "1116|1",
                            "name": "Car Reward - BaseR",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 17574.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1.0,
                                "maximumPoints": 17574.0,
                                "pointToCashFactor": {
                                    "value": 0.0100000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 17574.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "175.74"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0100000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "4912|1",
                        "name": "Car Redemption",
                        "rank": 2,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1500.0,
                            "maximumPoints": 15000.0,
                            "pointToCashFactor": {
                                "value": 0.0130000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1500.0000,
                            "roundingType": "Up"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "175.74"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "15"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0130000"
                            }
                        ],
                        "redemption": {
                            "id": "4912|1",
                            "name": "Car Redemption",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1500.0,
                                "maximumPoints": 15000.0,
                                "pointToCashFactor": {
                                    "value": 0.0130000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1500.0000,
                                "roundingType": "Up"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "175.74"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "15"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0130000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "511|7",
                        "name": "Pay in Cash",
                        "rank": 200,
                        "type": "Purchase",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 175.74,
                            "points": 0.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 0.0,
                            "maximumPoints": 0.0,
                            "pointToCashFactor": {
                                "value": 0.0,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 175.74,
                            "points": 0.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "175.74"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0"
                            }
                        ],
                        "redemption": {
                            "id": "511|7",
                            "name": "Pay in Cash",
                            "type": "Purchase",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 175.74,
                                "points": 0.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 0.0,
                                "maximumPoints": 0.0,
                                "pointToCashFactor": {
                                    "value": 0.0,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 175.74,
                                "points": 0.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "175.74"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0"
                                }
                            ]
                        }
                    }
                ]
            },
            "policies": [
                {
                    "type": "General",
                    "text": "Smoke Free|4 Doors|5 Seats|Automatic|Air Conditioning|Holds 1 large, 1 small suitcases|27 mpg|Bluetooth/SYNC|Back-up Camera|image=2020-kia-rio-s-sedan-silver.png|thumb=2020-kia-rio-s-sedan-silver.png|cargroup=A|category=Economy"
                }
            ],
            "cancellationPolicy": {
                "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
                "penaltyRules": [
                    {
                        "value": 1.0,
                        "valueType": "Day",
                        "estimatedValue": 35.15,
                        "window": {
                            "start": "2022-09-30T10:30:00",
                            "end": "2022-10-03T10:30:00"
                        }
                    }
                ]
            },
            "mileage": {
                "isUnlimited": true,
                "allowed": []
            },
            "freeCancellationEndDate": "2022-09-30T10:29:59",
            "recommendationScore": 150
        },
        {
            "id": "Nzc0MzY2OGQtMTU2ZC00NjM5LWFmMGYtODZmYTZlZmUyZTAyLjM4JGQyNjM0M2ZhLWQ2ZTUtNGY3YS1hMDY1LTE4YWZjMGJkNzQ5Yi1DTE5YVHwxMzcx",
            "pickUpLocationId": "18b9f1af2813c6852fb72c2d4603a189",
            "dropOffLocationId": "e76b42a5d80c41642cd800e57b35538b",
            "vehicleRefId": "e8e0a2e9-a570-4520-88ab-3db3b5a50a94",
            "vendorCode": "ZD",
            "supplierId": "2oav04dq03k",
            "inventoryType": "Prepaid",
            "displayFare": {
                "type": "Negotiated",
                "guaranteeRequired": false,
                "depositRequired": false,
                "currency": "USD",
                "totalFare": 175.74,
                "breakup": {
                    "baseFare": 153.99,
                    "fees": [
                        {
                            "source": "vendorFee",
                            "desc": "VEH. LICENSE FEE",
                            "amount": 6.50
                        }
                    ],
                    "taxes": [
                        {
                            "source": "Supplier",
                            "code": "7",
                            "desc": "Local Tax",
                            "amount": 15.25
                        }
                    ],
                    "charges": [],
                    "equipments": [],
                    "coverages": [],
                    "markups": [],
                    "discounts": []
                },
                "commissions": [],
                "usdEquivalentExchangeRate": 1.0
            },
            "optionalCharges": {
                "fees": [],
                "taxes": [],
                "charges": [
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$10.00    EXTENSION FEE MAY APPLY",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "FUEL POLICY IS FULL TO FULL",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$20.00    LATE FEE MAY APPLY",
                        "amount": 0.0
                    }
                ],
                "coverages": [],
                "equipments": []
            },
            "purchaseOption": {
                "totalPurchaseUnits": 1,
                "cashCurrency": "USD",
                "pointsCurrency": "Points",
                "rewards": [
                    {
                        "id": "1116|1",
                        "name": "Car Reward - BaseR",
                        "rank": 1,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 17574.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1.0,
                            "maximumPoints": 17574.0,
                            "pointToCashFactor": {
                                "value": 0.0100000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 17574.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "175.74"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0100000"
                            }
                        ],
                        "redemption": {
                            "id": "1116|1",
                            "name": "Car Reward - BaseR",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 17574.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1.0,
                                "maximumPoints": 17574.0,
                                "pointToCashFactor": {
                                    "value": 0.0100000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 17574.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "175.74"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0100000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "4912|1",
                        "name": "Car Redemption",
                        "rank": 2,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1500.0,
                            "maximumPoints": 15000.0,
                            "pointToCashFactor": {
                                "value": 0.0130000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1500.0000,
                            "roundingType": "Up"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "175.74"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "15"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0130000"
                            }
                        ],
                        "redemption": {
                            "id": "4912|1",
                            "name": "Car Redemption",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1500.0,
                                "maximumPoints": 15000.0,
                                "pointToCashFactor": {
                                    "value": 0.0130000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1500.0000,
                                "roundingType": "Up"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "175.74"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "15"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0130000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "511|7",
                        "name": "Pay in Cash",
                        "rank": 200,
                        "type": "Purchase",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 175.74,
                            "points": 0.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 0.0,
                            "maximumPoints": 0.0,
                            "pointToCashFactor": {
                                "value": 0.0,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 175.74,
                            "points": 0.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "175.74"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0"
                            }
                        ],
                        "redemption": {
                            "id": "511|7",
                            "name": "Pay in Cash",
                            "type": "Purchase",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 175.74,
                                "points": 0.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 0.0,
                                "maximumPoints": 0.0,
                                "pointToCashFactor": {
                                    "value": 0.0,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 175.74,
                                "points": 0.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "175.74"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0"
                                }
                            ]
                        }
                    }
                ]
            },
            "policies": [
                {
                    "type": "General",
                    "text": "Smoke Free|4 Doors|5 Seats|Automatic|Air Conditioning|Holds 1 large, 1 small suitcases|27 mpg|Bluetooth/SYNC|Back-up Camera|image=2020-kia-rio-s-sedan-silver.png|thumb=2020-kia-rio-s-sedan-silver.png|cargroup=A|category=Economy"
                }
            ],
            "cancellationPolicy": {
                "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
                "penaltyRules": [
                    {
                        "value": 1.0,
                        "valueType": "Day",
                        "estimatedValue": 35.15,
                        "window": {
                            "start": "2022-09-30T10:30:00",
                            "end": "2022-10-03T10:30:00"
                        }
                    }
                ]
            },
            "mileage": {
                "isUnlimited": true,
                "allowed": []
            },
            "freeCancellationEndDate": "2022-09-30T10:29:59",
            "recommendationScore": 148
        },
        {
            "id": "YmY3Y2YwOTAtNDVjYi00OTk4LThjOTItODdjNDkwNTE0ODhhLjMxJGQyNjM0M2ZhLWQ2ZTUtNGY3YS1hMDY1LTE4YWZjMGJkNzQ5Yi1DTE5YVHwxMzcx",
            "pickUpLocationId": "884faeef69b24f8a2e9248e6927ff96a",
            "dropOffLocationId": "da292b506f453c747fd6f44fcca6789e",
            "vehicleRefId": "be97f65b-05ed-4a44-afe4-12a4fe94bbf2",
            "vendorCode": "ZD",
            "supplierId": "2oav04dq03k",
            "inventoryType": "Prepaid",
            "displayFare": {
                "type": "Negotiated",
                "guaranteeRequired": false,
                "depositRequired": false,
                "currency": "USD",
                "totalFare": 176.94,
                "breakup": {
                    "baseFare": 153.99,
                    "fees": [
                        {
                            "source": "vendorFee",
                            "desc": "VEH. LICENSE FEE",
                            "amount": 6.50
                        }
                    ],
                    "taxes": [
                        {
                            "source": "Supplier",
                            "code": "7",
                            "desc": "Local Tax",
                            "amount": 16.45
                        }
                    ],
                    "charges": [],
                    "equipments": [],
                    "coverages": [],
                    "markups": [],
                    "discounts": []
                },
                "commissions": [],
                "usdEquivalentExchangeRate": 1.0
            },
            "optionalCharges": {
                "fees": [],
                "taxes": [],
                "charges": [
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$10.00    EXTENSION FEE MAY APPLY",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "FUEL POLICY IS FULL TO FULL",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$20.00    LATE FEE MAY APPLY",
                        "amount": 0.0
                    }
                ],
                "coverages": [],
                "equipments": []
            },
            "purchaseOption": {
                "totalPurchaseUnits": 1,
                "cashCurrency": "USD",
                "pointsCurrency": "Points",
                "rewards": [
                    {
                        "id": "1116|1",
                        "name": "Car Reward - BaseR",
                        "rank": 1,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 17694.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1.0,
                            "maximumPoints": 17694.0,
                            "pointToCashFactor": {
                                "value": 0.0100000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 17694.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0100000"
                            }
                        ],
                        "redemption": {
                            "id": "1116|1",
                            "name": "Car Reward - BaseR",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 17694.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1.0,
                                "maximumPoints": 17694.0,
                                "pointToCashFactor": {
                                    "value": 0.0100000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 17694.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0100000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "4912|1",
                        "name": "Car Redemption",
                        "rank": 2,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1500.0,
                            "maximumPoints": 15000.0,
                            "pointToCashFactor": {
                                "value": 0.0130000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1500.0000,
                            "roundingType": "Up"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "15"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0130000"
                            }
                        ],
                        "redemption": {
                            "id": "4912|1",
                            "name": "Car Redemption",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1500.0,
                                "maximumPoints": 15000.0,
                                "pointToCashFactor": {
                                    "value": 0.0130000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1500.0000,
                                "roundingType": "Up"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "15"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0130000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "511|7",
                        "name": "Pay in Cash",
                        "rank": 200,
                        "type": "Purchase",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 176.94,
                            "points": 0.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 0.0,
                            "maximumPoints": 0.0,
                            "pointToCashFactor": {
                                "value": 0.0,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 176.94,
                            "points": 0.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0"
                            }
                        ],
                        "redemption": {
                            "id": "511|7",
                            "name": "Pay in Cash",
                            "type": "Purchase",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 176.94,
                                "points": 0.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 0.0,
                                "maximumPoints": 0.0,
                                "pointToCashFactor": {
                                    "value": 0.0,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 176.94,
                                "points": 0.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0"
                                }
                            ]
                        }
                    }
                ]
            },
            "policies": [
                {
                    "type": "General",
                    "text": "Smoke Free|4 Doors|5 Seats|Automatic|Air Conditioning|Holds 1 large, 2 small suitcases|24 mpg|Bluetooth/SYNC|image=2021-kia-soul-s-5door-hatchback-white.png|thumb=2021-kia-soul-s-5door-hatchback-white.png|cargroup=B|category=Compact"
                }
            ],
            "cancellationPolicy": {
                "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
                "penaltyRules": [
                    {
                        "value": 1.0,
                        "valueType": "Day",
                        "estimatedValue": 35.39,
                        "window": {
                            "start": "2022-09-30T10:30:00",
                            "end": "2022-10-03T10:30:00"
                        }
                    }
                ]
            },
            "mileage": {
                "isUnlimited": true,
                "allowed": []
            },
            "freeCancellationEndDate": "2022-09-30T10:29:59",
            "recommendationScore": 145
        },
        {
            "id": "NTJlMTM4N2EtODc2YS00ZGRmLWIxNmItYWNkNTVmN2IzOTAxLjM5JGQyNjM0M2ZhLWQ2ZTUtNGY3YS1hMDY1LTE4YWZjMGJkNzQ5Yi1DTE5YVHwxMzcx",
            "pickUpLocationId": "d1cfbfa79777bd07713f7835f77c4264",
            "dropOffLocationId": "e76b42a5d80c41642cd800e57b35538b",
            "vehicleRefId": "6e044996-3c79-4128-9c0d-5c11a2d37cc7",
            "vendorCode": "ZD",
            "supplierId": "2oav04dq03k",
            "inventoryType": "Prepaid",
            "displayFare": {
                "type": "Negotiated",
                "guaranteeRequired": false,
                "depositRequired": false,
                "currency": "USD",
                "totalFare": 176.94,
                "breakup": {
                    "baseFare": 153.99,
                    "fees": [
                        {
                            "source": "vendorFee",
                            "desc": "VEH. LICENSE FEE",
                            "amount": 6.50
                        }
                    ],
                    "taxes": [
                        {
                            "source": "Supplier",
                            "code": "7",
                            "desc": "Local Tax",
                            "amount": 16.45
                        }
                    ],
                    "charges": [],
                    "equipments": [],
                    "coverages": [],
                    "markups": [],
                    "discounts": []
                },
                "commissions": [],
                "usdEquivalentExchangeRate": 1.0
            },
            "optionalCharges": {
                "fees": [],
                "taxes": [],
                "charges": [
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$10.00    EXTENSION FEE MAY APPLY",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "FUEL POLICY IS FULL TO FULL",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$20.00    LATE FEE MAY APPLY",
                        "amount": 0.0
                    }
                ],
                "coverages": [],
                "equipments": []
            },
            "purchaseOption": {
                "totalPurchaseUnits": 1,
                "cashCurrency": "USD",
                "pointsCurrency": "Points",
                "rewards": [
                    {
                        "id": "1116|1",
                        "name": "Car Reward - BaseR",
                        "rank": 1,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 17694.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1.0,
                            "maximumPoints": 17694.0,
                            "pointToCashFactor": {
                                "value": 0.0100000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 17694.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0100000"
                            }
                        ],
                        "redemption": {
                            "id": "1116|1",
                            "name": "Car Reward - BaseR",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 17694.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1.0,
                                "maximumPoints": 17694.0,
                                "pointToCashFactor": {
                                    "value": 0.0100000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 17694.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0100000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "4912|1",
                        "name": "Car Redemption",
                        "rank": 2,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1500.0,
                            "maximumPoints": 15000.0,
                            "pointToCashFactor": {
                                "value": 0.0130000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1500.0000,
                            "roundingType": "Up"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "15"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0130000"
                            }
                        ],
                        "redemption": {
                            "id": "4912|1",
                            "name": "Car Redemption",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1500.0,
                                "maximumPoints": 15000.0,
                                "pointToCashFactor": {
                                    "value": 0.0130000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1500.0000,
                                "roundingType": "Up"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "15"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0130000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "511|7",
                        "name": "Pay in Cash",
                        "rank": 200,
                        "type": "Purchase",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 176.94,
                            "points": 0.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 0.0,
                            "maximumPoints": 0.0,
                            "pointToCashFactor": {
                                "value": 0.0,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 176.94,
                            "points": 0.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0"
                            }
                        ],
                        "redemption": {
                            "id": "511|7",
                            "name": "Pay in Cash",
                            "type": "Purchase",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 176.94,
                                "points": 0.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 0.0,
                                "maximumPoints": 0.0,
                                "pointToCashFactor": {
                                    "value": 0.0,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 176.94,
                                "points": 0.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0"
                                }
                            ]
                        }
                    }
                ]
            },
            "policies": [
                {
                    "type": "General",
                    "text": "Smoke Free|4 Doors|5 Seats|Automatic|Air Conditioning|Holds 1 large, 2 small suitcases|24 mpg|Bluetooth/SYNC|image=2021-kia-soul-s-5door-hatchback-white.png|thumb=2021-kia-soul-s-5door-hatchback-white.png|cargroup=B|category=Compact"
                }
            ],
            "cancellationPolicy": {
                "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
                "penaltyRules": [
                    {
                        "value": 1.0,
                        "valueType": "Day",
                        "estimatedValue": 35.39,
                        "window": {
                            "start": "2022-09-30T10:30:00",
                            "end": "2022-10-03T10:30:00"
                        }
                    }
                ]
            },
            "mileage": {
                "isUnlimited": true,
                "allowed": []
            },
            "freeCancellationEndDate": "2022-09-30T10:29:59",
            "recommendationScore": 143
        },
        {
            "id": "NTNlNmVjODItMTQ3NS00YzNkLTk5ZDUtMjNkNzkyODg5MmYzLjM3JGQyNjM0M2ZhLWQ2ZTUtNGY3YS1hMDY1LTE4YWZjMGJkNzQ5Yi1DTE5YVHwxMzcx",
            "pickUpLocationId": "884faeef69b24f8a2e9248e6927ff96a",
            "dropOffLocationId": "af1ba82f958e20223c322eff7e2ed5c5",
            "vehicleRefId": "c8593731-8d68-4399-bcf1-7e301d630293",
            "vendorCode": "ZD",
            "supplierId": "2oav04dq03k",
            "inventoryType": "Prepaid",
            "displayFare": {
                "type": "Negotiated",
                "guaranteeRequired": false,
                "depositRequired": false,
                "currency": "USD",
                "totalFare": 176.94,
                "breakup": {
                    "baseFare": 153.99,
                    "fees": [
                        {
                            "source": "vendorFee",
                            "desc": "VEH. LICENSE FEE",
                            "amount": 6.50
                        }
                    ],
                    "taxes": [
                        {
                            "source": "Supplier",
                            "code": "7",
                            "desc": "Local Tax",
                            "amount": 16.45
                        }
                    ],
                    "charges": [],
                    "equipments": [],
                    "coverages": [],
                    "markups": [],
                    "discounts": []
                },
                "commissions": [],
                "usdEquivalentExchangeRate": 1.0
            },
            "optionalCharges": {
                "fees": [],
                "taxes": [],
                "charges": [
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$10.00    EXTENSION FEE MAY APPLY",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "FUEL POLICY IS FULL TO FULL",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$20.00    LATE FEE MAY APPLY",
                        "amount": 0.0
                    }
                ],
                "coverages": [],
                "equipments": []
            },
            "purchaseOption": {
                "totalPurchaseUnits": 1,
                "cashCurrency": "USD",
                "pointsCurrency": "Points",
                "rewards": [
                    {
                        "id": "1116|1",
                        "name": "Car Reward - BaseR",
                        "rank": 1,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 17694.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1.0,
                            "maximumPoints": 17694.0,
                            "pointToCashFactor": {
                                "value": 0.0100000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 17694.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0100000"
                            }
                        ],
                        "redemption": {
                            "id": "1116|1",
                            "name": "Car Reward - BaseR",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 17694.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1.0,
                                "maximumPoints": 17694.0,
                                "pointToCashFactor": {
                                    "value": 0.0100000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 17694.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0100000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "4912|1",
                        "name": "Car Redemption",
                        "rank": 2,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1500.0,
                            "maximumPoints": 15000.0,
                            "pointToCashFactor": {
                                "value": 0.0130000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1500.0000,
                            "roundingType": "Up"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "15"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0130000"
                            }
                        ],
                        "redemption": {
                            "id": "4912|1",
                            "name": "Car Redemption",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1500.0,
                                "maximumPoints": 15000.0,
                                "pointToCashFactor": {
                                    "value": 0.0130000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1500.0000,
                                "roundingType": "Up"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "15"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0130000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "511|7",
                        "name": "Pay in Cash",
                        "rank": 200,
                        "type": "Purchase",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 176.94,
                            "points": 0.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 0.0,
                            "maximumPoints": 0.0,
                            "pointToCashFactor": {
                                "value": 0.0,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 176.94,
                            "points": 0.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0"
                            }
                        ],
                        "redemption": {
                            "id": "511|7",
                            "name": "Pay in Cash",
                            "type": "Purchase",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 176.94,
                                "points": 0.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 0.0,
                                "maximumPoints": 0.0,
                                "pointToCashFactor": {
                                    "value": 0.0,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 176.94,
                                "points": 0.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0"
                                }
                            ]
                        }
                    }
                ]
            },
            "policies": [
                {
                    "type": "General",
                    "text": "Smoke Free|4 Doors|5 Seats|Automatic|Air Conditioning|Holds 1 large, 2 small suitcases|24 mpg|Bluetooth/SYNC|image=2021-kia-soul-s-5door-hatchback-white.png|thumb=2021-kia-soul-s-5door-hatchback-white.png|cargroup=B|category=Compact"
                }
            ],
            "cancellationPolicy": {
                "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
                "penaltyRules": [
                    {
                        "value": 1.0,
                        "valueType": "Day",
                        "estimatedValue": 35.39,
                        "window": {
                            "start": "2022-09-30T10:30:00",
                            "end": "2022-10-03T10:30:00"
                        }
                    }
                ]
            },
            "mileage": {
                "isUnlimited": true,
                "allowed": []
            },
            "freeCancellationEndDate": "2022-09-30T10:29:59",
            "recommendationScore": 141
        },
        {
            "id": "Njk0OGRlMzItNThkYS00NzYxLTlmNTktZTZiZjg3MTE5OWUwLjM3JGQyNjM0M2ZhLWQ2ZTUtNGY3YS1hMDY1LTE4YWZjMGJkNzQ5Yi1DTE5YVHwxMzcx",
            "pickUpLocationId": "884faeef69b24f8a2e9248e6927ff96a",
            "dropOffLocationId": "af1ba82f958e20223c322eff7e2ed5c5",
            "vehicleRefId": "27ee6a4d-a1d6-4a23-9a5a-41e58db71064",
            "vendorCode": "ZD",
            "supplierId": "2oav04dq03k",
            "inventoryType": "Prepaid",
            "displayFare": {
                "type": "Negotiated",
                "guaranteeRequired": false,
                "depositRequired": false,
                "currency": "USD",
                "totalFare": 176.94,
                "breakup": {
                    "baseFare": 153.99,
                    "fees": [
                        {
                            "source": "vendorFee",
                            "desc": "VEH. LICENSE FEE",
                            "amount": 6.50
                        }
                    ],
                    "taxes": [
                        {
                            "source": "Supplier",
                            "code": "7",
                            "desc": "Local Tax",
                            "amount": 16.45
                        }
                    ],
                    "charges": [],
                    "equipments": [],
                    "coverages": [],
                    "markups": [],
                    "discounts": []
                },
                "commissions": [],
                "usdEquivalentExchangeRate": 1.0
            },
            "optionalCharges": {
                "fees": [],
                "taxes": [],
                "charges": [
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$10.00    EXTENSION FEE MAY APPLY",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "FUEL POLICY IS FULL TO FULL",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$20.00    LATE FEE MAY APPLY",
                        "amount": 0.0
                    }
                ],
                "coverages": [],
                "equipments": []
            },
            "purchaseOption": {
                "totalPurchaseUnits": 1,
                "cashCurrency": "USD",
                "pointsCurrency": "Points",
                "rewards": [
                    {
                        "id": "1116|1",
                        "name": "Car Reward - BaseR",
                        "rank": 1,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 17694.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1.0,
                            "maximumPoints": 17694.0,
                            "pointToCashFactor": {
                                "value": 0.0100000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 17694.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0100000"
                            }
                        ],
                        "redemption": {
                            "id": "1116|1",
                            "name": "Car Reward - BaseR",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 17694.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1.0,
                                "maximumPoints": 17694.0,
                                "pointToCashFactor": {
                                    "value": 0.0100000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 17694.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0100000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "4912|1",
                        "name": "Car Redemption",
                        "rank": 2,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1500.0,
                            "maximumPoints": 15000.0,
                            "pointToCashFactor": {
                                "value": 0.0130000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1500.0000,
                            "roundingType": "Up"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "15"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0130000"
                            }
                        ],
                        "redemption": {
                            "id": "4912|1",
                            "name": "Car Redemption",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1500.0,
                                "maximumPoints": 15000.0,
                                "pointToCashFactor": {
                                    "value": 0.0130000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1500.0000,
                                "roundingType": "Up"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "15"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0130000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "511|7",
                        "name": "Pay in Cash",
                        "rank": 200,
                        "type": "Purchase",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 176.94,
                            "points": 0.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 0.0,
                            "maximumPoints": 0.0,
                            "pointToCashFactor": {
                                "value": 0.0,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 176.94,
                            "points": 0.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0"
                            }
                        ],
                        "redemption": {
                            "id": "511|7",
                            "name": "Pay in Cash",
                            "type": "Purchase",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 176.94,
                                "points": 0.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 0.0,
                                "maximumPoints": 0.0,
                                "pointToCashFactor": {
                                    "value": 0.0,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 176.94,
                                "points": 0.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0"
                                }
                            ]
                        }
                    }
                ]
            },
            "policies": [
                {
                    "type": "General",
                    "text": "Smoke Free|4 Doors|5 Seats|Automatic|Air Conditioning|Holds 1 large, 1 small suitcases|27 mpg|Bluetooth/SYNC|Back-up Camera|image=2020-kia-rio-s-sedan-silver.png|thumb=2020-kia-rio-s-sedan-silver.png|cargroup=A|category=Economy"
                }
            ],
            "cancellationPolicy": {
                "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
                "penaltyRules": [
                    {
                        "value": 1.0,
                        "valueType": "Day",
                        "estimatedValue": 35.39,
                        "window": {
                            "start": "2022-09-30T10:30:00",
                            "end": "2022-10-03T10:30:00"
                        }
                    }
                ]
            },
            "mileage": {
                "isUnlimited": true,
                "allowed": []
            },
            "freeCancellationEndDate": "2022-09-30T10:29:59",
            "recommendationScore": 140
        },
        {
            "id": "NDA5ZDkwNDAtNGNmOS00YTE2LThjOWUtNjQwZmVjZmEwZDQ3LjMwJGQyNjM0M2ZhLWQ2ZTUtNGY3YS1hMDY1LTE4YWZjMGJkNzQ5Yi1DTE5YVHwxMzcx",
            "pickUpLocationId": "884faeef69b24f8a2e9248e6927ff96a",
            "dropOffLocationId": "e76b42a5d80c41642cd800e57b35538b",
            "vehicleRefId": "6dd0093a-c340-4172-9338-2c8ea557123c",
            "vendorCode": "ZD",
            "supplierId": "2oav04dq03k",
            "inventoryType": "Prepaid",
            "displayFare": {
                "type": "Negotiated",
                "guaranteeRequired": false,
                "depositRequired": false,
                "currency": "USD",
                "totalFare": 176.94,
                "breakup": {
                    "baseFare": 153.99,
                    "fees": [
                        {
                            "source": "vendorFee",
                            "desc": "VEH. LICENSE FEE",
                            "amount": 6.50
                        }
                    ],
                    "taxes": [
                        {
                            "source": "Supplier",
                            "code": "7",
                            "desc": "Local Tax",
                            "amount": 16.45
                        }
                    ],
                    "charges": [],
                    "equipments": [],
                    "coverages": [],
                    "markups": [],
                    "discounts": []
                },
                "commissions": [],
                "usdEquivalentExchangeRate": 1.0
            },
            "optionalCharges": {
                "fees": [],
                "taxes": [],
                "charges": [
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$10.00    EXTENSION FEE MAY APPLY",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "FUEL POLICY IS FULL TO FULL",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$20.00    LATE FEE MAY APPLY",
                        "amount": 0.0
                    }
                ],
                "coverages": [],
                "equipments": []
            },
            "purchaseOption": {
                "totalPurchaseUnits": 1,
                "cashCurrency": "USD",
                "pointsCurrency": "Points",
                "rewards": [
                    {
                        "id": "1116|1",
                        "name": "Car Reward - BaseR",
                        "rank": 1,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 17694.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1.0,
                            "maximumPoints": 17694.0,
                            "pointToCashFactor": {
                                "value": 0.0100000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 17694.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0100000"
                            }
                        ],
                        "redemption": {
                            "id": "1116|1",
                            "name": "Car Reward - BaseR",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 17694.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1.0,
                                "maximumPoints": 17694.0,
                                "pointToCashFactor": {
                                    "value": 0.0100000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 17694.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0100000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "4912|1",
                        "name": "Car Redemption",
                        "rank": 2,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1500.0,
                            "maximumPoints": 15000.0,
                            "pointToCashFactor": {
                                "value": 0.0130000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1500.0000,
                            "roundingType": "Up"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "15"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0130000"
                            }
                        ],
                        "redemption": {
                            "id": "4912|1",
                            "name": "Car Redemption",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1500.0,
                                "maximumPoints": 15000.0,
                                "pointToCashFactor": {
                                    "value": 0.0130000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1500.0000,
                                "roundingType": "Up"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "15"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0130000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "511|7",
                        "name": "Pay in Cash",
                        "rank": 200,
                        "type": "Purchase",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 176.94,
                            "points": 0.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 0.0,
                            "maximumPoints": 0.0,
                            "pointToCashFactor": {
                                "value": 0.0,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 176.94,
                            "points": 0.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0"
                            }
                        ],
                        "redemption": {
                            "id": "511|7",
                            "name": "Pay in Cash",
                            "type": "Purchase",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 176.94,
                                "points": 0.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 0.0,
                                "maximumPoints": 0.0,
                                "pointToCashFactor": {
                                    "value": 0.0,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 176.94,
                                "points": 0.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0"
                                }
                            ]
                        }
                    }
                ]
            },
            "policies": [
                {
                    "type": "General",
                    "text": "Smoke Free|4 Doors|5 Seats|Automatic|Air Conditioning|Holds 1 large, 2 small suitcases|24 mpg|Bluetooth/SYNC|image=2021-kia-soul-s-5door-hatchback-white.png|thumb=2021-kia-soul-s-5door-hatchback-white.png|cargroup=B|category=Compact"
                }
            ],
            "cancellationPolicy": {
                "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
                "penaltyRules": [
                    {
                        "value": 1.0,
                        "valueType": "Day",
                        "estimatedValue": 35.39,
                        "window": {
                            "start": "2022-09-30T10:30:00",
                            "end": "2022-10-03T10:30:00"
                        }
                    }
                ]
            },
            "mileage": {
                "isUnlimited": true,
                "allowed": []
            },
            "freeCancellationEndDate": "2022-09-30T10:29:59",
            "recommendationScore": 137
        },
        {
            "id": "ZmVmMmExYTctOGRmZC00YWYzLTlhMzQtYmJkZGQwY2FjNGJlLjMxJGQyNjM0M2ZhLWQ2ZTUtNGY3YS1hMDY1LTE4YWZjMGJkNzQ5Yi1DTE5YVHwxMzcx",
            "pickUpLocationId": "884faeef69b24f8a2e9248e6927ff96a",
            "dropOffLocationId": "da292b506f453c747fd6f44fcca6789e",
            "vehicleRefId": "26bd61eb-c1cb-4bff-82ee-94a598e2d81c",
            "vendorCode": "ZD",
            "supplierId": "2oav04dq03k",
            "inventoryType": "Prepaid",
            "displayFare": {
                "type": "Negotiated",
                "guaranteeRequired": false,
                "depositRequired": false,
                "currency": "USD",
                "totalFare": 176.94,
                "breakup": {
                    "baseFare": 153.99,
                    "fees": [
                        {
                            "source": "vendorFee",
                            "desc": "VEH. LICENSE FEE",
                            "amount": 6.50
                        }
                    ],
                    "taxes": [
                        {
                            "source": "Supplier",
                            "code": "7",
                            "desc": "Local Tax",
                            "amount": 16.45
                        }
                    ],
                    "charges": [],
                    "equipments": [],
                    "coverages": [],
                    "markups": [],
                    "discounts": []
                },
                "commissions": [],
                "usdEquivalentExchangeRate": 1.0
            },
            "optionalCharges": {
                "fees": [],
                "taxes": [],
                "charges": [
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$10.00    EXTENSION FEE MAY APPLY",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "FUEL POLICY IS FULL TO FULL",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$20.00    LATE FEE MAY APPLY",
                        "amount": 0.0
                    }
                ],
                "coverages": [],
                "equipments": []
            },
            "purchaseOption": {
                "totalPurchaseUnits": 1,
                "cashCurrency": "USD",
                "pointsCurrency": "Points",
                "rewards": [
                    {
                        "id": "1116|1",
                        "name": "Car Reward - BaseR",
                        "rank": 1,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 17694.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1.0,
                            "maximumPoints": 17694.0,
                            "pointToCashFactor": {
                                "value": 0.0100000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 17694.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0100000"
                            }
                        ],
                        "redemption": {
                            "id": "1116|1",
                            "name": "Car Reward - BaseR",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 17694.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1.0,
                                "maximumPoints": 17694.0,
                                "pointToCashFactor": {
                                    "value": 0.0100000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 17694.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0100000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "4912|1",
                        "name": "Car Redemption",
                        "rank": 2,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1500.0,
                            "maximumPoints": 15000.0,
                            "pointToCashFactor": {
                                "value": 0.0130000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1500.0000,
                            "roundingType": "Up"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "15"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0130000"
                            }
                        ],
                        "redemption": {
                            "id": "4912|1",
                            "name": "Car Redemption",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1500.0,
                                "maximumPoints": 15000.0,
                                "pointToCashFactor": {
                                    "value": 0.0130000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1500.0000,
                                "roundingType": "Up"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "15"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0130000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "511|7",
                        "name": "Pay in Cash",
                        "rank": 200,
                        "type": "Purchase",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 176.94,
                            "points": 0.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 0.0,
                            "maximumPoints": 0.0,
                            "pointToCashFactor": {
                                "value": 0.0,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 176.94,
                            "points": 0.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0"
                            }
                        ],
                        "redemption": {
                            "id": "511|7",
                            "name": "Pay in Cash",
                            "type": "Purchase",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 176.94,
                                "points": 0.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 0.0,
                                "maximumPoints": 0.0,
                                "pointToCashFactor": {
                                    "value": 0.0,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 176.94,
                                "points": 0.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0"
                                }
                            ]
                        }
                    }
                ]
            },
            "policies": [
                {
                    "type": "General",
                    "text": "Smoke Free|4 Doors|5 Seats|Automatic|Air Conditioning|Holds 1 large, 1 small suitcases|27 mpg|Bluetooth/SYNC|Back-up Camera|image=2020-kia-rio-s-sedan-silver.png|thumb=2020-kia-rio-s-sedan-silver.png|cargroup=A|category=Economy"
                }
            ],
            "cancellationPolicy": {
                "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
                "penaltyRules": [
                    {
                        "value": 1.0,
                        "valueType": "Day",
                        "estimatedValue": 35.39,
                        "window": {
                            "start": "2022-09-30T10:30:00",
                            "end": "2022-10-03T10:30:00"
                        }
                    }
                ]
            },
            "mileage": {
                "isUnlimited": true,
                "allowed": []
            },
            "freeCancellationEndDate": "2022-09-30T10:29:59",
            "recommendationScore": 144
        },
        {
            "id": "Mjc5ZTM3ZTctMWFiYy00N2I4LWExOTAtYTUwNjcxMzRkYmM0LjM5JGQyNjM0M2ZhLWQ2ZTUtNGY3YS1hMDY1LTE4YWZjMGJkNzQ5Yi1DTE5YVHwxMzcx",
            "pickUpLocationId": "d1cfbfa79777bd07713f7835f77c4264",
            "dropOffLocationId": "e76b42a5d80c41642cd800e57b35538b",
            "vehicleRefId": "bce0115e-a454-42f7-a2f6-bf1e6280ae24",
            "vendorCode": "ZD",
            "supplierId": "2oav04dq03k",
            "inventoryType": "Prepaid",
            "displayFare": {
                "type": "Negotiated",
                "guaranteeRequired": false,
                "depositRequired": false,
                "currency": "USD",
                "totalFare": 176.94,
                "breakup": {
                    "baseFare": 153.99,
                    "fees": [
                        {
                            "source": "vendorFee",
                            "desc": "VEH. LICENSE FEE",
                            "amount": 6.50
                        }
                    ],
                    "taxes": [
                        {
                            "source": "Supplier",
                            "code": "7",
                            "desc": "Local Tax",
                            "amount": 16.45
                        }
                    ],
                    "charges": [],
                    "equipments": [],
                    "coverages": [],
                    "markups": [],
                    "discounts": []
                },
                "commissions": [],
                "usdEquivalentExchangeRate": 1.0
            },
            "optionalCharges": {
                "fees": [],
                "taxes": [],
                "charges": [
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$10.00    EXTENSION FEE MAY APPLY",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "FUEL POLICY IS FULL TO FULL",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$20.00    LATE FEE MAY APPLY",
                        "amount": 0.0
                    }
                ],
                "coverages": [],
                "equipments": []
            },
            "purchaseOption": {
                "totalPurchaseUnits": 1,
                "cashCurrency": "USD",
                "pointsCurrency": "Points",
                "rewards": [
                    {
                        "id": "1116|1",
                        "name": "Car Reward - BaseR",
                        "rank": 1,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 17694.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1.0,
                            "maximumPoints": 17694.0,
                            "pointToCashFactor": {
                                "value": 0.0100000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 17694.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0100000"
                            }
                        ],
                        "redemption": {
                            "id": "1116|1",
                            "name": "Car Reward - BaseR",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 17694.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1.0,
                                "maximumPoints": 17694.0,
                                "pointToCashFactor": {
                                    "value": 0.0100000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 17694.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0100000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "4912|1",
                        "name": "Car Redemption",
                        "rank": 2,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1500.0,
                            "maximumPoints": 15000.0,
                            "pointToCashFactor": {
                                "value": 0.0130000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1500.0000,
                            "roundingType": "Up"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "15"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0130000"
                            }
                        ],
                        "redemption": {
                            "id": "4912|1",
                            "name": "Car Redemption",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1500.0,
                                "maximumPoints": 15000.0,
                                "pointToCashFactor": {
                                    "value": 0.0130000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1500.0000,
                                "roundingType": "Up"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "15"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0130000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "511|7",
                        "name": "Pay in Cash",
                        "rank": 200,
                        "type": "Purchase",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 176.94,
                            "points": 0.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 0.0,
                            "maximumPoints": 0.0,
                            "pointToCashFactor": {
                                "value": 0.0,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 176.94,
                            "points": 0.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0"
                            }
                        ],
                        "redemption": {
                            "id": "511|7",
                            "name": "Pay in Cash",
                            "type": "Purchase",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 176.94,
                                "points": 0.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 0.0,
                                "maximumPoints": 0.0,
                                "pointToCashFactor": {
                                    "value": 0.0,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 176.94,
                                "points": 0.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0"
                                }
                            ]
                        }
                    }
                ]
            },
            "policies": [
                {
                    "type": "General",
                    "text": "Smoke Free|4 Doors|5 Seats|Automatic|Air Conditioning|Holds 1 large, 1 small suitcases|27 mpg|Bluetooth/SYNC|Back-up Camera|image=2020-kia-rio-s-sedan-silver.png|thumb=2020-kia-rio-s-sedan-silver.png|cargroup=A|category=Economy"
                }
            ],
            "cancellationPolicy": {
                "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
                "penaltyRules": [
                    {
                        "value": 1.0,
                        "valueType": "Day",
                        "estimatedValue": 35.39,
                        "window": {
                            "start": "2022-09-30T10:30:00",
                            "end": "2022-10-03T10:30:00"
                        }
                    }
                ]
            },
            "mileage": {
                "isUnlimited": true,
                "allowed": []
            },
            "freeCancellationEndDate": "2022-09-30T10:29:59",
            "recommendationScore": 142
        },
        {
            "id": "ZWVjNDI4NGQtMWUxMS00YjYzLTljZTYtZmNlOTkyNjA4MGZiLjM1JGQyNjM0M2ZhLWQ2ZTUtNGY3YS1hMDY1LTE4YWZjMGJkNzQ5Yi1DTE5YVHwxMzcx",
            "pickUpLocationId": "884faeef69b24f8a2e9248e6927ff96a",
            "dropOffLocationId": "86481b2cd542fe8b7ab3d9c34d5c6dbc",
            "vehicleRefId": "2de09a91-2f7a-4dad-83a8-4abd75da1944",
            "vendorCode": "ZD",
            "supplierId": "2oav04dq03k",
            "inventoryType": "Prepaid",
            "displayFare": {
                "type": "Negotiated",
                "guaranteeRequired": false,
                "depositRequired": false,
                "currency": "USD",
                "totalFare": 176.94,
                "breakup": {
                    "baseFare": 153.99,
                    "fees": [
                        {
                            "source": "vendorFee",
                            "desc": "VEH. LICENSE FEE",
                            "amount": 6.50
                        }
                    ],
                    "taxes": [
                        {
                            "source": "Supplier",
                            "code": "7",
                            "desc": "Local Tax",
                            "amount": 16.45
                        }
                    ],
                    "charges": [],
                    "equipments": [],
                    "coverages": [],
                    "markups": [],
                    "discounts": []
                },
                "commissions": [],
                "usdEquivalentExchangeRate": 1.0
            },
            "optionalCharges": {
                "fees": [],
                "taxes": [],
                "charges": [
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$10.00    EXTENSION FEE MAY APPLY",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "FUEL POLICY IS FULL TO FULL",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$20.00    LATE FEE MAY APPLY",
                        "amount": 0.0
                    }
                ],
                "coverages": [],
                "equipments": []
            },
            "purchaseOption": {
                "totalPurchaseUnits": 1,
                "cashCurrency": "USD",
                "pointsCurrency": "Points",
                "rewards": [
                    {
                        "id": "1116|1",
                        "name": "Car Reward - BaseR",
                        "rank": 1,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 17694.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1.0,
                            "maximumPoints": 17694.0,
                            "pointToCashFactor": {
                                "value": 0.0100000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 17694.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0100000"
                            }
                        ],
                        "redemption": {
                            "id": "1116|1",
                            "name": "Car Reward - BaseR",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 17694.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1.0,
                                "maximumPoints": 17694.0,
                                "pointToCashFactor": {
                                    "value": 0.0100000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 17694.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0100000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "4912|1",
                        "name": "Car Redemption",
                        "rank": 2,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1500.0,
                            "maximumPoints": 15000.0,
                            "pointToCashFactor": {
                                "value": 0.0130000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1500.0000,
                            "roundingType": "Up"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "15"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0130000"
                            }
                        ],
                        "redemption": {
                            "id": "4912|1",
                            "name": "Car Redemption",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1500.0,
                                "maximumPoints": 15000.0,
                                "pointToCashFactor": {
                                    "value": 0.0130000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1500.0000,
                                "roundingType": "Up"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "15"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0130000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "511|7",
                        "name": "Pay in Cash",
                        "rank": 200,
                        "type": "Purchase",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 176.94,
                            "points": 0.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 0.0,
                            "maximumPoints": 0.0,
                            "pointToCashFactor": {
                                "value": 0.0,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 176.94,
                            "points": 0.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0"
                            }
                        ],
                        "redemption": {
                            "id": "511|7",
                            "name": "Pay in Cash",
                            "type": "Purchase",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 176.94,
                                "points": 0.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 0.0,
                                "maximumPoints": 0.0,
                                "pointToCashFactor": {
                                    "value": 0.0,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 176.94,
                                "points": 0.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0"
                                }
                            ]
                        }
                    }
                ]
            },
            "policies": [
                {
                    "type": "General",
                    "text": "Smoke Free|4 Doors|5 Seats|Automatic|Air Conditioning|Holds 1 large, 2 small suitcases|24 mpg|Bluetooth/SYNC|image=2021-kia-soul-s-5door-hatchback-white.png|thumb=2021-kia-soul-s-5door-hatchback-white.png|cargroup=B|category=Compact"
                }
            ],
            "cancellationPolicy": {
                "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
                "penaltyRules": [
                    {
                        "value": 1.0,
                        "valueType": "Day",
                        "estimatedValue": 35.39,
                        "window": {
                            "start": "2022-09-30T10:30:00",
                            "end": "2022-10-03T10:30:00"
                        }
                    }
                ]
            },
            "mileage": {
                "isUnlimited": true,
                "allowed": []
            },
            "freeCancellationEndDate": "2022-09-30T10:29:59",
            "recommendationScore": 139
        },
        {
            "id": "MmM3YjQ3YjItNTI5OS00NzQ1LWE2NTYtMjJkMTMwZWFiOWY4LjMwJGQyNjM0M2ZhLWQ2ZTUtNGY3YS1hMDY1LTE4YWZjMGJkNzQ5Yi1DTE5YVHwxMzcx",
            "pickUpLocationId": "884faeef69b24f8a2e9248e6927ff96a",
            "dropOffLocationId": "e76b42a5d80c41642cd800e57b35538b",
            "vehicleRefId": "bb2784ba-aeff-4650-a6f4-67b6f0d7ed5c",
            "vendorCode": "ZD",
            "supplierId": "2oav04dq03k",
            "inventoryType": "Prepaid",
            "displayFare": {
                "type": "Negotiated",
                "guaranteeRequired": false,
                "depositRequired": false,
                "currency": "USD",
                "totalFare": 176.94,
                "breakup": {
                    "baseFare": 153.99,
                    "fees": [
                        {
                            "source": "vendorFee",
                            "desc": "VEH. LICENSE FEE",
                            "amount": 6.50
                        }
                    ],
                    "taxes": [
                        {
                            "source": "Supplier",
                            "code": "7",
                            "desc": "Local Tax",
                            "amount": 16.45
                        }
                    ],
                    "charges": [],
                    "equipments": [],
                    "coverages": [],
                    "markups": [],
                    "discounts": []
                },
                "commissions": [],
                "usdEquivalentExchangeRate": 1.0
            },
            "optionalCharges": {
                "fees": [],
                "taxes": [],
                "charges": [
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$10.00    EXTENSION FEE MAY APPLY",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "FUEL POLICY IS FULL TO FULL",
                        "amount": 0.0
                    },
                    {
                        "type": "Optional",
                        "taxInclusive": false,
                        "desc": "$20.00    LATE FEE MAY APPLY",
                        "amount": 0.0
                    }
                ],
                "coverages": [],
                "equipments": []
            },
            "purchaseOption": {
                "totalPurchaseUnits": 1,
                "cashCurrency": "USD",
                "pointsCurrency": "Points",
                "rewards": [
                    {
                        "id": "1116|1",
                        "name": "Car Reward - BaseR",
                        "rank": 1,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 17694.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1.0,
                            "maximumPoints": 17694.0,
                            "pointToCashFactor": {
                                "value": 0.0100000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 17694.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0100000"
                            }
                        ],
                        "redemption": {
                            "id": "1116|1",
                            "name": "Car Reward - BaseR",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 17694.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1.0,
                                "maximumPoints": 17694.0,
                                "pointToCashFactor": {
                                    "value": 0.0100000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 17694.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0100000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "4912|1",
                        "name": "Car Redemption",
                        "rank": 2,
                        "type": "Variable_TieredVariable_LAPF_HybridFTP",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 1500.0,
                            "maximumPoints": 15000.0,
                            "pointToCashFactor": {
                                "value": 0.0130000,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1500.0000,
                            "roundingType": "Up"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 0.0,
                            "points": 15000.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "15"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0.0130000"
                            }
                        ],
                        "redemption": {
                            "id": "4912|1",
                            "name": "Car Redemption",
                            "type": "Variable_TieredVariable_LAPF_HybridFTP",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 1500.0,
                                "maximumPoints": 15000.0,
                                "pointToCashFactor": {
                                    "value": 0.0130000,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1500.0000,
                                "roundingType": "Up"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 0.0,
                                "points": 15000.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "15"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0.0130000"
                                }
                            ]
                        }
                    },
                    {
                        "id": "511|7",
                        "name": "Pay in Cash",
                        "rank": 200,
                        "type": "Purchase",
                        "recommendation": {
                            "fee": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "maxQuantity": 1,
                            "cash": 176.94,
                            "points": 0.0
                        },
                        "isEligible": true,
                        "ruleSet": {
                            "minimumPoints": 0.0,
                            "maximumPoints": 0.0,
                            "pointToCashFactor": {
                                "value": 0.0,
                                "operator": "Multiply"
                            },
                            "cashRoundingOff": 0.0,
                            "pointStepSize": 1.0,
                            "roundingType": "None"
                        },
                        "strikeOutValue": {
                            "cash": 0.0,
                            "points": 0.0
                        },
                        "actualValue": {
                            "cash": 176.94,
                            "points": 0.0
                        },
                        "stateBag": [
                            {
                                "key": "IsTotalFareEquivalentToNetFare",
                                "value": "False"
                            },
                            {
                                "key": "RequiresBinValidation",
                                "value": "False"
                            },
                            {
                                "key": "RequiresOrderHistoryValidation",
                                "value": "False"
                            },
                            {
                                "key": "DiscountAmount",
                                "value": "0"
                            },
                            {
                                "key": "DiscountType",
                                "value": "None"
                            },
                            {
                                "key": "FareQuote",
                                "value": "176.94"
                            },
                            {
                                "key": "FareQuoteAdjustmentAmount",
                                "value": "0"
                            },
                            {
                                "key": "UnitSupplierFee",
                                "value": "0"
                            },
                            {
                                "key": "UnitTax",
                                "value": "0"
                            },
                            {
                                "key": "ProgramCurrencyMinimumType",
                                "value": "Numeric"
                            },
                            {
                                "key": "ShortFallFactorType",
                                "value": "Multiply"
                            },
                            {
                                "key": "CrossOffFareQuote",
                                "value": "0"
                            },
                            {
                                "key": "PointCalculationFactor",
                                "value": "0"
                            }
                        ],
                        "redemption": {
                            "id": "511|7",
                            "name": "Pay in Cash",
                            "type": "Purchase",
                            "recommendation": {
                                "fee": {
                                    "cash": 0.0,
                                    "points": 0.0
                                },
                                "maxQuantity": 1,
                                "cash": 176.94,
                                "points": 0.0
                            },
                            "isEligible": true,
                            "ruleSet": {
                                "minimumPoints": 0.0,
                                "maximumPoints": 0.0,
                                "pointToCashFactor": {
                                    "value": 0.0,
                                    "operator": "Multiply"
                                },
                                "cashRoundingOff": 0.0,
                                "pointStepSize": 1.0,
                                "roundingType": "None"
                            },
                            "strikeOutValue": {
                                "cash": 0.0,
                                "points": 0.0
                            },
                            "actualValue": {
                                "cash": 176.94,
                                "points": 0.0
                            },
                            "stateBag": [
                                {
                                    "key": "IsTotalFareEquivalentToNetFare",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresBinValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "RequiresOrderHistoryValidation",
                                    "value": "False"
                                },
                                {
                                    "key": "DiscountAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "DiscountType",
                                    "value": "None"
                                },
                                {
                                    "key": "FareQuote",
                                    "value": "176.94"
                                },
                                {
                                    "key": "FareQuoteAdjustmentAmount",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitSupplierFee",
                                    "value": "0"
                                },
                                {
                                    "key": "UnitTax",
                                    "value": "0"
                                },
                                {
                                    "key": "ProgramCurrencyMinimumType",
                                    "value": "Numeric"
                                },
                                {
                                    "key": "ShortFallFactorType",
                                    "value": "Multiply"
                                },
                                {
                                    "key": "CrossOffFareQuote",
                                    "value": "0"
                                },
                                {
                                    "key": "PointCalculationFactor",
                                    "value": "0"
                                }
                            ]
                        }
                    }
                ]
            },
            "policies": [
                {
                    "type": "General",
                    "text": "Smoke Free|4 Doors|5 Seats|Automatic|Air Conditioning|Holds 1 large, 1 small suitcases|27 mpg|Bluetooth/SYNC|Back-up Camera|image=2020-kia-rio-s-sedan-silver.png|thumb=2020-kia-rio-s-sedan-silver.png|cargroup=A|category=Economy"
                }
            ],
            "cancellationPolicy": {
                "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
                "penaltyRules": [
                    {
                        "value": 1.0,
                        "valueType": "Day",
                        "estimatedValue": 35.39,
                        "window": {
                            "start": "2022-09-30T10:30:00",
                            "end": "2022-10-03T10:30:00"
                        }
                    }
                ]
            },
            "mileage": {
                "isUnlimited": true,
                "allowed": []
            },
            "freeCancellationEndDate": "2022-09-30T10:29:59",
            "recommendationScore": 136
        }
    ],
    "vendors": [
        {
            "code": "ZD",
            "name": "Budget",
            "policies": [],
            "logo": "https://car-vendor-logo.stage.cnxloyalty.com/78x37/ZD.jpg"
        }
    ],
    "rentalLocations": [
        {
            "id": "37210ca057df9739bef48dd55a608ddc",
            "code": "LAXC11",
            "name": "WEST LOS ANGELES",
            "inTerminal": false,
            "atAirport": false,
            "shuttle": "Unknown",
            "hoursOfOperation": [
                {
                    "dayOfWeek": "Sun",
                    "workingHours": []
                },
                {
                    "dayOfWeek": "Mon",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "17:00:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Tue",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "17:00:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Wed",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "17:00:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Thu",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "17:00:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Fri",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "17:00:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Sat",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "14:00:00"
                        }
                    ]
                }
            ],
            "contactInfo": {
                "address": {
                    "line1": "11901 SANTA MONICA BOULEVARD",
                    "cityName": "WEST LOS ANGELES",
                    "state": {
                        "code": "CA"
                    },
                    "countryCode": "US",
                    "postalCode": "90025"
                },
                "phone": {
                    "type": "Unknown",
                    "number": "310-914-7702"
                }
            },
            "geoCode": {
                "lat": 34.04209,
                "long": -118.460884
            }
        },
        {
            "id": "da292b506f453c747fd6f44fcca6789e",
            "code": "LASC09",
            "name": "W TROPICANA AVE",
            "inTerminal": false,
            "atAirport": false,
            "shuttle": "Unknown",
            "hoursOfOperation": [
                {
                    "dayOfWeek": "Sun",
                    "workingHours": [
                        {
                            "openTime": "07:30:00",
                            "closeTime": "17:30:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Mon",
                    "workingHours": [
                        {
                            "openTime": "07:30:00",
                            "closeTime": "17:30:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Tue",
                    "workingHours": [
                        {
                            "openTime": "07:30:00",
                            "closeTime": "17:30:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Wed",
                    "workingHours": [
                        {
                            "openTime": "07:30:00",
                            "closeTime": "17:30:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Thu",
                    "workingHours": [
                        {
                            "openTime": "07:30:00",
                            "closeTime": "17:30:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Fri",
                    "workingHours": [
                        {
                            "openTime": "07:30:00",
                            "closeTime": "17:30:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Sat",
                    "workingHours": [
                        {
                            "openTime": "07:30:00",
                            "closeTime": "17:30:00"
                        }
                    ]
                }
            ],
            "contactInfo": {
                "address": {
                    "line1": "4475 WEST TROPICANA AVENUE",
                    "cityName": "LAS VEGAS",
                    "state": {
                        "code": "NV"
                    },
                    "countryCode": "US",
                    "postalCode": "89103"
                },
                "phone": {
                    "type": "Unknown",
                    "number": "702-362-8668"
                }
            },
            "geoCode": {
                "lat": 36.100357,
                "long": -115.2009
            }
        },
        {
            "id": "18b9f1af2813c6852fb72c2d4603a189",
            "code": "LAXE01",
            "name": "WESTWOOD",
            "inTerminal": false,
            "atAirport": false,
            "shuttle": "Unknown",
            "hoursOfOperation": [
                {
                    "dayOfWeek": "Sun",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "14:00:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Mon",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "17:00:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Tue",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "17:00:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Wed",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "17:00:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Thu",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "17:00:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Fri",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "17:00:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Sat",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "14:00:00"
                        }
                    ]
                }
            ],
            "contactInfo": {
                "address": {
                    "line1": "1234 WESTWOOD BOULEVARD, WEST OF BEV HILLS/NEAR UCLA",
                    "cityName": "LOS ANGELES",
                    "state": {
                        "code": "CA"
                    },
                    "countryCode": "US",
                    "postalCode": "90024"
                },
                "phone": {
                    "type": "Unknown",
                    "number": "310-446-4192"
                }
            },
            "geoCode": {
                "lat": 34.05823,
                "long": -118.44333
            }
        },
        {
            "id": "e76b42a5d80c41642cd800e57b35538b",
            "code": "LASC05",
            "name": "LAS VEGAS BLVD",
            "inTerminal": false,
            "atAirport": false,
            "shuttle": "Unknown",
            "hoursOfOperation": [
                {
                    "dayOfWeek": "Sun",
                    "workingHours": [
                        {
                            "openTime": "07:30:00",
                            "closeTime": "17:30:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Mon",
                    "workingHours": [
                        {
                            "openTime": "07:30:00",
                            "closeTime": "17:30:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Tue",
                    "workingHours": [
                        {
                            "openTime": "07:30:00",
                            "closeTime": "17:30:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Wed",
                    "workingHours": [
                        {
                            "openTime": "07:30:00",
                            "closeTime": "17:30:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Thu",
                    "workingHours": [
                        {
                            "openTime": "07:30:00",
                            "closeTime": "17:30:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Fri",
                    "workingHours": [
                        {
                            "openTime": "07:30:00",
                            "closeTime": "17:30:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Sat",
                    "workingHours": [
                        {
                            "openTime": "07:30:00",
                            "closeTime": "17:30:00"
                        }
                    ]
                }
            ],
            "contactInfo": {
                "address": {
                    "line1": "3049 S LAS VEGAS BLVD STE 25N, GOLD KEY SHOPS CENTER STRIP",
                    "cityName": "LAS VEGAS",
                    "state": {
                        "code": "NV"
                    },
                    "countryCode": "US",
                    "postalCode": "89109"
                },
                "phone": {
                    "type": "Unknown",
                    "number": "702-568-2241"
                }
            },
            "geoCode": {
                "lat": 36.131187,
                "long": -115.16391
            }
        },
        {
            "id": "884faeef69b24f8a2e9248e6927ff96a",
            "code": "SMOC02",
            "name": "SANTA MONICA",
            "inTerminal": false,
            "atAirport": false,
            "shuttle": "Unknown",
            "hoursOfOperation": [
                {
                    "dayOfWeek": "Sun",
                    "workingHours": []
                },
                {
                    "dayOfWeek": "Mon",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "17:00:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Tue",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "17:00:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Wed",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "17:00:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Thu",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "17:00:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Fri",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "17:00:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Sat",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "14:00:00"
                        }
                    ]
                }
            ],
            "contactInfo": {
                "address": {
                    "line1": "1027 BROADWAY",
                    "cityName": "SANTA MONICA",
                    "state": {
                        "code": "CA"
                    },
                    "countryCode": "US",
                    "postalCode": "90401"
                },
                "phone": {
                    "type": "Unknown",
                    "number": "310-393-9194"
                }
            },
            "geoCode": {
                "lat": 34.020466,
                "long": -118.487526
            }
        },
        {
            "id": "d1cfbfa79777bd07713f7835f77c4264",
            "code": "LAXN03",
            "name": "CULVER CITY CA",
            "inTerminal": false,
            "atAirport": false,
            "shuttle": "Unknown",
            "hoursOfOperation": [
                {
                    "dayOfWeek": "Sun",
                    "workingHours": []
                },
                {
                    "dayOfWeek": "Mon",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "18:00:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Tue",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "18:00:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Wed",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "18:00:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Thu",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "18:00:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Fri",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "18:00:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Sat",
                    "workingHours": [
                        {
                            "openTime": "08:00:00",
                            "closeTime": "13:00:00"
                        }
                    ]
                }
            ],
            "contactInfo": {
                "address": {
                    "line1": "4246 SEPULVEDA BOULEVARD, 5 MILES FROM LAX APO",
                    "cityName": "CULVER CITY",
                    "state": {
                        "code": "CA"
                    },
                    "countryCode": "US",
                    "postalCode": "90230"
                },
                "phone": {
                    "type": "Unknown",
                    "number": "310-391-5708"
                }
            },
            "geoCode": {
                "lat": 34.005222,
                "long": -118.4102
            }
        },
        {
            "id": "af1ba82f958e20223c322eff7e2ed5c5",
            "code": "LASC11",
            "name": "TOYOTA LAS VEGAS",
            "inTerminal": false,
            "atAirport": false,
            "shuttle": "Unknown",
            "hoursOfOperation": [
                {
                    "dayOfWeek": "Sun",
                    "workingHours": []
                },
                {
                    "dayOfWeek": "Mon",
                    "workingHours": [
                        {
                            "openTime": "07:00:00",
                            "closeTime": "17:30:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Tue",
                    "workingHours": [
                        {
                            "openTime": "07:00:00",
                            "closeTime": "17:30:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Wed",
                    "workingHours": [
                        {
                            "openTime": "07:00:00",
                            "closeTime": "17:30:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Thu",
                    "workingHours": [
                        {
                            "openTime": "07:00:00",
                            "closeTime": "17:30:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Fri",
                    "workingHours": [
                        {
                            "openTime": "07:00:00",
                            "closeTime": "17:30:00"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Sat",
                    "workingHours": [
                        {
                            "openTime": "07:00:00",
                            "closeTime": "15:30:00"
                        }
                    ]
                }
            ],
            "contactInfo": {
                "address": {
                    "line1": "3255 EAST SAHARA AVENUE, TOYOTA OF LAS VEGAS",
                    "cityName": "LAS VEGAS",
                    "state": {
                        "code": "NV"
                    },
                    "countryCode": "US",
                    "postalCode": "89104"
                },
                "phone": {
                    "type": "Unknown",
                    "number": "702-749-9227"
                }
            },
            "geoCode": {
                "lat": 36.1437,
                "long": -115.10471
            }
        },
        {
            "id": "86481b2cd542fe8b7ab3d9c34d5c6dbc",
            "code": "LAST01",
            "name": "LAS VEGAS APO NV",
            "inTerminal": false,
            "atAirport": true,
            "shuttle": "Unknown",
            "hoursOfOperation": [
                {
                    "dayOfWeek": "Sun",
                    "workingHours": [
                        {
                            "openTime": "00:00:00",
                            "closeTime": "23:59:59"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Mon",
                    "workingHours": [
                        {
                            "openTime": "00:00:00",
                            "closeTime": "23:59:59"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Tue",
                    "workingHours": [
                        {
                            "openTime": "00:00:00",
                            "closeTime": "23:59:59"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Wed",
                    "workingHours": [
                        {
                            "openTime": "00:00:00",
                            "closeTime": "23:59:59"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Thu",
                    "workingHours": [
                        {
                            "openTime": "00:00:00",
                            "closeTime": "23:59:59"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Fri",
                    "workingHours": [
                        {
                            "openTime": "00:00:00",
                            "closeTime": "23:59:59"
                        }
                    ]
                },
                {
                    "dayOfWeek": "Sat",
                    "workingHours": [
                        {
                            "openTime": "00:00:00",
                            "closeTime": "23:59:59"
                        }
                    ]
                }
            ],
            "contactInfo": {
                "address": {
                    "line1": "7135 GILESPIE STREET, HARRY REID INTERNATIONAL APO",
                    "cityName": "LAS VEGAS",
                    "state": {
                        "code": "NV"
                    },
                    "countryCode": "US",
                    "postalCode": "89119"
                },
                "phone": {
                    "type": "Unknown",
                    "number": "702-736-1212"
                }
            },
            "geoCode": {
                "lat": 36.060413,
                "long": -115.16433
            }
        }
    ],
    "vehicles": [
        {
            "sippCode": "CCAR",
            "refId": "ea6ea591-f6a8-478c-851a-88d38798c96b",
            "name": "Group B - Kia Soul or similar",
            "category": "TwoOrFourDoorVehicle",
            "type": "Compact",
            "transmission": "Automatic",
            "images": [
                "https://www.budget.com/content/dam/cars/l/2021/kia/2021-kia-soul-s-5door-hatchback-white.png"
            ],
            "airConditioned": true,
            "fuelType": "Unknown",
            "baggageCapacity": "2",
            "passengerCapacity": "5",
            "driveType": "Unknown",
            "policies": [],
            "specialEquipment": []
        },
        {
            "sippCode": "CCAR",
            "refId": "6e46221a-cee1-4a83-8232-f8c0b57a8d79",
            "name": "Group B - Kia Soul or similar",
            "category": "TwoOrFourDoorVehicle",
            "type": "Compact",
            "transmission": "Automatic",
            "images": [
                "https://www.budget.com/content/dam/cars/l/2021/kia/2021-kia-soul-s-5door-hatchback-white.png"
            ],
            "airConditioned": true,
            "fuelType": "Unknown",
            "baggageCapacity": "2",
            "passengerCapacity": "5",
            "driveType": "Unknown",
            "policies": [],
            "specialEquipment": []
        },
        {
            "sippCode": "CCAR",
            "refId": "1aff34e4-e879-4811-bcb4-8801e0608d7b",
            "name": "Group B - Kia Soul or similar",
            "category": "TwoOrFourDoorVehicle",
            "type": "Compact",
            "transmission": "Automatic",
            "images": [
                "https://www.budget.com/content/dam/cars/l/2021/kia/2021-kia-soul-s-5door-hatchback-white.png"
            ],
            "airConditioned": true,
            "fuelType": "Unknown",
            "baggageCapacity": "2",
            "passengerCapacity": "5",
            "driveType": "Unknown",
            "policies": [],
            "specialEquipment": []
        },
        {
            "sippCode": "ECAR",
            "refId": "c35a6cc2-c1fb-4c80-aaed-3342f8fefffb",
            "name": "Group A - Kia Rio or similar",
            "category": "TwoOrFourDoorVehicle",
            "type": "Economy",
            "transmission": "Automatic",
            "images": [
                "https://www.budget.com/content/dam/cars/l/2020/kia/2020-kia-rio-s-sedan-silver.png"
            ],
            "airConditioned": true,
            "fuelType": "Unknown",
            "baggageCapacity": "1",
            "passengerCapacity": "5",
            "driveType": "Unknown",
            "policies": [],
            "specialEquipment": []
        },
        {
            "sippCode": "ECAR",
            "refId": "bc417574-c5dd-4684-8a57-1b5aaf9785af",
            "name": "Group A - Kia Rio or similar",
            "category": "TwoOrFourDoorVehicle",
            "type": "Economy",
            "transmission": "Automatic",
            "images": [
                "https://www.budget.com/content/dam/cars/l/2020/kia/2020-kia-rio-s-sedan-silver.png"
            ],
            "airConditioned": true,
            "fuelType": "Unknown",
            "baggageCapacity": "1",
            "passengerCapacity": "5",
            "driveType": "Unknown",
            "policies": [],
            "specialEquipment": []
        },
        {
            "sippCode": "ECAR",
            "refId": "e8e0a2e9-a570-4520-88ab-3db3b5a50a94",
            "name": "Group A - Kia Rio or similar",
            "category": "TwoOrFourDoorVehicle",
            "type": "Economy",
            "transmission": "Automatic",
            "images": [
                "https://www.budget.com/content/dam/cars/l/2020/kia/2020-kia-rio-s-sedan-silver.png"
            ],
            "airConditioned": true,
            "fuelType": "Unknown",
            "baggageCapacity": "1",
            "passengerCapacity": "5",
            "driveType": "Unknown",
            "policies": [],
            "specialEquipment": []
        },
        {
            "sippCode": "CCAR",
            "refId": "be97f65b-05ed-4a44-afe4-12a4fe94bbf2",
            "name": "Group B - Kia Soul or similar",
            "category": "TwoOrFourDoorVehicle",
            "type": "Compact",
            "transmission": "Automatic",
            "images": [
                "https://www.budget.com/content/dam/cars/l/2021/kia/2021-kia-soul-s-5door-hatchback-white.png"
            ],
            "airConditioned": true,
            "fuelType": "Unknown",
            "baggageCapacity": "2",
            "passengerCapacity": "5",
            "driveType": "Unknown",
            "policies": [],
            "specialEquipment": []
        },
        {
            "sippCode": "CCAR",
            "refId": "6e044996-3c79-4128-9c0d-5c11a2d37cc7",
            "name": "Group B - Kia Soul or similar",
            "category": "TwoOrFourDoorVehicle",
            "type": "Compact",
            "transmission": "Automatic",
            "images": [
                "https://www.budget.com/content/dam/cars/l/2021/kia/2021-kia-soul-s-5door-hatchback-white.png"
            ],
            "airConditioned": true,
            "fuelType": "Unknown",
            "baggageCapacity": "2",
            "passengerCapacity": "5",
            "driveType": "Unknown",
            "policies": [],
            "specialEquipment": []
        },
        {
            "sippCode": "CCAR",
            "refId": "c8593731-8d68-4399-bcf1-7e301d630293",
            "name": "Group B - Kia Soul or similar",
            "category": "TwoOrFourDoorVehicle",
            "type": "Compact",
            "transmission": "Automatic",
            "images": [
                "https://www.budget.com/content/dam/cars/l/2021/kia/2021-kia-soul-s-5door-hatchback-white.png"
            ],
            "airConditioned": true,
            "fuelType": "Unknown",
            "baggageCapacity": "2",
            "passengerCapacity": "5",
            "driveType": "Unknown",
            "policies": [],
            "specialEquipment": []
        },
        {
            "sippCode": "ECAR",
            "refId": "27ee6a4d-a1d6-4a23-9a5a-41e58db71064",
            "name": "Group A - Kia Rio or similar",
            "category": "TwoOrFourDoorVehicle",
            "type": "Economy",
            "transmission": "Automatic",
            "images": [
                "https://www.budget.com/content/dam/cars/l/2020/kia/2020-kia-rio-s-sedan-silver.png"
            ],
            "airConditioned": true,
            "fuelType": "Unknown",
            "baggageCapacity": "1",
            "passengerCapacity": "5",
            "driveType": "Unknown",
            "policies": [],
            "specialEquipment": []
        },
        {
            "sippCode": "CCAR",
            "refId": "6dd0093a-c340-4172-9338-2c8ea557123c",
            "name": "Group B - Kia Soul or similar",
            "category": "TwoOrFourDoorVehicle",
            "type": "Compact",
            "transmission": "Automatic",
            "images": [
                "https://www.budget.com/content/dam/cars/l/2021/kia/2021-kia-soul-s-5door-hatchback-white.png"
            ],
            "airConditioned": true,
            "fuelType": "Unknown",
            "baggageCapacity": "2",
            "passengerCapacity": "5",
            "driveType": "Unknown",
            "policies": [],
            "specialEquipment": []
        },
        {
            "sippCode": "ECAR",
            "refId": "26bd61eb-c1cb-4bff-82ee-94a598e2d81c",
            "name": "Group A - Kia Rio or similar",
            "category": "TwoOrFourDoorVehicle",
            "type": "Economy",
            "transmission": "Automatic",
            "images": [
                "https://www.budget.com/content/dam/cars/l/2020/kia/2020-kia-rio-s-sedan-silver.png"
            ],
            "airConditioned": true,
            "fuelType": "Unknown",
            "baggageCapacity": "1",
            "passengerCapacity": "5",
            "driveType": "Unknown",
            "policies": [],
            "specialEquipment": []
        },
        {
            "sippCode": "ECAR",
            "refId": "bce0115e-a454-42f7-a2f6-bf1e6280ae24",
            "name": "Group A - Kia Rio or similar",
            "category": "TwoOrFourDoorVehicle",
            "type": "Economy",
            "transmission": "Automatic",
            "images": [
                "https://www.budget.com/content/dam/cars/l/2020/kia/2020-kia-rio-s-sedan-silver.png"
            ],
            "airConditioned": true,
            "fuelType": "Unknown",
            "baggageCapacity": "1",
            "passengerCapacity": "5",
            "driveType": "Unknown",
            "policies": [],
            "specialEquipment": []
        },
        {
            "sippCode": "CCAR",
            "refId": "2de09a91-2f7a-4dad-83a8-4abd75da1944",
            "name": "Group B - Kia Soul or similar",
            "category": "TwoOrFourDoorVehicle",
            "type": "Compact",
            "transmission": "Automatic",
            "images": [
                "https://www.budget.com/content/dam/cars/l/2021/kia/2021-kia-soul-s-5door-hatchback-white.png"
            ],
            "airConditioned": true,
            "fuelType": "Unknown",
            "baggageCapacity": "2",
            "passengerCapacity": "5",
            "driveType": "Unknown",
            "policies": [],
            "specialEquipment": []
        },
        {
            "sippCode": "ECAR",
            "refId": "bb2784ba-aeff-4650-a6f4-67b6f0d7ed5c",
            "name": "Group A - Kia Rio or similar",
            "category": "TwoOrFourDoorVehicle",
            "type": "Economy",
            "transmission": "Automatic",
            "images": [
                "https://www.budget.com/content/dam/cars/l/2020/kia/2020-kia-rio-s-sedan-silver.png"
            ],
            "airConditioned": true,
            "fuelType": "Unknown",
            "baggageCapacity": "1",
            "passengerCapacity": "5",
            "driveType": "Unknown",
            "policies": [],
            "specialEquipment": []
        }
    ],
    "paging": {
        "totalRecords": 153,
        "pageNo": 1,
        "pageSize": 15
    },
    "sessionId": "d26343fa-d6e5-4f7a-a065-18afc0bd749b-CLNXT|1371"
}
   
   service.searchresult.and.callFake(() => {
     return of(response);
   })
   CarTabComponent.searchresult();
   fixture.detectChanges();
   expect(response.carRentals).toEqual(CarTabComponent.finalresult);    
  });

});









// describe('SearchComponent', () => {
//   let component: SearchComponentCar;
//   let fixture: ComponentFixture<SearchComponentCar>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ SearchComponentCar ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(SearchComponentCar);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

