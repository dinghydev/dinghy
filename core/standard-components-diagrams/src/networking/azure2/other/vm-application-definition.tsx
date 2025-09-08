import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VM_APPLICATION_DEFINITION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/VM_Application_Definition.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 62.8,
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
