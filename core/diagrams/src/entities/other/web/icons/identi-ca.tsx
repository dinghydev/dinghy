import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IDENTI_CA = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.identi.ca;gradientColor=#DFDEDE',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function IdentiCa(props: DiagramNodeProps) {
  return (
    <Shape {...IDENTI_CA} {...props} _style={extendStyle(IDENTI_CA, props)} />
  )
}
