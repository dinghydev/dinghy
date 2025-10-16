import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ICON46 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon46;',
  },
  _original_width: 50,
  _original_height: 41.5,
}

export function Icon46(props: DiagramNodeProps) {
  return <Shape {...ICON46} {...props} _style={extendStyle(ICON46, props)} />
}
