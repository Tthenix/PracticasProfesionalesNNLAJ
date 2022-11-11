from flask import Flask, jsonify, request

app = Flask(__name__)

from plantas import plantas

@app.route('/plantas')
def getPlantas():
    return jsonify({"plantas": plantas, "message": "Products List"})

@app.route('/plantas/<string:plantas_nombre>')
def getNombre(plantas_nombre):
    [nombre for nombre in plantas]
    PlantasFound = [nombre for nombre in plantas if plantas['nombre'] == plantas_nombre]
    if (len(PlantasFound) > 0):
        return jsonify({"product": PlantasFound[0]})
    return jsonify ({"producto": "Planta no encontrada"})


@app.route('/products', methods=['POST'])
def AddProduct():
    newProduct = {
        "nombre": request.json['nombre'],
        "humedad": request.json['humedad'],
        "clima": request.json['clima'],
        "temperatura": request.json['temperatura'],
    }
    plantas.append(newProduct)
    return jsonify({"message": "Producto añadido efectivamente", "Products": plantas})

@app.route("/plantas/<string:plantas_nombre>", methods=['PUT'])
def editProduct(plantas_nombre):
    productFound = [nombre for nombre in plantas if plantas['nombre'] == plantas_nombre]
    if(len(productFound) > 0):
        productFound[0]['nombre'] = request.json['nombre'],
        productFound[0]['humedad'] = request.json['humedad'],
        productFound[0]['clima'] = request.json['clima'],
        productFound[0]['temperatura'] = request.json['temperatura'],
        return jsonify({
            "message":"producto actualizado",
            "product": productFound[0]
        })
        return jsonify({"message":"producto no encontrado"})

@app.route("/plantas/<string:plantas_nombre>", methods=['DELETE'])
def deleteProduct(plantas_nombre):
    productFound = [nombre for nombre in plantas if plantas['nombre'] == plantas_nombre]
    if (len(productFound) > 0):
        plantas.remove(productFound)
        return jsonify({
            "message":"Producto eliminado",
            "productos":plantas
        })
        return jsonify({"message":"Producto no encontrado"})

if __name__=='__main__':
    app.run(debug=True, port=4000)