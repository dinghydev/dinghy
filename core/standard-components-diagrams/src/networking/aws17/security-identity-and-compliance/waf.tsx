import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WAF = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.waf;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function Waf(props: DiagramNodeProps) {
  return <Shape {...WAF} {...props} _style={extendStyle(WAF, props)} />
}
