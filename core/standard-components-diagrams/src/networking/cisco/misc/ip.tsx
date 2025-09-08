import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IP = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.ip;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 64,
  _original_height: 72,
}

export function Ip(props: DiagramNodeProps) {
  return <Shape {...IP} {...props} _style={extendStyle(IP, props)} />
}
