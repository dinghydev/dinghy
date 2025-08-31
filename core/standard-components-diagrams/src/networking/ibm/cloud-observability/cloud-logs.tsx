import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_LOGS = {
  _style:
    'shape=rect;fillColor=#009D9A;aspect=fixed;resizable=0;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeColor=none;fontSize=14;',
  _width: 0,
  _height: 48,
}

export function CloudLogs(props: DiagramNodeProps) {
  return (
    <Shape {...CLOUD_LOGS} {...props} _style={extendStyle(CLOUD_LOGS, props)} />
  )
}
