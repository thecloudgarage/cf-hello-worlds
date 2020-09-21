import os
from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hi there you are seeing a Python/Flask app running as a OCI compliant container on Tanzu Platform!'


port = os.getenv('PORT', '5000')
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=int(port))
