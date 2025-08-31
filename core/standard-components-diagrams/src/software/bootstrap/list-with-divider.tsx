import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIST_WITH_DIVIDER = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;fillColor=#ffffff;strokeColor=#999999;',
  },
  _width: 0,
  _height: 345,
}

export function ListWithDivider(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIST_WITH_DIVIDER}
      {...props}
      _style={extendStyle(LIST_WITH_DIVIDER, props)}
    />
  )
}
