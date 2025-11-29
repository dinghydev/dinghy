import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MICROWEBSERVER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.servers.microwebserver;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 77,
  _height: 51,
}

export function Microwebserver(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MICROWEBSERVER)} />
}
