import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_SEARCH = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Search.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function AzureSearch(props: NodeProps) {
  return (
    <Shape
      {...AZURE_SEARCH}
      {...props}
      _style={extendStyle(AZURE_SEARCH, props)}
    />
  )
}
