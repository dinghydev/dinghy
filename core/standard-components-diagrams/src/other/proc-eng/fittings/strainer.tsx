import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STRAINER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.strainer;',
  },
  _width: 40,
  _height: 80,
}

export function Strainer(props: DiagramNodeProps) {
  return (
    <Shape {...STRAINER} {...props} _style={extendStyle(STRAINER, props)} />
  )
}
