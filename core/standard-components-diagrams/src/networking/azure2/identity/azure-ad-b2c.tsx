import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_AD_B2C = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Azure_AD_B2C2.svg;',
  _width: 68,
  _height: 60.440000000000005,
}

export function AzureAdB2c(props: DiagramNodeProps) {
  return <Shape {...AZURE_AD_B2C} {...props} />
}
