import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FUNCTION_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.function;',
  },
  _width: 45,
  _height: 45,
}

export function Function2(props: DiagramNodeProps) {
  return (
    <Shape {...FUNCTION_2} {...props} _style={extendStyle(FUNCTION_2, props)} />
  )
}
