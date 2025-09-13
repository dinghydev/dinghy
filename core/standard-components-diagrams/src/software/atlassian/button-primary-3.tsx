import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_PRIMARY_3 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.atlassian.close;fillColor=#BA3200;strokeColor=none;html=1;sketch=0;',
  },
  _width: 1,
  _height: 33,
}

export function ButtonPrimary3(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_PRIMARY_3}
      {...props}
      _style={extendStyle(BUTTON_PRIMARY_3, props)}
    />
  )
}
