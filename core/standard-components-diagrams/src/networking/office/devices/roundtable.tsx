import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROUNDTABLE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.roundtable;',
  },
  _original_width: 50,
  _original_height: 58,
}

export function Roundtable(props: DiagramNodeProps) {
  return (
    <Shape {...ROUNDTABLE} {...props} _style={extendStyle(ROUNDTABLE, props)} />
  )
}
