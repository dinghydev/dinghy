import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EMR = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.emr;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 67.5,
  _original_height: 81,
}

export function Emr(props: DiagramNodeProps) {
  return <Shape {...EMR} {...props} _style={extendStyle(EMR, props)} />
}
