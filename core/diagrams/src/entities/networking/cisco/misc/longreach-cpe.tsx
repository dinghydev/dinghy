import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LONGREACH_CPE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.longreach_cpe;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 61,
  _original_height: 59,
}

export function LongreachCpe(props: NodeProps) {
  return (
    <Shape
      {...LONGREACH_CPE}
      {...props}
      _style={extendStyle(LONGREACH_CPE, props)}
    />
  )
}
