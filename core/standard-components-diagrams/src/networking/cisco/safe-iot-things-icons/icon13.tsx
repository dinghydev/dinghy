import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ICON13 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon13;',
  },
  _width: 50,
  _height: 28.000000000000004,
}

export function Icon13(props: DiagramNodeProps) {
  return <Shape {...ICON13} {...props} _style={extendStyle(ICON13, props)} />
}
