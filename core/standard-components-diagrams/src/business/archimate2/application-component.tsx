import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_COMPONENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate.application;appType=comp',
  },
  _original_width: 100,
  _original_height: 75,
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
