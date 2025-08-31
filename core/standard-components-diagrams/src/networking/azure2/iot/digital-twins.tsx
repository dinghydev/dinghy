import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIGITAL_TWINS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Digital_Twins.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function DigitalTwins(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIGITAL_TWINS}
      {...props}
      _style={extendStyle(DIGITAL_TWINS, props)}
    />
  )
}
