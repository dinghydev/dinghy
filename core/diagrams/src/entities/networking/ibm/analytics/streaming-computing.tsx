import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STREAMING_COMPUTING = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/analytics/streaming_computing.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function StreamingComputing(props: DiagramNodeProps) {
  return (
    <Shape
      {...STREAMING_COMPUTING}
      {...props}
      _style={extendStyle(STREAMING_COMPUTING, props)}
    />
  )
}
