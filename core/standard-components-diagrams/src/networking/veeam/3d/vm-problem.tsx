import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_PROBLEM = {
  _style:
    'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.vm_problem;',
  _width: 56,
  _height: 46,
}

export function VmProblem(props: DiagramNodeProps) {
  return (
    <Shape {...VM_PROBLEM} {...props} _style={extendStyle(VM_PROBLEM, props)} />
  )
}
