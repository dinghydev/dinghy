import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LINUX_VM = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.linux_vm;',
  },
  _original_width: 36,
  _original_height: 36,
}

export function LinuxVm(props: NodeProps) {
  return (
    <Shape {...LINUX_VM} {...props} _style={extendStyle(LINUX_VM, props)} />
  )
}
