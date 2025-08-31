import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETWORK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Network_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Network(props: DiagramNodeProps) {
  return <Shape {...NETWORK} {...props} _style={extendStyle(NETWORK, props)} />
}
