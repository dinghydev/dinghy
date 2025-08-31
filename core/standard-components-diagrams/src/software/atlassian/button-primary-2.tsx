import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_PRIMARY_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.atlassian.checkbox;fillColor=#008465;strokeColor=none;html=1;sketch=0;',
  },
  _width: 1,
  _height: 33,
}

export function ButtonPrimary2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_PRIMARY_2}
      {...props}
      _style={extendStyle(BUTTON_PRIMARY_2, props)}
    />
  )
}
