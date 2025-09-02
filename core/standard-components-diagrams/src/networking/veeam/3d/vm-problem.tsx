import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_PROBLEM = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.vm_problem;',
  },
  _original_width: 56,
  _original_height: 46,
}

export function VmProblem(props: DiagramNodeProps) {
  return (
    <Shape {...VM_PROBLEM} {...props} _style={extendStyle(VM_PROBLEM, props)} />
  )
}
