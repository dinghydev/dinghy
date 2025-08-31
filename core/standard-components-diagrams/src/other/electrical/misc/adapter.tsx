import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADAPTER = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.adapter',
  },
  _width: 100,
  _height: 40,
}

export function Adapter(props: DiagramNodeProps) {
  return <Shape {...ADAPTER} {...props} _style={extendStyle(ADAPTER, props)} />
}
