import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SERVICES = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.services;',
  },
  _original_width: 50,
  _original_height: 46,
}

export function Services(props: DiagramNodeProps) {
  return (
    <Shape {...SERVICES} {...props} _style={extendStyle(SERVICES, props)} />
  )
}
