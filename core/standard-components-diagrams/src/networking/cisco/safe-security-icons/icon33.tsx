import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON33 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon33;',
  },
  _width: 49.5,
  _height: 50,
}

export function Icon33(props: DiagramNodeProps) {
  return <Shape {...ICON33} {...props} _style={extendStyle(ICON33, props)} />
}
