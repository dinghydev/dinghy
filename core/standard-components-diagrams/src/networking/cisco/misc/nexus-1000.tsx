import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NEXUS_1000 = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.nexus_1000;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 90,
  _height: 64,
}

export function Nexus1000(props: DiagramNodeProps) {
  return (
    <Shape {...NEXUS_1000} {...props} _style={extendStyle(NEXUS_1000, props)} />
  )
}
