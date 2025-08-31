import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MODEM = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Modem_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Modem(props: DiagramNodeProps) {
  return <Shape {...MODEM} {...props} _style={extendStyle(MODEM, props)} />
}
