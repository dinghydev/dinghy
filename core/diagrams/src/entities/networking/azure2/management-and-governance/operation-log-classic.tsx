import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OPERATION_LOG_CLASSIC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Operation_Log_Classic.svg;strokeColor=none;',
  },
  _original_width: 56.00000000000001,
  _original_height: 67,
}

export function OperationLogClassic(props: NodeProps) {
  return (
    <Shape
      {...OPERATION_LOG_CLASSIC}
      {...props}
      _style={extendStyle(OPERATION_LOG_CLASSIC, props)}
    />
  )
}
