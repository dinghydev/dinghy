import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VM_GROUP = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.vm_group;',
  _width: 49.5,
  _height: 50,
}

export function VmGroup(props: DiagramNodeProps) {
  return <Shape {...VM_GROUP} {...props} />
}
