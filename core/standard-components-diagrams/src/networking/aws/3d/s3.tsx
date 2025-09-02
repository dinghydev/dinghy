import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const S3_CONST = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.s3;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _original_width: 231.5,
  _original_height: 239,
}

export function S3(props: DiagramNodeProps) {
  return (
    <Shape {...S3_CONST} {...props} _style={extendStyle(S3_CONST, props)} />
  )
}
