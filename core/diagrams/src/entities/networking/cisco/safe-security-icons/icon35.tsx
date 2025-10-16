import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ICON35 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon35;',
  },
  _width: 50,
  _height: 28.499999999999996,
}

export function Icon35(props: DiagramNodeProps) {
  return <Shape {...ICON35} {...props} _style={extendStyle(ICON35, props)} />
}
