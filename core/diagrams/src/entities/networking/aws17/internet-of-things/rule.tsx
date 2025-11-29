import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RULE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.rule;fillColor=#5294CF;gradientColor=none;',
  },
  _width: 49.5,
  _height: 99,
}

export function Rule(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RULE)} />
}
