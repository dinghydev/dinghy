import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_APPLICATION_VERSION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/VM_Application_Version.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
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
