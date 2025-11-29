import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPLICATION_COMPONENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate.application;appType=comp',
  },
  _width: 100,
  _height: 75,
}

export function ApplicationComponent(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, APPLICATION_COMPONENT)} />
}
