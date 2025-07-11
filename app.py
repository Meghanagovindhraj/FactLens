from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline

app = Flask(__name__)
CORS(app)  # Enables Cross-Origin Requests

# Load the AI model for fake article detection
print("Loading the model...")
fake_news_detector = pipeline("text-classification", model="bhadresh-savani/distilbert-base-uncased-fake-news")
print("Model loaded successfully!")

@app.route('/analyze', methods=['POST'])
def analyze_article():
    # Get JSON data from request
    data = request.json
    article = data.get('article', '')

    if not article:
        return jsonify({'error': 'No article provided!'}), 400

    # Predict if the article is fake or real
    result = fake_news_detector(article)
    prediction = result[0]['label']
    confidence = result[0]['score']

    return jsonify({'prediction': prediction, 'confidence': confidence})

if __name__ == '__main__':
    app.run(debug=True)
