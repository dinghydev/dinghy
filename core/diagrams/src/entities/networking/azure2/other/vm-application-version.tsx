import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VM_APPLICATION_VERSION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/VM_Application_Version.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function VmApplicationVersion(props: DiagramNodeProps) {
  return (
    <Shape
      {...VM_APPLICATION_VERSION}
      {...props}
      _style={extendStyle(VM_APPLICATION_VERSION, props)}
    />
  )
}
