import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GROUND_TRUTH = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/data/ground_truth.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function GroundTruth(props: DiagramNodeProps) {
  return (
    <Shape
      {...GROUND_TRUTH}
      {...props}
      _style={extendStyle(GROUND_TRUTH, props)}
    />
  )
}
