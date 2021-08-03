import os
import requests
from apscheduler.schedulers.background import BackgroundScheduler
from flask import Flask, request
from flask_cors import CORS

exchange_rate = 0
group_data = []

# os.environ['TZ'] = "UTC"


def create_app():
    app = Flask(__name__)
    CORS(app)

    @app.route('/group/feed')
    def group_feed():
        return group_data

    @app.route('/calculate')
    def calculate_import_fees():
        car_price = float(request.args.get('car_price')) * (2 - exchange_rate)
        container_price = 1050
        customs = car_price * .1
        inner_transport = 650
        tax_percentage = .2
        documentation_and_service = .15

        taxable = car_price + container_price + inner_transport
        tax = taxable * tax_percentage
        service = (tax + taxable + customs) * documentation_and_service
        total = taxable + tax + customs + service

        return {
            'car_price': int(car_price),
            'container_price': int(container_price),
            'customs': int(customs),
            'inner_transport': int(inner_transport),
            'tax': int(tax),
            'service': int(service if service >= 1500 else 1500),
            'total': int(total)
        }

    #       Konteinerihind 1050€
    #       Toll 10%
    #       Sisetransport 650€
    #       Käibemaks 20% (kogusummast va. toll)
    #       Kogusummale veel +5% dokumentatsioon ja teenus
    #       Kursiteisendus läbi api reaalajas, kui ei saa siis *0.87
    #       Teenustasu 15% kogumaksumusest aga mitte alla 1500

    return app


def get_exchange_rate():
    print('Getting exchange rate from European Central Bank', end="\n")
    response = requests.get(
        'https://sdw-wsrest.ecb.europa.eu/service/data/EXR/D.USD.EUR.SP00.A?lastNObservations=1&detail=dataonly&dimensionAtObservation=AllDimensions',
        headers={"accept": "application/vnd.sdmx.data+json;version=1.0.0-wd"}
    )
    global exchange_rate
    exchange_rate = response.json()['dataSets'][0]['observations']['0:0:0:0:0:0'][0]


# def read_creds(filename):
#     with open(filename) as f:
#         credentials = json.load(f)
#     return credentials
#
#
# credentials = read_creds('credentials.json')
#
#
# def get_facebook_group_info():
#     print('Getting facebook group info', end="\n")
#
#     global group_data
#     group_data = []
#
#     graph = GraphAPI(access_token=credentials['access_token'])
#     feed = graph.get_connections("936196607133079", "feed")
#     print("Test")
#
#     for post in feed:
#         image = post.get("images")
#         lines = post.get("name").splitlines()
#         group_data.append({
#             'car_name': lines[0],
#             'car_price': lines[1],
#             'car_image': image
#         })


if __name__ == '__main__':
    app = create_app()
    app.run()

get_exchange_rate()
# get_facebook_group_info()

sched = BackgroundScheduler(daemon=True)
sched.add_job(get_exchange_rate, 'interval', hours=1)
# sched.add_job(get_facebook_group_info, 'interval', hours=1)
sched.start()
