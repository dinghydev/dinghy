import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OVERVIEW = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.oms.overview',
  },
  _width: 50,
  _height: 41,
}

export function Overview(props: DiagramNodeProps) {
  return (
    <Shape {...OVERVIEW} {...props} _style={extendStyle(OVERVIEW, props)} />
  )
}
