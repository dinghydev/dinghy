import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DRAW_IO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.drawio2;fillColor=#2174CE;gradientColor=#134277',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function DrawIo(props: NodeProps) {
  return <Shape {...DRAW_IO} {...props} _style={extendStyle(DRAW_IO, props)} />
}
