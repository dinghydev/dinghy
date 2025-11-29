import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ERROR_DASHED_3 = {
  _style: {
    entity:
      'endArrow=none;html=1;strokeColor=#d20a0a;bendable=1;rounded=0;endFill=0;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=none;startFill=0;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;dashed=1;strokeWidth=1.5;',
  },
  _width: 120,
  _height: 0,
}

export function ErrorDashed3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ERROR_DASHED_3)} />
}
