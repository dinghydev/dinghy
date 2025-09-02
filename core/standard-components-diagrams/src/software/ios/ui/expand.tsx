import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXPAND = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.expand;fillColor=#c0c0c0;',
  },
  _original_width: 24,
  _original_height: 6,
}

export function Expand(props: DiagramNodeProps) {
  return <Shape {...EXPAND} {...props} _style={extendStyle(EXPAND, props)} />
}
