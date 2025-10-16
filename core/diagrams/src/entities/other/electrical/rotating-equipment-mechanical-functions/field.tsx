import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FIELD = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.field;pointerEvents=1;',
  },
  _width: 90,
  _height: 15,
}

export function Field(props: DiagramNodeProps) {
  return <Shape {...FIELD} {...props} _style={extendStyle(FIELD, props)} />
}
