document.addEventListener('DOMContentLoaded', function () {
  const tracksList = [
    {
      audioSrc: './tracks/Calmo, Sereno e Tranquilo.mp3',
      coverSrc: './images/Calmoserenoetranquilo.jpg',
      name: 'Calmo, Sereno e Tranquilo',
      desc: 'Terno e Saia',
      id: 0
    },
    {
      audioSrc: './tracks/Colossenses 1.mp3',
      coverSrc: './images/Colossenses1.jpg',
      name: 'Colossenses 1',
      desc: 'Projeto Sola',
      id: 1
    },
    {
      audioSrc: './tracks/Ele é.mp3',
      coverSrc: './images/Elee.jpg',
      name: 'Ele é',
      desc: 'Os Arrais',
      id: 2
    },
    {
      audioSrc: './tracks/Ele Está Comigo.mp3',
      coverSrc: './images/Eleestacomigo.jpg',
      name: 'Ele Está Comigo',
      desc: 'Fernandinho',
      id: 3
    },
    {
      audioSrc: './tracks/Ele Vive.mp3',
      coverSrc: './images/Leonardo.jpg',
      name: 'Ele Vive',
      desc: 'Leonardo Gonçalves',
      id: 4
    },
    {
      audioSrc: './tracks/Esplêndido Amor.mp3',
      coverSrc: './images/Esplendidoamor.jpg',
      name: 'Esplêndido Amor',
      desc: 'Be One Music',
      id: 5
    },
    {
      audioSrc: './tracks/Estamos de Pé.mp3',
      coverSrc: './images/Estamosdepe.jpeg',
      name: 'Estamos de Pé',
      desc: 'Marcus Salles',
      id: 6
    },
    {
      audioSrc: './tracks/Há um Vinho Novo.mp3',
      coverSrc: './images/haumvinhonovo.jpg',
      name: 'Há um Vinho Novo',
      desc: 'Ministério Zoe',
      id: 7
    },
    {
      audioSrc: './tracks/Lapidação.mp3',
      coverSrc: './images/Lapidacao.jpg',
      name: 'Lapidação',
      desc: 'Central Music',
      id: 8
    },
    {
      audioSrc: './tracks/Liberta-me de Mim.mp3',
      coverSrc: './images/Libertamedemin.jpg',
      name: 'Liberta-me de Mim',
      desc: 'Luma Elpídio',
      id: 9
    },
    {
      audioSrc: './tracks/Meu Maior Amor.mp3',
      coverSrc: './images/Meumaioramor.jpg',
      name: 'Meu Maior Amor',
      desc: 'Nívea Soares',
      id: 10
    },
    {
      audioSrc: './tracks/Não Nunca Foi Sobre Nós.mp3',
      coverSrc: './images/Naonuncafoisobrenos.jpg',
      name: 'Nunca Foi Sobre Nós',
      desc: 'Ministério Zoe',
      id: 11
    },
    {
      audioSrc: './tracks/Para Ti Eu Vou.mp3',
      coverSrc: './images/Paratieuvou.jpg',
      name: 'Para Ti Eu Vou',
      desc: 'Central 3',
      id: 12
    },
    {
      audioSrc: './tracks/Poderoso Deus.mp3',
      coverSrc: './images/PoderosoDeus.jpeg',
      name: 'Poderoso Deus',
      desc: 'Cristo Vivo',
      id: 13
    },
    {
      audioSrc: './tracks/Pra Onde Eu Irei.mp3',
      coverSrc: './images/Praondeueirei.jpg',
      name: 'Pra Onde Eu irei ?',
      desc: 'Morada',
      id: 14
    },
    {
      audioSrc: './tracks/Tão Profundo.mp3',
      coverSrc: './images/Taoprofundo.jpeg',
      name: 'Tão Profundo',
      desc: 'Vineyard',
      id: 15
    },
    {
      audioSrc: './tracks/Uma Só Voz.mp3',
      coverSrc: './images/Umasovoz.jpg',
      name: 'Uma Só Voz',
      desc: 'Fernanda Brum',
      id: 16
    },
    {
      audioSrc: './tracks/Só tu és Santo.mp3',
      coverSrc: './images/Sotuessanto.jpg',
      name: 'Só Tu És Santo',
      desc: 'Morada',
      id: 17
    },
    {
      audioSrc: './tracks/Aos pés da Cruz.mp3',
      coverSrc: './images/Aospesdacruz.jpg',
      name: 'Aos Pés da Cruz',
      desc: 'Oficina G3',
      id: 18
    }
  ]

  const currentTrackName = document.querySelector('header h3')
  const currentTrackDesc = document.querySelector('header p')
  const currentTrackCover = document.querySelector('header img')
  const currentTrackAudio = document.querySelector('audio')
  const playPauseBtn = document.querySelector('.event-playPause')
  const muteUnmuteBtn = document.querySelector('.event-muteUnmute')
  const playNextBtn = document.querySelector('.event-next')
  const playPrevBtn = document.querySelector('.event-prev')
  const progress = document.querySelector('.slider-progress')
  const currentTrackTime = document.querySelector('.count-current')
  const finalTrackTime = document.querySelector('.count-final')
  // ADD TRACKS TO MY PLAYLIST ON PAGE LOAD
  ;(function addMyTracksList() {
    for (let track of tracksList) {
      var li = document.createElement('li')
      li.id = track.id
      li.innerHTML = `
                    <div class="track-number">0${track.id}</div>
                    <img
                    src=${track.coverSrc}
                    class="track-img"
                    alt=""
                    />

                    <div class="track-detail">
                    <div class="track-detail_name">${track.name}</div>
                    <div class="track-detail_desc">
                        <small>${track.desc}</small>
                    </div>
                    </div>
        `
      document.querySelector('ul').appendChild(li)
      ;(function (id) {
        li.addEventListener(
          'click',
          () => {
            playSelectedTrack(id)
          },
          false
        )
      })(track.id)
    }
  })()

  let trackId = 0

  const loadTrack = songId => {
    const song = tracksList.find(track => track.id === songId)

    const { audioSrc, coverSrc, name, desc } = song
    currentTrackName.innerText = name
    currentTrackDesc.innerText = desc
    currentTrackAudio.src = audioSrc
    currentTrackCover.src = coverSrc
  }

  const playSelectedTrack = songId => {
    trackId = songId
    loadTrack(songId)
    playTrack()
  }

  loadTrack(trackId)

  const playTrack = () => {
    playPauseBtn.classList.remove('fa-play')
    playPauseBtn.classList.add('fa-pause')

    currentTrackAudio.play()
  }

  const pauseTrack = () => {
    playPauseBtn.classList.remove('fa-pause')
    playPauseBtn.classList.add('fa-play')

    currentTrackAudio.pause()
  }

  const playPrevTrack = () => {
    trackId--

    if (trackId < 0) {
      trackId = tracksList.length - 1
    }
    loadTrack(trackId)
    playTrack()
  }

  const playNextTrack = () => {
    trackId++
    if (trackId > tracksList.length - 1) {
      trackId = 0
    }
    loadTrack(trackId)
    playTrack()
  }

  const updateProgress = () => {
    const currentTime = currentTrackAudio.currentTime
    const trackDuration = currentTrackAudio.duration
    const percent = (currentTime / trackDuration) * 100
    progress.style.width = percent + '%'
    let curMins = Math.floor(currentTime / 60)
    let curSecs = Math.floor(currentTime - curMins * 60)
    let durMins = Math.floor(trackDuration / 60) || '--'
    let durSecs = Math.floor(trackDuration - durMins * 60) || '--'

    if (curMins < 10) {
      curMins = `0${curMins}`
    }
    if (curSecs < 10) {
      curSecs = `0${curSecs}`
    }
    if (durMins < 10) {
      durMins = `0${durMins}`
    }
    if (durSecs < 10) {
      durSecs = `0${durSecs}`
    }

    currentTrackTime.innerText = `${curMins}:${curSecs}`
    finalTrackTime.innerText = `${durMins}:${durSecs}`
  }

  const muteUnmuteTrack = () => {
    if (currentTrackAudio.muted) {
      currentTrackAudio.muted = false
      muteUnmuteBtn.classList.remove('fa-volume-mute')
      muteUnmuteBtn.classList.add('fa-volume-up')
    } else {
      currentTrackAudio.muted = true
      muteUnmuteBtn.classList.remove('fa-volume-up')
      muteUnmuteBtn.classList.add('fa-volume-mute')
    }
  }

  playPauseBtn.addEventListener('click', () => {
    const currentlyPlaying = playPauseBtn.classList.contains('fa-pause')

    currentlyPlaying ? pauseTrack() : playTrack()
  })
  muteUnmuteBtn.addEventListener('click', () => muteUnmuteTrack())

  playPrevBtn.addEventListener('click', () => playPrevTrack())
  playNextBtn.addEventListener('click', () => playNextTrack())

  currentTrackAudio.addEventListener('timeupdate', () => updateProgress())
})
