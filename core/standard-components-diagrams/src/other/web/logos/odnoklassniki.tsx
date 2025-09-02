import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ODNOKLASSNIKI = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.odnoklassniki;fillColor=#F58220;strokeColor=none',
  },
  _original_width: 49.400000000000006,
  _original_height: 82,
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
