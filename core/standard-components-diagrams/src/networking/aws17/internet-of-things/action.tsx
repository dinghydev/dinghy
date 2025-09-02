import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTION = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.action;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 63,
  _original_height: 64.5,
}

export function Action(props: DiagramNodeProps) {
  return <Shape {...ACTION} {...props} _style={extendStyle(ACTION, props)} />
}
