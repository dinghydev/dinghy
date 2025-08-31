import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON37 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon37;',
  },
  _width: 40.5,
  _height: 50,
}

export function Icon37(props: DiagramNodeProps) {
  return <Shape {...ICON37} {...props} _style={extendStyle(ICON37, props)} />
}
