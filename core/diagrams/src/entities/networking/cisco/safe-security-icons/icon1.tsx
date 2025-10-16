import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ICON1 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon1;',
  },
  _original_width: 47.5,
  _original_height: 50,
}

export function Icon1(props: DiagramNodeProps) {
  return <Shape {...ICON1} {...props} _style={extendStyle(ICON1, props)} />
}
