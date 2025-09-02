import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONFIG_RULE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.config_rule;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 55.5,
  _original_height: 72,
}

export function ConfigRule(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONFIG_RULE}
      {...props}
      _style={extendStyle(CONFIG_RULE, props)}
    />
  )
}
