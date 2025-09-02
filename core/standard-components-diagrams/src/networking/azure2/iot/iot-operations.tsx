import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IOT_OPERATIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Azure_IoT_Operations.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 64.24,
}

export function IotOperations(props: DiagramNodeProps) {
  return (
    <Shape
      {...IOT_OPERATIONS}
      {...props}
      _style={extendStyle(IOT_OPERATIONS, props)}
    />
  )
}
