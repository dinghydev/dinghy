import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RULE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.rule;fillColor=#5294CF;gradientColor=none;',
  },
  _width: 49.5,
  _height: 99,
}

export function Rule(props: DiagramNodeProps) {
  return <Shape {...RULE} {...props} _style={extendStyle(RULE, props)} />
}
