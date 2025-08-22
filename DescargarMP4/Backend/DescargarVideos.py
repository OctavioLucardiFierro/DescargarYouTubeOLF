import yt_dlp

def Download(link: str):
    ydl_opts = {
        "windowsfilenames": True,  # 👈 fuerza nombres compatibles con Windows
        'format': 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best',
        'merge_output_format': 'mp4',
        'outtmpl': 'downloads/%(title).%(ext)s'
    }
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([link])
        
      

