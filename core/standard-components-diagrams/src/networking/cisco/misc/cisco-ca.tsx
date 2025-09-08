import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_CA = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.cisco_ca;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 83,
  _original_height: 67,
}

export function CiscoCa(props: DiagramNodeProps) {
  return (
    <Shape {...CISCO_CA} {...props} _style={extendStyle(CISCO_CA, props)} />
  )
}
