import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUCKET_WITH_OBJECTS = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.bucket_with_objects;',
  _width: 75,
  _height: 78,
}

export function BucketWithObjects(props: DiagramNodeProps) {
  return <Shape {...BUCKET_WITH_OBJECTS} {...props} />
}
