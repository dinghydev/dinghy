import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VM_LINUX = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/VM_Linux.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 46,
}

export function VmLinux(props: DiagramNodeProps) {
  return (
    <Shape {...VM_LINUX} {...props} _style={extendStyle(VM_LINUX, props)} />
  )
}
