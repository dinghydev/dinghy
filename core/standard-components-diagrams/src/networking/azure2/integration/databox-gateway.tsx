import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABOX_GATEWAY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Azure_Stack_Edge.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 48,
}

export function DataboxGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABOX_GATEWAY}
      {...props}
      _style={extendStyle(DATABOX_GATEWAY, props)}
    />
  )
}
