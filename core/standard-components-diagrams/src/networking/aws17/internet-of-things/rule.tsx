import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RULE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.rule;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 49.5,
  _original_height: 99,
}

export function Rule(props: DiagramNodeProps) {
  return <Shape {...RULE} {...props} _style={extendStyle(RULE, props)} />
}
