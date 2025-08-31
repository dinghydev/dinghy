import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VALUE = {
  _style: {
    entity: 'fillColor=#ffff99;whiteSpace=wrap;shape=ellipse;html=1;',
  },
  _width: 100,
  _height: 56.25,
}

export function Value(props: DiagramNodeProps) {
  return <Shape {...VALUE} {...props} _style={extendStyle(VALUE, props)} />
}
