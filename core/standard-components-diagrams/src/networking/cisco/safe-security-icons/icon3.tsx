import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON3 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon3;',
  },
  _width: 39,
  _height: 50,
}

export function Icon3(props: DiagramNodeProps) {
  return <Shape {...ICON3} {...props} _style={extendStyle(ICON3, props)} />
}
