import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ENTERPRISE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.enterprise;pointerEvents=1;',
  },
  _width: 30,
  _height: 50,
}

export function Enterprise(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ENTERPRISE)} />
}
