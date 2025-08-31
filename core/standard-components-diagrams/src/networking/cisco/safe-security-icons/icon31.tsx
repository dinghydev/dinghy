import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON31 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon31;',
  },
  _width: 50,
  _height: 43,
}

export function Icon31(props: DiagramNodeProps) {
  return <Shape {...ICON31} {...props} _style={extendStyle(ICON31, props)} />
}
