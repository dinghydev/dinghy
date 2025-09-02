import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IAM = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.iam;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 42,
  _original_height: 81,
}

export function Iam(props: DiagramNodeProps) {
  return <Shape {...IAM} {...props} _style={extendStyle(IAM, props)} />
}
