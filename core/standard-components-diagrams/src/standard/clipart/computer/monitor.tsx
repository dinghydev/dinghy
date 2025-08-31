import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MONITOR = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Monitor_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Monitor(props: DiagramNodeProps) {
  return <Shape {...MONITOR} {...props} _style={extendStyle(MONITOR, props)} />
}
