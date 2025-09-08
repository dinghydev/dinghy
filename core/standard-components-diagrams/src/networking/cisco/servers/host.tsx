import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HOST = {
  _style: {
    entity:
      'shape=mxgraph.cisco.servers.host;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 104,
  _original_height: 51,
}

export function Host(props: DiagramNodeProps) {
  return <Shape {...HOST} {...props} _style={extendStyle(HOST, props)} />
}
