import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MATHOVERFLOW = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.mathoverflow;fillColor=#656463;gradientColor=#F28711;gradientDirection=east',
  },
  _original_width: 59,
  _original_height: 48.2,
}

export function Mathoverflow(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MATHOVERFLOW)} />
}
