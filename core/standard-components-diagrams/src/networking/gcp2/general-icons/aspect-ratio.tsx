import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ASPECT_RATIO = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.aspect_ratio',
  },
  _original_width: 100,
  _original_height: 92,
}

export function AspectRatio(props: DiagramNodeProps) {
  return (
    <Shape
      {...ASPECT_RATIO}
      {...props}
      _style={extendStyle(ASPECT_RATIO, props)}
    />
  )
}
