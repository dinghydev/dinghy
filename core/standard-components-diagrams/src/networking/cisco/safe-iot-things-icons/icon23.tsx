import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON23 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon23;',
  },
  _width: 50,
  _height: 45,
}

export function Icon23(props: DiagramNodeProps) {
  return <Shape {...ICON23} {...props} _style={extendStyle(ICON23, props)} />
}
