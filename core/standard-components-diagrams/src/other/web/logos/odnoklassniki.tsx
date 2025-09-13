import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ODNOKLASSNIKI = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.odnoklassniki;fillColor=#F58220;strokeColor=none',
  },
  _width: 49.400000000000006,
  _height: 82,
}

export function Odnoklassniki(props: DiagramNodeProps) {
  return (
    <Shape
      {...ODNOKLASSNIKI}
      {...props}
      _style={extendStyle(ODNOKLASSNIKI, props)}
    />
  )
}
