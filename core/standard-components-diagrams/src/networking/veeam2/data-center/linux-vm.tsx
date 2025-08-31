import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LINUX_VM = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.linux_vm;',
  },
  _width: 36,
  _height: 36,
}

export function LinuxVm(props: DiagramNodeProps) {
  return (
    <Shape {...LINUX_VM} {...props} _style={extendStyle(LINUX_VM, props)} />
  )
}
