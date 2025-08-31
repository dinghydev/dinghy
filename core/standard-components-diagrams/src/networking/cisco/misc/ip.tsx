import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IP = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.ip;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 64,
  _height: 72,
}

export function Ip(props: DiagramNodeProps) {
  return <Shape {...IP} {...props} _style={extendStyle(IP, props)} />
}
