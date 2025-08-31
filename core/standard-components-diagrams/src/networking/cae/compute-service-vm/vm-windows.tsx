import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_WINDOWS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/VirtualMachineWindows.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 46,
}

export function VmWindows(props: DiagramNodeProps) {
  return (
    <Shape {...VM_WINDOWS} {...props} _style={extendStyle(VM_WINDOWS, props)} />
  )
}
