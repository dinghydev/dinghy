import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETSONAR = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.netsonar;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 66,
  _original_height: 45,
}

export function Netsonar(props: DiagramNodeProps) {
  return (
    <Shape {...NETSONAR} {...props} _style={extendStyle(NETSONAR, props)} />
  )
}
