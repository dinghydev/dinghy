import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NETWORK = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.network;',
  },
  _original_width: 34,
  _original_height: 57,
}

export function Network(props: DiagramNodeProps) {
  return <Shape {...NETWORK} {...props} _style={extendStyle(NETWORK, props)} />
}
