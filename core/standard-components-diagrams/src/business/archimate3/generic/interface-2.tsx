import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERFACE_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.interface;',
  },
  _original_width: 70,
  _original_height: 35,
}

export function Interface2(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERFACE_2}
      {...props}
      _style={extendStyle(INTERFACE_2, props)}
    />
  )
}
