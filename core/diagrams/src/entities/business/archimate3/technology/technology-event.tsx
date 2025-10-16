import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TECHNOLOGY_EVENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=event;archiType=rounded',
  },
  _width: 150,
  _height: 75,
}

export function TechnologyEvent(props: DiagramNodeProps) {
  return (
    <Shape
      {...TECHNOLOGY_EVENT}
      {...props}
      _style={extendStyle(TECHNOLOGY_EVENT, props)}
    />
  )
}
