import yt_dlp
import os

def Download(link: str) -> str:
    ydl_opts = {
        "windowsfilenames": True,
        'format': 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best',
        'merge_output_format': 'mp4',  
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(link, download=True)        # descarga y retorna metadata
        filepath = ydl.prepare_filename(info)               # arma la ruta final
        filepath = os.path.splitext(filepath)[0] + ".mp4"   # aseguro extensión .mp4
        return filepath


def DownloadOnlyMP4(link: str) -> str:
    ydl_opts = {
        "windowsfilenames": True,
        'format': 'bestvideo[ext=mp4]+bestaudio/best[ext=mp4]', 
        'noplaylist': True,
        'postprocessors': [{
            'key': 'FFmpegVideoRemuxer',
            'preferedformat': 'mp4'
        }]
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(link, download=True)
        filepath = ydl.prepare_filename(info)
        filepath = os.path.splitext(filepath)[0] + ".mp4"
        return filepath


def DownloadOnlyMP3(link: str) -> str:
    ydl_opts = {
        "windowsfilenames": True,
        "format": "bestaudio/best",
        
        "noplaylist": True
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(link, download=True)
        filepath = ydl.prepare_filename(info)  # mantiene la extensión original
        return filepath

def CentroDescargas(formato, link: str) -> str:
    if(formato == "full"):
        return Download(link)
    if(formato == "mp4"):
        return DownloadOnlyMP4(link)
    if(formato == "mp3"):
        return DownloadOnlyMP3(link)