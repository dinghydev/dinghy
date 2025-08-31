import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPERATION_LOG_CLASSIC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Operation_Log_Classic.svg;strokeColor=none;',
  },
  _width: 56.00000000000001,
  _height: 67,
}

export function OperationLogClassic(props: DiagramNodeProps) {
  return (
    <Shape
      {...OPERATION_LOG_CLASSIC}
      {...props}
      _style={extendStyle(OPERATION_LOG_CLASSIC, props)}
    />
  )
}
