import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VM_LINUX_NON_AZURE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/VM_Linux_Non_Azure.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 46,
}

export function VmLinuxNonAzure(props: DiagramNodeProps) {
  return (
    <Shape
      {...VM_LINUX_NON_AZURE}
      {...props}
      _style={extendStyle(VM_LINUX_NON_AZURE, props)}
    />
  )
}
