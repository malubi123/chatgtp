import requests
from bs4 import BeautifulSoup

def scrape_chatgpt_data(prompt):
    # Zamień poniższy URL na URL, z którego będziesz scrapować dane
    url = "https://example.com/chatgpt"
    
    # Przygotuj dane do wysłania
    data = {
        'query': prompt
    }
    
    # Wykonaj zapytanie POST lub GET w zależności od strony
    response = requests.post(url, data=data)  # lub requests.get(url, params=data) jeśli GET
    
    # Sprawdź, czy zapytanie zakończyło się sukcesem
    if response.status_code != 200:
        return "Błąd pobierania danych"
    
    # Parsowanie HTML
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Znajdź element z odpowiedzią
    # Zamień selektor na odpowiedni do struktury strony
    response_element = soup.find('div', class_='response-class')
    
    if response_element:
        return response_element.text.strip()
    else:
        return "Brak odpowiedzi"
