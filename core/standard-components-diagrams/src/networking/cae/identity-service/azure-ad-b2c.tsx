import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_AD_B2C = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_AD_B2C.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 46,
}

export function AzureAdB2c(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_AD_B2C}
      {...props}
      _style={extendStyle(AZURE_AD_B2C, props)}
    />
  )
}
