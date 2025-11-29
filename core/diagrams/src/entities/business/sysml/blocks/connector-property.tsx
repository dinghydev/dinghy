import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONNECTOR_PROPERTY = {
  _style: {
    entity:
      'shape=rect;html=1;overflow=fill;whiteSpace=wrap;	recursiveResize=0;',
  },
  _width: 0,
  _height: 250,
}

export function ConnectorProperty(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONNECTOR_PROPERTY)} />
}
