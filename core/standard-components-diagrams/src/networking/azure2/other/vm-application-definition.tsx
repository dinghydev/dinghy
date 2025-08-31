import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_APPLICATION_DEFINITION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/VM_Application_Definition.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 62.8,
}

export function VmApplicationDefinition(props: DiagramNodeProps) {
  return (
    <Shape
      {...VM_APPLICATION_DEFINITION}
      {...props}
      _style={extendStyle(VM_APPLICATION_DEFINITION, props)}
    />
  )
}
