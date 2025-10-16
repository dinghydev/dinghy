import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MAP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.misc.map;',
  },
  _original_width: 250,
  _original_height: 250,
}

export function Map(props: DiagramNodeProps) {
  return <Shape {...MAP} {...props} _style={extendStyle(MAP, props)} />
}
