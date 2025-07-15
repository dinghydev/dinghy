import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_AD_B2C = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_AD_B2C.svg;',
  _width: 50,
  _height: 46,
}

export function AzureAdB2c(props: DiagramNodeProps) {
  return <Shape {...AZURE_AD_B2C} {...props} />
}
