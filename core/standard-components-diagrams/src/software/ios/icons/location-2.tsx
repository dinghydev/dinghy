import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCATION_2 = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.location_2;',
  _width: 30,
  _height: 30,
}

export function Location2(props: DiagramNodeProps) {
  return (
    <Shape {...LOCATION_2} {...props} _style={extendStyle(LOCATION_2, props)} />
  )
}
