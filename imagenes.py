import os
from PIL import Image

def convertir_a_webp(carpeta):
    # Asegurarse de que la carpeta existe
    if not os.path.isdir(carpeta):
        print(f"La carpeta '{carpeta}' no existe.")
        return

    # Iterar por los archivos en la carpeta
    for archivo in os.listdir(carpeta):
        # Obtener la ruta completa del archivo
        ruta_archivo = os.path.join(carpeta, archivo)

        # Verificar si es un archivo y si tiene una extensión válida
        if os.path.isfile(ruta_archivo) and archivo.lower().endswith(('.png', '.jpg', '.jpeg')):
            # Cargar la imagen con Pillow
            try:
                img = Image.open(ruta_archivo).convert('RGB')  # Convertir a RGB para compatibilidad con WebP
                # Crear el nuevo nombre con extensión .webp
                nombre_sin_ext, _ = os.path.splitext(archivo)
                nuevo_nombre = f"{nombre_sin_ext}.webp"
                ruta_nueva = os.path.join(carpeta, nuevo_nombre)
                # Guardar la imagen como .webp
                img.save(ruta_nueva, 'webp')
                print(f"Convertido: {archivo} -> {nuevo_nombre}")
            except Exception as e:
                print(f"Error al convertir {archivo}: {e}")

# Ruta de la carpeta donde se encuentran las imágenes
carpeta = r"C:\Users\Jofiel\Desktop\inmobiliaria\vendidos"  # Usar una cadena sin formato
convertir_a_webp(carpeta)
