from flask import Flask, render_template, request, redirect, url_for, session, flash
import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'harambee_2027_secure_key'

ADMIN_USER = "admin"
ADMIN_PASS_HASH = generate_password_hash("Harambee2027!")

def get_db_connection():
    conn = sqlite3.connect('campaign.db')
    conn.row_factory = sqlite3.Row
    return conn

# --- ADMIN SYSTEM ROUTES ---

@app.route('/admin/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username == ADMIN_USER and check_password_hash(ADMIN_PASS_HASH, password):
            session['logged_in'] = True
            return redirect(url_for('admin_dashboard'))
    return '''
        <div style="max-width:320px; margin:120px auto; font-family:'Segoe UI',sans-serif; padding:30px; box-shadow:0 10px 25px rgba(0,0,0,0.1); border-radius:12px; background:#fff;">
            <h2 style="color:#1e293b; margin-bottom:20px; font-weight:700; text-align:center;">Harambee Hub</h2>
            <form method="post" style="display:flex; flex-direction:column; gap:15px;">
                <input type="text" name="username" placeholder="Username" style="padding:12px; border:1px solid #cbd5e1; border-radius:6px;" required>
                <input type="password" name="password" placeholder="Password" style="padding:12px; border:1px solid #cbd5e1; border-radius:6px;" required>
                <button type="submit" style="padding:12px; background:#2563eb; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;">Login to Dashboard</button>
            </form>
        </div>
    '''

@app.route('/admin')
def admin_dashboard():
    if not session.get('logged_in'):
        return redirect(url_for('login'))
        
    conn = get_db_connection()
    feedbacks = conn.execute('SELECT * FROM feedback ORDER BY date_submitted DESC').fetchall()
    ads = conn.execute('SELECT * FROM ads').fetchall()
    locations = conn.execute('SELECT * FROM campus_guide ORDER BY category, location_name').fetchall()
    conn.close()
    
    return render_template('admin_dashboard.html', feedbacks=feedbacks, ads=ads, locations=locations)

# --- NEW: ADD AD ROUTE ---
@app.route('/admin/add-ad', methods=['POST'])
def add_ad():
    if not session.get('logged_in'): return redirect(url_for('login'))
    
    biz_name = request.form.get('business_name')
    img_url = request.form.get('image_url')
    wa_link = request.form.get('wa_link')
    
    if biz_name and img_url and wa_link:
        conn = get_db_connection()
        conn.execute('INSERT INTO ads (business_name, image_url, wa_link) VALUES (?, ?, ?)', 
                     (biz_name, img_url, wa_link))
        conn.commit()
        conn.close()
    return redirect(url_for('admin_dashboard'))

# --- NEW: REMOVE AD ROUTE ---
@app.route('/admin/delete-ad/<int:id>')
def delete_ad(id):
    if not session.get('logged_in'): return redirect(url_for('login'))
    conn = get_db_connection()
    conn.execute('DELETE FROM ads WHERE id = ?', (id,))
    conn.commit()
    conn.close()
    return redirect(url_for('admin_dashboard'))

@app.route('/admin/delete-feedback/<int:id>')
def delete_feedback(id):
    if not session.get('logged_in'): return redirect(url_for('login'))
    conn = get_db_connection()
    conn.execute('DELETE FROM feedback WHERE id = ?', (id,))
    conn.commit()
    conn.close()
    return redirect(url_for('admin_dashboard'))

@app.route('/admin/logout')
def logout():
    session.pop('logged_in', None)
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)