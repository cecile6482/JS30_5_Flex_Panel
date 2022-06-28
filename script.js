const panels = document.querySelectorAll('.panel')

    const togglePanel = (p, e) => {
      p.classList.toggle('open');
    }

    const toggleText = (p, e) => {
      if (e.propertyName.includes('flex')) p.classList.toggle('open-active');
    }

    panels.forEach(panel => {
      panel.addEventListener('click', togglePanel.bind(null, panel))
      panel.addEventListener('transitionend', toggleText.bind(null, panel))
    })