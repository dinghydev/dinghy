import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONNECTORS = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.connectors',
  },
  _width: 50,
  _height: 34,
}

export function Connectors(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONNECTORS)} />
}
