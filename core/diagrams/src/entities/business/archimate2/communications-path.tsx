import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMMUNICATIONS_PATH = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.application;appType=commPath',
  },
  _width: 100,
  _height: 75,
}

export function CommunicationsPath(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMMUNICATIONS_PATH}
      {...props}
      _style={extendStyle(COMMUNICATIONS_PATH, props)}
    />
  )
}
