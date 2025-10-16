import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WAF = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.waf;',
  },
  _original_width: 40,
  _original_height: 50,
}

export function Waf(props: DiagramNodeProps) {
  return <Shape {...WAF} {...props} _style={extendStyle(WAF, props)} />
}
