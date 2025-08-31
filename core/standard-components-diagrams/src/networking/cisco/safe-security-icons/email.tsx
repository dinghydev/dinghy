import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EMAIL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.email;',
  },
  _width: 50,
  _height: 35.5,
}

export function Email(props: DiagramNodeProps) {
  return <Shape {...EMAIL} {...props} _style={extendStyle(EMAIL, props)} />
}
