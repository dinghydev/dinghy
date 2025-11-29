import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLANGE_IN = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.flange_in;pointerEvents=1;',
  },
  _width: 10,
  _height: 20,
}

export function FlangeIn(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FLANGE_IN)} />
}
