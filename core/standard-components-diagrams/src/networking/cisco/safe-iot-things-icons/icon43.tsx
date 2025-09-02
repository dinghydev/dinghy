import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON43 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon43;',
  },
  _original_width: 48,
  _original_height: 50,
}

export function Icon43(props: DiagramNodeProps) {
  return <Shape {...ICON43} {...props} _style={extendStyle(ICON43, props)} />
}
