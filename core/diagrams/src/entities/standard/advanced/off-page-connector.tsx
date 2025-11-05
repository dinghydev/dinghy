import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OFF_PAGE_CONNECTOR = {
  _style: {
    entity: 'shape=offPageConnector;whiteSpace=wrap;html=1;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function OffPageConnector(props: NodeProps) {
  return (
    <Shape
      {...OFF_PAGE_CONNECTOR}
      {...props}
      _style={extendStyle(OFF_PAGE_CONNECTOR, props)}
    />
  )
}
