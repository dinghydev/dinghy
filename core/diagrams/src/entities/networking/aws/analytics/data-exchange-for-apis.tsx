import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_EXCHANGE_FOR_APIS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.data_exchange_for_apis;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function DataExchangeForApis(props: NodeProps) {
  return (
    <Shape
      {...DATA_EXCHANGE_FOR_APIS}
      {...props}
      _style={extendStyle(DATA_EXCHANGE_FOR_APIS, props)}
    />
  )
}
