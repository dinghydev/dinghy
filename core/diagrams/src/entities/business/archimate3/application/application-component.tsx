import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const APPLICATION_COMPONENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.application;appType=comp;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function ApplicationComponent(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_COMPONENT}
      {...props}
      _style={extendStyle(APPLICATION_COMPONENT, props)}
    />
  )
}
