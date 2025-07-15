import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FILTERING_RULE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.filtering_rule;fillColor=#759C3E;gradientColor=none;',
  _width: 69,
  _height: 72,
}

export function FilteringRule(props: DiagramNodeProps) {
  return <Shape {...FILTERING_RULE} {...props} />
}
