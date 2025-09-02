import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_MARKETPLACE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.azure_marketplace;',
  },
  _original_width: 40,
  _original_height: 50,
}

export function AzureMarketplace(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_MARKETPLACE}
      {...props}
      _style={extendStyle(AZURE_MARKETPLACE, props)}
    />
  )
}
