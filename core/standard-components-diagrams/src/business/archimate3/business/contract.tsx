import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONTRACT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.application;appType=contract;archiType=square;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function Contract(props: DiagramNodeProps) {
  return (
    <Shape {...CONTRACT} {...props} _style={extendStyle(CONTRACT, props)} />
  )
}
