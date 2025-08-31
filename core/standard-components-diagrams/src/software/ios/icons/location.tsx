import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCATION = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.location;',
  },
  _width: 24,
  _height: 30,
}

export function Location(props: DiagramNodeProps) {
  return (
    <Shape {...LOCATION} {...props} _style={extendStyle(LOCATION, props)} />
  )
}
