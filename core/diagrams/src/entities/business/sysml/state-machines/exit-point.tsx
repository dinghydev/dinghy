import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXIT_POINT = {
  _style: {
    entity:
      'shape=mxgraph.sysml.flowFinal;labelPosition=right;verticalLabelPosition=top;spacingTop=5;spacingLeft=3;align=left;verticalAlign=top;resizable=0;html=1;',
  },
  _width: 0,
  _height: 20,
}

export function ExitPoint(props: NodeProps) {
  return (
    <Shape {...EXIT_POINT} {...props} _style={extendStyle(EXIT_POINT, props)} />
  )
}
