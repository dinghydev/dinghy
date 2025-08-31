import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_FAILED = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.vm_failed;',
  _width: 36,
  _height: 36,
}

export function VmFailed(props: DiagramNodeProps) {
  return (
    <Shape {...VM_FAILED} {...props} _style={extendStyle(VM_FAILED, props)} />
  )
}
