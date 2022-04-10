# -*- coding: utf-8 -*-
"""
Created on Sun Apr 10 10:15:57 2022

@author: prave
"""

import pytube
SAVE_PATH = "B:\\"
link = "https://www.youtube.com/watch?v=mDgEqoQUBgk"
yt = pytube.YouTube(link)
#yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution')[-1].download()
video = yt.streams.get_highest_resolution()
print(video.title)
video.download()