import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON24 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon24;',
  },
  _width: 50,
  _height: 43.5,
}

export function Icon24(props: DiagramNodeProps) {
  return <Shape {...ICON24} {...props} _style={extendStyle(ICON24, props)} />
}
