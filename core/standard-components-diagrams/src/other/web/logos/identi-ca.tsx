import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IDENTI_CA = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.identi.ca',
  _width: 74.2,
  _height: 47.6,
}

export function IdentiCa(props: DiagramNodeProps) {
  return (
    <Shape {...IDENTI_CA} {...props} _style={extendStyle(IDENTI_CA, props)} />
  )
}
