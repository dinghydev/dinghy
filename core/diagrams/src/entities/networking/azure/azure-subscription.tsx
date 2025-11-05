import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_SUBSCRIPTION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.azure_subscription;',
  },
  _width: 50,
  _height: 35,
}

export function AzureSubscription(props: NodeProps) {
  return (
    <Shape
      {...AZURE_SUBSCRIPTION}
      {...props}
      _style={extendStyle(AZURE_SUBSCRIPTION, props)}
    />
  )
}
