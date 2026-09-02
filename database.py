import sqlite3

def init_db():
    conn = sqlite3.connect('campaign.db')
    cursor = conn.cursor()
    
    # 1. Table for Anonymous Student Feedback
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS feedback (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            message TEXT NOT NULL,
            date_submitted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            status TEXT DEFAULT 'Pending'
        )
    ''')
    
    # 2. Table for Ad Spaces
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS ads (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            business_name TEXT NOT NULL,
            image_url TEXT NOT NULL,
            wa_link TEXT NOT NULL,
            is_active INTEGER DEFAULT 1
        )
    ''')
    
    # 3. Table for Campus Guide Locations
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS campus_guide (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            location_name TEXT NOT NULL,
            category TEXT NOT NULL,
            description TEXT
        )
    ''')
    
    conn.commit()
    conn.close()

if __name__ == '__main__':
    init_db()
    print("Database initialized successfully!")