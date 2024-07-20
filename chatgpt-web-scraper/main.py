from scraper import scrape_chatgpt_data

def main():
    print("Witaj! Rozmawiaj ze mną, wpisując 'exit' aby zakończyć.")
    while True:
        user_input = input("Ty: ")
        if user_input.lower() == 'exit':
            print("Do zobaczenia!")
            break
        
        # Pobieranie danych o ChatGPT
        response = scrape_chatgpt_data(user_input)
        print(f"ChatGPT: {response}")

if __name__ == "__main__":
    main()
