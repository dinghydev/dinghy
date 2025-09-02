import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_INTERFACE_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate.application;appType=interface2',
  },
  _original_width: 100,
  _original_height: 75,
}

export function ApplicationInterface2(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_INTERFACE_2}
      {...props}
      _style={extendStyle(APPLICATION_INTERFACE_2, props)}
    />
  )
}
