import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANTIVIRUS = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Antivirus_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Antivirus(props: DiagramNodeProps) {
  return (
    <Shape {...ANTIVIRUS} {...props} _style={extendStyle(ANTIVIRUS, props)} />
  )
}
