import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VM_APPLICATION_DEFINITION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/VM_Application_Definition.svg;',
  _width: 68,
  _height: 62.8,
}

export function VmApplicationDefinition(props: DiagramNodeProps) {
  return <Shape {...VM_APPLICATION_DEFINITION} {...props} />
}
