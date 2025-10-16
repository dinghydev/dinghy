import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ICON7 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon7;',
  },
  _original_width: 41,
  _original_height: 50,
}

export function Icon7(props: DiagramNodeProps) {
  return <Shape {...ICON7} {...props} _style={extendStyle(ICON7, props)} />
}
