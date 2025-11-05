import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_SENTINEL = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Sentinel.svg;strokeColor=none;',
  },
  _original_width: 44,
  _original_height: 50,
}

export function AzureSentinel(props: NodeProps) {
  return (
    <Shape
      {...AZURE_SENTINEL}
      {...props}
      _style={extendStyle(AZURE_SENTINEL, props)}
    />
  )
}
