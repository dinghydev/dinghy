import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON33 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon33;',
  },
  _original_width: 50,
  _original_height: 39,
}

export function Icon33(props: DiagramNodeProps) {
  return <Shape {...ICON33} {...props} _style={extendStyle(ICON33, props)} />
}
