import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON10 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon10;',
  },
  _original_width: 25,
  _original_height: 50,
}

export function Icon10(props: DiagramNodeProps) {
  return <Shape {...ICON10} {...props} _style={extendStyle(ICON10, props)} />
}
