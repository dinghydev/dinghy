import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STREAMING_COMPUTING = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/analytics/streaming_computing.svg;',
  _width: 60,
  _height: 60,
}

export function StreamingComputing(props: DiagramNodeProps) {
  return <Shape {...STREAMING_COMPUTING} {...props} />
}
