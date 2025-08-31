import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON36 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon36;',
  },
  _width: 50,
  _height: 49,
}

export function Icon36(props: DiagramNodeProps) {
  return <Shape {...ICON36} {...props} _style={extendStyle(ICON36, props)} />
}
