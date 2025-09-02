import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const S3_BUCKET = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.s3Bucket;fillColor=#4286c5;strokeColor=#57A2D8;aspect=fixed;',
  },
  _original_width: 61.5,
  _original_height: 63.800000000000004,
}

export function S3Bucket(props: DiagramNodeProps) {
  return (
    <Shape {...S3_BUCKET} {...props} _style={extendStyle(S3_BUCKET, props)} />
  )
}
