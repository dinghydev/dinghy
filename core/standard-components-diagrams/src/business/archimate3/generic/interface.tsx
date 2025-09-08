import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTERFACE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.application;appType=interface;archiType=square;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function Interface(props: DiagramNodeProps) {
  return (
    <Shape {...INTERFACE} {...props} _style={extendStyle(INTERFACE, props)} />
  )
}
