import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARROW_NW = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.arrowNW;fillColor=#000000;aspect=fixed;',
  },
  _width: 45.5,
  _height: 26,
}

export function ArrowNw(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ARROW_NW)} />
}
