import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON45 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon45;',
  _width: 50,
  _height: 49.5,
}

export function Icon45(props: DiagramNodeProps) {
  return <Shape {...ICON45} {...props} />
}
