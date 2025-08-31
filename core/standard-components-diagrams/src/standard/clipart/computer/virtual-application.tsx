import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_APPLICATION = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Virtual_Application_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function VirtualApplication(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_APPLICATION}
      {...props}
      _style={extendStyle(VIRTUAL_APPLICATION, props)}
    />
  )
}
