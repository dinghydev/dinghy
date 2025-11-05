import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_LOGS = {
  _style: {
    entity:
      'shape=rect;fillColor=#009D9A;aspect=fixed;resizable=0;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeColor=none;fontSize=14;',
  },
  _width: 0,
  _height: 48,
}

export function CloudLogs(props: NodeProps) {
  return (
    <Shape {...CLOUD_LOGS} {...props} _style={extendStyle(CLOUD_LOGS, props)} />
  )
}
