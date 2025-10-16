import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RESOURCE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#F5DEAA;shape=mxgraph.archimate3.application;appType=resource;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function Resource(props: DiagramNodeProps) {
  return (
    <Shape {...RESOURCE} {...props} _style={extendStyle(RESOURCE, props)} />
  )
}
