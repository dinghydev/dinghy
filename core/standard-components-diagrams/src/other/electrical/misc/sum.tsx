import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUM = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.sum;',
  },
  _width: 60,
  _height: 60,
}

export function Sum(props: DiagramNodeProps) {
  return <Shape {...SUM} {...props} _style={extendStyle(SUM, props)} />
}
