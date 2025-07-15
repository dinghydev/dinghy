import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUCKET = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.bucket;fillColor=#E05243;gradientColor=none;',
  _width: 60,
  _height: 61.5,
}

export function Bucket(props: DiagramNodeProps) {
  return <Shape {...BUCKET} {...props} />
}
