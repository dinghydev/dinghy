import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_LAB = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.virtual_lab;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function VirtualLab(props: NodeProps) {
  return (
    <Shape
      {...VIRTUAL_LAB}
      {...props}
      _style={extendStyle(VIRTUAL_LAB, props)}
    />
  )
}
