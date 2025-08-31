import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_AD_B2C = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Azure_AD_B2C2.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 60.440000000000005,
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
