import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IOT_OPERATIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Azure_IoT_Operations.svg;',
  _width: 68,
  _height: 64.24,
}

export function IotOperations(props: DiagramNodeProps) {
  return <Shape {...IOT_OPERATIONS} {...props} />
}
