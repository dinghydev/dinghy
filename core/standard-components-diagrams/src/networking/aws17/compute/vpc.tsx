import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VPC = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.vpc;fillColor=#F58534;gradientColor=none;',
  },
  _width: 67.5,
  _height: 81,
}

export function Vpc(props: DiagramNodeProps) {
  return <Shape {...VPC} {...props} _style={extendStyle(VPC, props)} />
}
