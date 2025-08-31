import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_SENTINEL = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Sentinel.svg;strokeColor=none;',
  },
  _width: 44,
  _height: 50,
}

export function AzureSentinel(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_SENTINEL}
      {...props}
      _style={extendStyle(AZURE_SENTINEL, props)}
    />
  )
}
