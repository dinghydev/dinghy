import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ICON5 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon5;',
  },
  _width: 28.999999999999996,
  _height: 50,
}

export function Icon5(props: DiagramNodeProps) {
  return <Shape {...ICON5} {...props} _style={extendStyle(ICON5, props)} />
}
