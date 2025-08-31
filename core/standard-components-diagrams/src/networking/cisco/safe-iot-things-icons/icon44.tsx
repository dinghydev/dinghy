import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON44 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon44;',
  _width: 49.5,
  _height: 50,
}

export function Icon44(props: DiagramNodeProps) {
  return <Shape {...ICON44} {...props} _style={extendStyle(ICON44, props)} />
}
