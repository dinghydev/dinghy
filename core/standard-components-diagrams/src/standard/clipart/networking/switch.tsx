import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWITCH = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Switch_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Switch(props: DiagramNodeProps) {
  return <Shape {...SWITCH} {...props} _style={extendStyle(SWITCH, props)} />
}
