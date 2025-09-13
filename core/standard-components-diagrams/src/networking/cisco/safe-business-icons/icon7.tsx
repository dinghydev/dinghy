import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ICON7 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.business_icons.icon7;',
  },
  _width: 50,
  _height: 35,
}

export function Icon7(props: DiagramNodeProps) {
  return <Shape {...ICON7} {...props} _style={extendStyle(ICON7, props)} />
}
