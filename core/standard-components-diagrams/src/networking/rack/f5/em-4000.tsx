import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EM_4000 = {
  _style:
    'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.f5.em_4000;',
  _width: 168,
  _height: 20,
}

export function Em4000(props: DiagramNodeProps) {
  return <Shape {...EM_4000} {...props} _style={extendStyle(EM_4000, props)} />
}
