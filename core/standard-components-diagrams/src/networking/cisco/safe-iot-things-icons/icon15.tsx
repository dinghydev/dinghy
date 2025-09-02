import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON15 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon15;',
  },
  _original_width: 50,
  _original_height: 32.5,
}

export function Icon15(props: DiagramNodeProps) {
  return <Shape {...ICON15} {...props} _style={extendStyle(ICON15, props)} />
}
