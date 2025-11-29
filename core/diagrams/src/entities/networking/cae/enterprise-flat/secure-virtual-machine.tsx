import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SECURE_VIRTUAL_MACHINE = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.secure_virtual_machine',
  },
  _width: 50,
  _height: 38,
}

export function SecureVirtualMachine(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, SECURE_VIRTUAL_MACHINE)} />
  )
}
