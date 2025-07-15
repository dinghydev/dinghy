import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECURE_VIRTUAL_MACHINE = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.secure_virtual_machine',
  _width: 50,
  _height: 38,
}

export function SecureVirtualMachine(props: DiagramNodeProps) {
  return <Shape {...SECURE_VIRTUAL_MACHINE} {...props} />
}
