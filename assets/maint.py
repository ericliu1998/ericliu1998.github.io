from collections import defaultdict
import collections
import pprint


def get_maint_task(miles: int):
    miles_list = [5]

    while miles_list[-1] < miles // 1000:
        miles_list.append(miles_list[-1] + 5)

    miles_list.append(miles_list[-1] + 5)
    print(miles_list)

    miles_dict = collections.defaultdict(list)

    for miles in miles_list:

        # every 5k
        miles_dict[miles].append(
            "(FROM 5K) Tires rotated. Inspect: Fluid levels, Wiper blades, Brake linings/drums, Brake pads/discs"
        )

        # every 10k
        if miles % 10 == 0:
            miles_dict[miles].append(
                "(FROM 10K) Replace cabin air filter. Replace engine oil and filter."
            )

        # every 15k
        if miles % 15 == 0:
            miles_dict[miles].append(
                "(FROM 15K) Inspect: Ball joints and dust covers, Brake lines and hoses, Drive shaft boots, Engine coolant, Exhaust pipes and mountings, Radiator and condenser, Steering gear, linkage, and boots."
            )

        # every 30k
        if miles % 30 == 0:
            miles_dict[miles].append(
                "(FROM 30K) Inspect: Automatic transmission oil cooler hoses and connections, Automatic transmission for signs of leakage, Fuel lines and connections, Fuel tank band, vapor vent system hoses, and cap gasket, This is also when you’ll want to replace the engine air filter in your Camry."
            )

        # every 60k

        if miles % 60 == 0:
            miles_dict[miles].append("(FROM 60K) Inspect drive belt.")

        if miles > 60:
            if (miles - 60) % 15:
                miles_dict[miles].append(
                    "(FROM EVERY 15K AFTER 60K) Inspect drive belt."
                )

        if miles % 120 == 0:
            miles_dict[miles].append(
                "(FROM 120K) Replace spark plugs. Inspect their vacuum pump for the brake booster at this time, replacing if necessary. Replace the coolant"
            )

    pprint.pp(miles_dict)

    miles_dict_keys = list(miles_dict.keys())

    ret_dict = {}

    for key in reversed(miles_dict_keys):

        if len(ret_dict) < 100:
            ret_dict[key] = miles_dict[key]
        else:
            break

    return dict(sorted(ret_dict.items()))


pprint.pp(get_maint_task(35000))
