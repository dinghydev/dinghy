import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUSTAINABILITY_CALCULATOR = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/SustainabilityCalculator.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function SustainabilityCalculator(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUSTAINABILITY_CALCULATOR}
      {...props}
      _style={extendStyle(SUSTAINABILITY_CALCULATOR, props)}
    />
  )
}
