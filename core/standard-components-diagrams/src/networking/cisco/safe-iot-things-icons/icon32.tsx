import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON32 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon32;',
  },
  _original_width: 50,
  _original_height: 28.000000000000004,
}

export function Icon32(props: DiagramNodeProps) {
  return <Shape {...ICON32} {...props} _style={extendStyle(ICON32, props)} />
}
