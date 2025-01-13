from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('main.html')

@app.route('/about')
def about():
    return render_template('aboutUs.html')

@app.route('/csr')
def csr():
    return render_template('csr.html')

@app.route('/products')
def products():
    return render_template('products.html')

@app.route('/contact')
def contact():
    return render_template('contactUs.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
