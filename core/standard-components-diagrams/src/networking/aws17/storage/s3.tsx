import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const S3_CONST = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.s3;fillColor=#E05243;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function S3(props: DiagramNodeProps) {
  return (
    <Shape {...S3_CONST} {...props} _style={extendStyle(S3_CONST, props)} />
  )
}
