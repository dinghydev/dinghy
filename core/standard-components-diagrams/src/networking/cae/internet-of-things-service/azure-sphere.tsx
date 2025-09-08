import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AZURE_SPHERE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Sphere.svg;strokeColor=none;',
  },
  _original_width: 48,
  _original_height: 50,
}

export function AzureSphere(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_SPHERE}
      {...props}
      _style={extendStyle(AZURE_SPHERE, props)}
    />
  )
}
