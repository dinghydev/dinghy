import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKSTATION = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Workstation_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Workstation(props: DiagramNodeProps) {
  return (
    <Shape
      {...WORKSTATION}
      {...props}
      _style={extendStyle(WORKSTATION, props)}
    />
  )
}
