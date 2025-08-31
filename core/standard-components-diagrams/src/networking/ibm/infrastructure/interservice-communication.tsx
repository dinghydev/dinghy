import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERSERVICE_COMMUNICATION = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/infrastructure/interservice_communication.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function InterserviceCommunication(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERSERVICE_COMMUNICATION}
      {...props}
      _style={extendStyle(INTERSERVICE_COMMUNICATION, props)}
    />
  )
}
