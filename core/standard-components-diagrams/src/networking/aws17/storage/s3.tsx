import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const S3_CONST = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.s3;fillColor=#E05243;gradientColor=none;',
  _width: 76.5,
  _height: 93,
}

export function S3(props: DiagramNodeProps) {
  return <Shape {...S3_CONST} {...props} />
}
