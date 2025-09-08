import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ICON12 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon12;',
  },
  _original_width: 50,
  _original_height: 32.5,
}

export function Icon12(props: DiagramNodeProps) {
  return <Shape {...ICON12} {...props} _style={extendStyle(ICON12, props)} />
}
