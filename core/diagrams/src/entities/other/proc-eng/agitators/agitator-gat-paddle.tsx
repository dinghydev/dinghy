import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AGITATOR_GAT_PADDLE = {
  _style: {
    entity:
      'shape=mxgraph.pid.agitators.agitator_(gat_paddle);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 80,
  _height: 120,
}

export function AgitatorGatPaddle(props: NodeProps) {
  return (
    <Shape
      {...AGITATOR_GAT_PADDLE}
      {...props}
      _style={extendStyle(AGITATOR_GAT_PADDLE, props)}
    />
  )
}
