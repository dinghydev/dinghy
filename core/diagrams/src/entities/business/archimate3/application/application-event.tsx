import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPLICATION_EVENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.application;appType=event;archiType=rounded',
  },
  _width: 150,
  _height: 75,
}

export function ApplicationEvent(props: NodeProps) {
  return (
    <Shape
      {...APPLICATION_EVENT}
      {...props}
      _style={extendStyle(APPLICATION_EVENT, props)}
    />
  )
}
