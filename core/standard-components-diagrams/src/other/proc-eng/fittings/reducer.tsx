import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REDUCER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.reducer;',
  },
  _width: 70,
  _height: 50,
}

export function Reducer(props: DiagramNodeProps) {
  return <Shape {...REDUCER} {...props} _style={extendStyle(REDUCER, props)} />
}
