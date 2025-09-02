import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AMI = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.ami;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 63,
}

export function Ami(props: DiagramNodeProps) {
  return <Shape {...AMI} {...props} _style={extendStyle(AMI, props)} />
}
