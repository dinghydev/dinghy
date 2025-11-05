import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUCKET_SCALE = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.bucket_scale',
  },
  _original_width: 100,
  _original_height: 81,
}

export function BucketScale(props: NodeProps) {
  return (
    <Shape
      {...BUCKET_SCALE}
      {...props}
      _style={extendStyle(BUCKET_SCALE, props)}
    />
  )
}
