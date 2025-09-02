import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ETHERNET = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.ethernet;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 48,
}

export function Ethernet(props: DiagramNodeProps) {
  return (
    <Shape {...ETHERNET} {...props} _style={extendStyle(ETHERNET, props)} />
  )
}
