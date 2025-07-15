import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_CACHE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.azure_cache;',
  _width: 45,
  _height: 50,
}

export function AzureCache(props: DiagramNodeProps) {
  return <Shape {...AZURE_CACHE} {...props} />
}
