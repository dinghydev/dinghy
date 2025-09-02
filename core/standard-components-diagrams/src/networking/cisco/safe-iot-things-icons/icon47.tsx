import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON47 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon47;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Icon47(props: DiagramNodeProps) {
  return <Shape {...ICON47} {...props} _style={extendStyle(ICON47, props)} />
}
