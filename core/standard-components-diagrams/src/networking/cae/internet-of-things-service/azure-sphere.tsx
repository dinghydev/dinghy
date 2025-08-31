import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_SPHERE = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Sphere.svg;strokeColor=none;',
  _width: 48,
  _height: 50,
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
