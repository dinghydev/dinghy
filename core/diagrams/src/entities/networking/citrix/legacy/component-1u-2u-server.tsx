import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPONENT_1U_2U_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.1u_2u_server;',
  },
  _width: 100,
  _height: 39.1,
}

export function Component1u2uServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_1U_2U_SERVER}
      {...props}
      _style={extendStyle(COMPONENT_1U_2U_SERVER, props)}
    />
  )
}
