import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ICON45 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon45;',
  },
  _original_width: 50,
  _original_height: 49.5,
}

export function Icon45(props: DiagramNodeProps) {
  return <Shape {...ICON45} {...props} _style={extendStyle(ICON45, props)} />
}
