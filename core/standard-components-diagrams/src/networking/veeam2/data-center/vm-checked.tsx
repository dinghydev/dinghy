import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_CHECKED = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.vm_checked;',
  _width: 36,
  _height: 36,
}

export function VmChecked(props: DiagramNodeProps) {
  return (
    <Shape {...VM_CHECKED} {...props} _style={extendStyle(VM_CHECKED, props)} />
  )
}
