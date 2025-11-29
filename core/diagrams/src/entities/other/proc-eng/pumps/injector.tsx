import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INJECTOR = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.injector;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 80,
  _height: 40,
}

export function Injector(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INJECTOR)} />
}
