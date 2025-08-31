import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLUG = {
  _style:
    'image;html=1;image=img/lib/clip_art/general/Plug_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Plug(props: DiagramNodeProps) {
  return <Shape {...PLUG} {...props} _style={extendStyle(PLUG, props)} />
}
