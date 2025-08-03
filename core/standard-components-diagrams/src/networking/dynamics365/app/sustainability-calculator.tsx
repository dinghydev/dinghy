import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUSTAINABILITY_CALCULATOR = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/SustainabilityCalculator.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function SustainabilityCalculator(props: DiagramNodeProps) {
  return <Shape {...SUSTAINABILITY_CALCULATOR} {...props} />
}
