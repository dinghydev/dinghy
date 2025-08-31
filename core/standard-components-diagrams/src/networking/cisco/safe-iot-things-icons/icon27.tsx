import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON27 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon27;',
  _width: 50,
  _height: 25,
}

export function Icon27(props: DiagramNodeProps) {
  return <Shape {...ICON27} {...props} _style={extendStyle(ICON27, props)} />
}
