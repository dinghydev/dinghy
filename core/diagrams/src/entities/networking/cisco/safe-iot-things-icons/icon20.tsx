import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ICON20 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon20;',
  },
  _original_width: 45.5,
  _original_height: 50,
}

export function Icon20(props: DiagramNodeProps) {
  return <Shape {...ICON20} {...props} _style={extendStyle(ICON20, props)} />
}
