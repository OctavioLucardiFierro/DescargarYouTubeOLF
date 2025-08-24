from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import DescargarVideos

app = Flask(__name__)
CORS(app)

@app.route("/descargar", methods=["POST"])
def descargar():
    data = request.get_json()
    link = data.get("link")
    formato = data.get("formato")

    if not formato:
        return jsonify({"Falta el formato"}), 400

    if not link:
        return jsonify({"status": "error", "mensaje": "Falta el link"}), 400

    try:
        print(formato)
        filepath = DescargarVideos.CentroDescargas(formato, link)
        return send_file(filepath, as_attachment=True)
    except Exception as e:
        return jsonify({"status": "error", "mensaje": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)
