import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON21 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon21;',
  },
  _width: 50,
  _height: 48.5,
}

export function Icon21(props: DiagramNodeProps) {
  return <Shape {...ICON21} {...props} _style={extendStyle(ICON21, props)} />
}
