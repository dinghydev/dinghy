import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RSS = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.rss;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 99,
}

export function Rss(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RSS)} />
}
