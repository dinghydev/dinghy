import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPLICATION_FUNCTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.application;appType=func;archiType=rounded;',
  },
  _width: 150,
  _height: 75,
}

export function ApplicationFunction(props: NodeProps) {
  return (
    <Shape
      {...APPLICATION_FUNCTION}
      {...props}
      _style={extendStyle(APPLICATION_FUNCTION, props)}
    />
  )
}
