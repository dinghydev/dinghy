import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON20 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon20;',
  _width: 45.5,
  _height: 50,
}

export function Icon20(props: DiagramNodeProps) {
  return <Shape {...ICON20} {...props} _style={extendStyle(ICON20, props)} />
}
