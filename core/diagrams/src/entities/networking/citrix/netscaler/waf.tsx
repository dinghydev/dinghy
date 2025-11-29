import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WAF = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.waf;',
  },
  _width: 50,
  _height: 24.705,
}

export function Waf(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WAF)} />
}
