import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ENDPOINT_MANAGEMENT = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.endpoint_management;',
  },
  _width: 50,
  _height: 38.295,
}

export function EndpointManagement(props: NodeProps) {
  return (
    <Shape
      {...ENDPOINT_MANAGEMENT}
      {...props}
      _style={extendStyle(ENDPOINT_MANAGEMENT, props)}
    />
  )
}
