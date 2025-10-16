import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VPC = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.vpc;fillColor=#F58536;gradientColor=none;',
  },
  _original_width: 67.5,
  _original_height: 81,
}

export function Vpc(props: DiagramNodeProps) {
  return <Shape {...VPC} {...props} _style={extendStyle(VPC, props)} />
}
