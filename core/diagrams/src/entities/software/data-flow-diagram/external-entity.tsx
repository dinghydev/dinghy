import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXTERNAL_ENTITY = {
  _style: {
    entity: 'html=1;dashed=0;whiteSpace=wrap;shape=mxgraph.dfd.externalEntity',
  },
  _width: 0,
  _height: 100,
}

export function ExternalEntity(props: NodeProps) {
  return (
    <Shape
      {...EXTERNAL_ENTITY}
      {...props}
      _style={extendStyle(EXTERNAL_ENTITY, props)}
    />
  )
}
