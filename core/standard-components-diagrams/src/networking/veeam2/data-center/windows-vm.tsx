import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WINDOWS_VM = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.windows_vm;',
  _width: 36,
  _height: 36,
}

export function WindowsVm(props: DiagramNodeProps) {
  return (
    <Shape {...WINDOWS_VM} {...props} _style={extendStyle(WINDOWS_VM, props)} />
  )
}
