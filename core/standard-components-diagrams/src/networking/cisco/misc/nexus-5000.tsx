import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NEXUS_5000 = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.nexus_5000;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 101,
  _original_height: 50,
}

export function Nexus5000(props: DiagramNodeProps) {
  return (
    <Shape {...NEXUS_5000} {...props} _style={extendStyle(NEXUS_5000, props)} />
  )
}
