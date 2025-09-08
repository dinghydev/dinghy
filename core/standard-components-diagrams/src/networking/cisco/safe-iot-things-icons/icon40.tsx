import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ICON40 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon40;',
  },
  _original_width: 50,
  _original_height: 44.5,
}

export function Icon40(props: DiagramNodeProps) {
  return <Shape {...ICON40} {...props} _style={extendStyle(ICON40, props)} />
}
