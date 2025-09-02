import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONNECTOR_PROPERTY = {
  _style: {
    entity:
      'shape=rect;html=1;overflow=fill;whiteSpace=wrap;	recursiveResize=0;',
  },
  _original_width: 0,
  _original_height: 250,
}

export function ConnectorProperty(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONNECTOR_PROPERTY}
      {...props}
      _style={extendStyle(CONNECTOR_PROPERTY, props)}
    />
  )
}
