import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VALUE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.application;appType=amValue;archiType=oct;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function Value(props: DiagramNodeProps) {
  return <Shape {...VALUE} {...props} _style={extendStyle(VALUE, props)} />
}
