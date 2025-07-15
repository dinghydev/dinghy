import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_MARKETPLACE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.azure_marketplace;',
  _width: 40,
  _height: 50,
}

export function AzureMarketplace(props: DiagramNodeProps) {
  return <Shape {...AZURE_MARKETPLACE} {...props} />
}
