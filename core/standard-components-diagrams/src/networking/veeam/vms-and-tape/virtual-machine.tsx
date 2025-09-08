import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIRTUAL_MACHINE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.virtual_machine;',
  },
  _original_width: 44.8,
  _original_height: 44,
}

export function VirtualMachine(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_MACHINE}
      {...props}
      _style={extendStyle(VIRTUAL_MACHINE, props)}
    />
  )
}
