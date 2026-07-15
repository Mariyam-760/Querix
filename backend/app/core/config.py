from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

class Settings:
    APP_NAME = "Querix API"
    APP_VERSION = "1.0.0"

    DB_HOST = os.getenv("DB_HOST")
    DB_PORT = os.getenv("DB_PORT")
    DB_USER = os.getenv("DB_USER")
    DB_PASSWORD = os.getenv("DB_PASSWORD")
    DB_NAME = os.getenv("DB_NAME")

settings = Settings()