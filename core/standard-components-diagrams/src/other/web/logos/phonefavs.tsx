import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PHONEFAVS = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.phonefavs',
  _width: 64.4,
  _height: 78.80000000000001,
}

export function Phonefavs(props: DiagramNodeProps) {
  return (
    <Shape {...PHONEFAVS} {...props} _style={extendStyle(PHONEFAVS, props)} />
  )
}
