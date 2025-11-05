import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MULTI_PROCESS = {
  _style: {
    entity: 'ellipse;shape=doubleEllipse;whiteSpace=wrap;html=1;aspect=fixed;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function MultiProcess(props: NodeProps) {
  return (
    <Shape
      {...MULTI_PROCESS}
      {...props}
      _style={extendStyle(MULTI_PROCESS, props)}
    />
  )
}
