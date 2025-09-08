import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEPLOYMENT = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.deployment;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 55.5,
  _original_height: 73.5,
}

export function Deployment(props: DiagramNodeProps) {
  return (
    <Shape {...DEPLOYMENT} {...props} _style={extendStyle(DEPLOYMENT, props)} />
  )
}
