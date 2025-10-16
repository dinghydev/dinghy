import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUDWATCH = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.cloudwatch;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 82.5,
  _original_height: 93,
}

export function Cloudwatch(props: DiagramNodeProps) {
  return (
    <Shape {...CLOUDWATCH} {...props} _style={extendStyle(CLOUDWATCH, props)} />
  )
}
