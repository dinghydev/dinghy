import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON43 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon43;',
  _width: 48,
  _height: 50,
}

export function Icon43(props: DiagramNodeProps) {
  return <Shape {...ICON43} {...props} _style={extendStyle(ICON43, props)} />
}
