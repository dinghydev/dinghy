import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NEXUS_7000 = {
  _style:
    'shape=mxgraph.cisco.misc.nexus_7000;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 51,
  _height: 69,
}

export function Nexus7000(props: DiagramNodeProps) {
  return (
    <Shape {...NEXUS_7000} {...props} _style={extendStyle(NEXUS_7000, props)} />
  )
}
