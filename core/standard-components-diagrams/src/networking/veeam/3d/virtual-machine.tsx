import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_MACHINE = {
  _style:
    'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.virtual_machine;',
  _width: 46,
  _height: 46,
}

export function VirtualMachine(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_MACHINE} {...props} />
}
