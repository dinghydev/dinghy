import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OFF_PAGE_CONNECTOR = {
  _style: {
    entity: 'shape=offPageConnector;whiteSpace=wrap;html=1;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function OffPageConnector(props: DiagramNodeProps) {
  return (
    <Shape
      {...OFF_PAGE_CONNECTOR}
      {...props}
      _style={extendStyle(OFF_PAGE_CONNECTOR, props)}
    />
  )
}
