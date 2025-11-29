import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GOOGLE_PLAY = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.google_play;fillColor=#000000',
  },
  _width: 69.4,
  _height: 20.6,
}

export function GooglePlay(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GOOGLE_PLAY)} />
}
