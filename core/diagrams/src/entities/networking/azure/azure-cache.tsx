import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_CACHE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.azure_cache;',
  },
  _original_width: 45,
  _original_height: 50,
}

export function AzureCache(props: NodeProps) {
  return (
    <Shape
      {...AZURE_CACHE}
      {...props}
      _style={extendStyle(AZURE_CACHE, props)}
    />
  )
}
