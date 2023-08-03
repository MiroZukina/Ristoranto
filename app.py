from flask import Flask, render_template,request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/food_menu')
def food_menu():
    return render_template('food_menu.html')

@app.route('/drink_menu')
def drink_menu():
    return render_template('drink_menu.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/submit', methods=['POST'])
def submit_form():
    if request.method == 'POST':
        name = request.form['name']
        second_name = request.form['secondName']
        email = request.form['email']
        number = request.form['number']
        message = request.form['message']
        return render_template('contact.html', name=name, second_name=second_name, email=email, number=number, message=message)

if __name__ == '__main__':
    app.run(debug=True)
