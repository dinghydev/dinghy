import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_WORKS = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.cisco_works;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 85,
  _original_height: 67,
}

export function CiscoWorks(props: NodeProps) {
  return (
    <Shape
      {...CISCO_WORKS}
      {...props}
      _style={extendStyle(CISCO_WORKS, props)}
    />
  )
}
