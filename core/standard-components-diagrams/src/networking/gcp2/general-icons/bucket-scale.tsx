import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUCKET_SCALE = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.bucket_scale',
  _width: 100,
  _height: 81,
}

export function BucketScale(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUCKET_SCALE}
      {...props}
      _style={extendStyle(BUCKET_SCALE, props)}
    />
  )
}
