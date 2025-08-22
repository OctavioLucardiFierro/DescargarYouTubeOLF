from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import DescargarVideos
import os

app = Flask(__name__)
CORS(app)  # permite llamadas desde frontend distinto (localhost:3000 por ejemplo)

@app.route("/descargar", methods=["POST"])
def descargar():
    data = request.get_json()
    link = data.get("link")

    if not link:
        return jsonify({"status": "error", "mensaje": "Falta el link"}), 400

    try:
        # Descargar y obtener la ruta del archivo final
        filepath = DescargarVideos.Download(link)

        # En vez de solo responder JSON, devolvemos el archivo
        return send_file(filepath, as_attachment=True)
    except Exception as e:
        return jsonify({"status": "error", "mensaje": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)
