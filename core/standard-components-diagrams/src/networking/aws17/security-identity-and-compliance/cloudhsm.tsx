import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUDHSM = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.cloudhsm;fillColor=#759C3E;gradientColor=none;',
  },
  _width: 73.5,
  _height: 84,
}

export function Cloudhsm(props: DiagramNodeProps) {
  return (
    <Shape {...CLOUDHSM} {...props} _style={extendStyle(CLOUDHSM, props)} />
  )
}
