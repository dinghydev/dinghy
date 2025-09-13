import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ICON3 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon3;',
  },
  _width: 50,
  _height: 24,
}

export function Icon3(props: DiagramNodeProps) {
  return <Shape {...ICON3} {...props} _style={extendStyle(ICON3, props)} />
}
