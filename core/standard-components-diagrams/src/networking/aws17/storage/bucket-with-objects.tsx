import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUCKET_WITH_OBJECTS = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.bucket_with_objects;fillColor=#E05243;gradientColor=none;',
  _width: 60,
  _height: 61.5,
}

export function BucketWithObjects(props: DiagramNodeProps) {
  return <Shape {...BUCKET_WITH_OBJECTS} {...props} />
}
