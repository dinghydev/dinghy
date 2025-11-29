import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AGITATOR_DISC = {
  _style: {
    entity:
      'shape=mxgraph.pid.agitators.agitator_(disc);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 80,
  _height: 135,
}

export function AgitatorDisc(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AGITATOR_DISC)} />
}
