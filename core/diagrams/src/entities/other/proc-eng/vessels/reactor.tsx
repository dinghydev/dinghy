import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REACTOR = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.reactor;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 40,
  _height: 95,
}

export function Reactor(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, REACTOR)} />
}
