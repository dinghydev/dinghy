import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON40 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon40;',
  },
  _original_width: 50,
  _original_height: 33,
}

export function Icon40(props: DiagramNodeProps) {
  return <Shape {...ICON40} {...props} _style={extendStyle(ICON40, props)} />
}
