import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ICON42 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon42;',
  },
  _original_width: 28.999999999999996,
  _original_height: 50,
}

export function Icon42(props: DiagramNodeProps) {
  return <Shape {...ICON42} {...props} _style={extendStyle(ICON42, props)} />
}
