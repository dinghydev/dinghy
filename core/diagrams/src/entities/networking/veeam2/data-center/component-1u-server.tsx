import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_1U_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.1u_server;',
  },
  _width: 40,
  _height: 11,
}

export function Component1uServer(props: NodeProps) {
  return (
    <Shape
      {...COMPONENT_1U_SERVER}
      {...props}
      _style={extendStyle(COMPONENT_1U_SERVER, props)}
    />
  )
}
