import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GAP = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#FFE0E0;shape=mxgraph.archimate3.application;appType=gap;',
  },
  _width: 150,
  _height: 75,
}

export function Gap(props: DiagramNodeProps) {
  return <Shape {...GAP} {...props} _style={extendStyle(GAP, props)} />
}
