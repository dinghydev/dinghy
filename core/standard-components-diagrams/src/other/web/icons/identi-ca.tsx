import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IDENTI_CA = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.identi.ca;gradientColor=#DFDEDE',
  },
  _width: 102.4,
  _height: 102.4,
}

export function IdentiCa(props: DiagramNodeProps) {
  return (
    <Shape {...IDENTI_CA} {...props} _style={extendStyle(IDENTI_CA, props)} />
  )
}
