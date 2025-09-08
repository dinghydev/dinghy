import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PC_SOFTWARE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.pc_software;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 91,
  _original_height: 86,
}

export function PcSoftware(props: DiagramNodeProps) {
  return (
    <Shape
      {...PC_SOFTWARE}
      {...props}
      _style={extendStyle(PC_SOFTWARE, props)}
    />
  )
}
