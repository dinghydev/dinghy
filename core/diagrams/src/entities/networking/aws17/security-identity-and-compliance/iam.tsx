import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IAM = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.iam;fillColor=#759C3E;gradientColor=none;',
  },
  _width: 42,
  _height: 81,
}

export function Iam(props: DiagramNodeProps) {
  return <Shape {...IAM} {...props} _style={extendStyle(IAM, props)} />
}
